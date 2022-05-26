import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Perfil from "./Pages/Perfil";
import Produtos from "./Pages/Produtos";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <PrivateRoute path="/perfil" component={Perfil} />
        <PrivateRoute path="/produtos" component={Produtos} />
        <Route path="/" component={() => <Redirect to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
