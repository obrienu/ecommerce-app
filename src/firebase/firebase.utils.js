import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCMLNuHYkzCpyvGjEVAPvNuyAXJzO987SQ",
  authDomain: "e-commdb.firebaseapp.com",
  databaseURL: "https://e-commdb.firebaseio.com",
  projectId: "e-commdb",
  storageBucket: "e-commdb.appspot.com",
  messagingSenderId: "765388143723",
  appId: "1:765388143723:web:b74da87d6021ee7f97852e",
  measurementId: "G-55QM31W6B7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(`An error occured trying to save data: ${error}`);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objToAdd) => {
  const collectionRef = await firestore.collection(collectionKey);
  const batch = await firestore.batch();
  objToAdd.forEach(obj => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });

  return await batch.commit();
};

export const converCollectionSnapshotToMap = async snapShot => {
  const docArray = await snapShot.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      urlParam: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return docArray.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
