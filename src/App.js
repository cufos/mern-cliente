import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Components/Auth/login";
import NuevaCuenta from "./Components/Auth/nuevaCuenta";
import Proyectos from "./Components/Proyectos/proyectos";
import ProyectoState from "./Context/Proyectos/proyectoState";
import TareaState from "./Context/Tarea/tareaState";
import AlertaState from "./Context/alertas/alertaState";
import AuthState from "./Context/Auntenticacion/authState";
import tokenAuth from "./config/token";
import RutaPrivada from "./Components/Rutas/rutaPrivada";

const token = localStorage.getItem("token");

if (token) tokenAuth(token);

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <RutaPrivada exact path="/proyectos" component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
