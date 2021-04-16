import React from 'react';

import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from './pages/Home'
import Browse from './pages/Browse'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
