import React, { useContext, useState } from "react";
import proyectoContext from "../../Context/Proyectos/proyectoContext";
import TareaContext from "../../Context/Tarea/tareaContext";

const FormTarea = () => {
  //extrayendo el proyecto activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //state del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  //obtener la funcion del context de tarea
  const tareasContext = useContext(TareaContext);
  const {
    agregarTarea,
    validarTarea,
    errortarea,
    obtenerTareas,
  } = tareasContext;

  //extraer el nombre del proyecto
  const { nombre } = tarea;

  //En caso que no halla proyecto seleccionado
  if (!proyecto) return null;

  //array destructuring
  const [proyectoActual] = proyecto;

  //leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //validando que la tarea no este vacia
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    //agregar la nueva tarea al state de tareas
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);

    //obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);

    //reiniciar el form
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            value={nombre}
            onChange={handleChange}
            placeholder="Nombre Tarea..."
            name="nombre"
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
