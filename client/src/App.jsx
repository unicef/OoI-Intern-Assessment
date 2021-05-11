import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Login from "./Login";
import SignUp from "./SignUp";

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}
