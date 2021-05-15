import React from "react";
import Login from './login/loginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Register from './register/registerForm'
export default function App() {
  return <BrowserRouter>
  <Switch>
    <Route exact path={'/login'} component={Login}/>
    <Route exact path={'/register'} component={Register}/>

    <Redirect to={'/login'} />

  </Switch>
  </BrowserRouter>
}
