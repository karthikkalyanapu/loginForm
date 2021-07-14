import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Home from "./Home";

import ProtectedRoutes from "../commonUtils/ProtectedRoutes";

export default function Navbar() {


  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Signup />
        </Route>
        <Route path="/home">
          <ProtectedRoutes Cmp={Home} />
        </Route>
        <Route exact path="*" component={Login} />
      </Switch>
    </Router>
  )
}
