import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-ignup-page/signin-signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <div className="container Main">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInSignUp} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
