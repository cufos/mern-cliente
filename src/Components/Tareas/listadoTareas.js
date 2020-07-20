import React, { Fragment, useContext } from "react";
import Tarea from "./tarea";
import proyectoContext from "../../Context/Proyectos/proyectoContext";
import TareaContext from "../../Context/Tarea/tareaContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTareas = () => {
  //estrayendo proyectos de estate inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //obtener las tareas del proyecto
  const tareasContext = useContext(TareaContext);
  const { tareasproyecto } = tareasContext;

  //En caso que no halla proyecto seleccionado
  if (!proyecto) return <h2>Seleccione un Proyecto</h2>;

  //array destructuring
  const [proyectoActual] = proyecto;

  //eliminar las tareas
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual._id);
  };

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea._id} timeout={200} classNames={tarea}>
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
