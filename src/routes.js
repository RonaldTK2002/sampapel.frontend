import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Perfil from "./Pages/Perfil";
import Produtos from "./Pages/Produtos";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/perfil" component={Perfil} />
        <Route path = '/produtos' component = {Produtos}/>
        <Route path="/" component={() => <Redirect to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
