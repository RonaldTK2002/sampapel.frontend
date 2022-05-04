import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from "./Pages/Login";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
