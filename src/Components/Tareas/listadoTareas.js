import React, { Fragment } from "react";
import Tarea from "./tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Elegir hosting", estado: true },
    { nombre: "Escoger Plataforma", estado: false },
    { nombre: "Elegir hosting", estado: true },
  ];

  return (
    <Fragment>
      <h2>Proyecto: Tienda Virtal</h2>

      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>

      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
