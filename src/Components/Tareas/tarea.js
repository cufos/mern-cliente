import React, { useContext } from "react";
import proyectoContext from "../../Context/Proyectos/proyectoContext";
import TareaContext from "../../Context/Tarea/tareaContext";

const Tarea = ({ tarea }) => {
  //extrayendo el proyecto activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //extrayendo el proyecto
  const [proyectoActual] = proyecto;

  //obtener la funcion del context de tarea
  const tareasContext = useContext(TareaContext);
  const {
    eliminarTarea,
    obtenerTareas,
    cambiarEstadoTarea,
    guardarTareaActual,
  } = tareasContext;

  //funcion que se ejecuta cuando el usuario presiona el btn de eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  //funcion que modifica el estado de la tarea
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    cambiarEstadoTarea(tarea);
  };

  //Agrega una tarea actual cuando el usuario desea editarla
  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>

      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="Completo"
            onClick={() => cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => cambiarEstado(tarea)}
          >
            incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          className="btn btn-primario"
          type="button"
          onClick={() => seleccionarTarea(tarea)}
        >
          Editar
        </button>
        <button
          className="btn btn-secundario"
          type="button"
          onClick={() => tareaEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
