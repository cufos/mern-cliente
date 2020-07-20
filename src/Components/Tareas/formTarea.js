import React, { useContext, useState, useEffect } from "react";
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
    tareaseleccionada,
    agregarTarea,
    validarTarea,
    errortarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea,
  } = tareasContext;

  //effecct que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaseleccionada]);

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

    //si es una edicion o si es una nueva tarea
    if (tareaseleccionada === null) {
      //agregar la nueva tarea al state de tareas
      tarea.proyecto = proyectoActual._id;
      agregarTarea(tarea);
    } else {
      //actualiza tarea existente
      actualizarTarea(tarea);

      //eliminar tarea seleccionada
      limpiarTarea();
    }

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
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
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
