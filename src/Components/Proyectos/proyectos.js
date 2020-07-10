import React from "react";
import Sidebar from "../Layout/sidebar";
import Barra from "../Layout/barra";
import FormTarea from "../Tareas/formTarea";
import ListadoTareas from "../Tareas/listadoTareas";

const Proyectos = () => {
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
