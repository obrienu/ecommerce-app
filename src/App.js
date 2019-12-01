import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Switch, Route} from 'react-router-dom'
import Header from './components/header/header.component'
import SignInSignUp from './pages/sign-in-ignup-page/signin-signup.component'

function App() {


  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
