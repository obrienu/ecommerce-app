import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCMLNuHYkzCpyvGjEVAPvNuyAXJzO987SQ",
    authDomain: "e-commdb.firebaseapp.com",
    databaseURL: "https://e-commdb.firebaseio.com",
    projectId: "e-commdb",
    storageBucket: "e-commdb.appspot.com",
    messagingSenderId: "765388143723",
    appId: "1:765388143723:web:b74da87d6021ee7f97852e",
    measurementId: "G-55QM31W6B7"
  } 

  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

  export default firebase