import React, { useContext, useEffect } from "react";
import Sidebar from "../Layout/sidebar";
import Barra from "../Layout/barra";
import FormTarea from "../Tareas/formTarea";
import ListadoTareas from "../Tareas/listadoTareas";
import AuthContext from "../../Context/Auntenticacion/authContext";

const Proyectos = () => {
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Barra />
        <main>
          <FormTarea />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
