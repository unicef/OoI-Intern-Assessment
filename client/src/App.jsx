import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import LandingPage from "./LandingPage";

export default function App() {

  let isAuthenticated = false;


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <LandingPage /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}
