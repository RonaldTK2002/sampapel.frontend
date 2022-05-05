import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Home from './Pages/Home'
import Cadastro from './Pages/Cadastro'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/cadastro' component = {Cadastro}/>
        <Route path="/login" component={Login} />
        <Route path= '/' component = {()=> <Redirect to ='/login'/>}/>
        <Route path ='/home' component = {Home}/> 
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
