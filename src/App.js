import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Components/Auth/login";
import NuevaCuenta from "./Components/Auth/nuevaCuenta";
import Proyectos from "./Components/Proyectos/proyectos";

function App() {
  return (
    <Router>
      <Switch>
        <Route>exact path='/' component={Login}</Route>
        <Route>exact path='/nueva-cuenta' component={NuevaCuenta}</Route>
        <Route>exact path='/proyectos' component={Proyectos}</Route>
      </Switch>
    </Router>
  );
}

export default App;
