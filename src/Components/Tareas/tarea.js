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
  const { eliminarTarea, obtenerTareas } = tareasContext;

  //funcion que se ejecuta cuando el usuario presiona el btn de eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>

      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="Completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button className="btn btn-primario" type="button">
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
