import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom'

function App() {

  const Men = () => (
    <div>
      <h1>This is the hats route</h1>
    </div>
  )

  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/men' component={Men} />
      </Switch>
    </div>
  );
}

export default App;
