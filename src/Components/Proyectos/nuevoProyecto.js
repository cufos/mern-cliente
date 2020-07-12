import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../Context/Proyectos/proyectoContext";

const NuevoProyecto = () => {
  //obteniendo el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  //state del proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  //extrayendo datos
  const { nombre } = proyecto;

  //leyendo contenidos del campo
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //cuando se envia el proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //validando proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    //agregar al state
    agregarProyecto(proyecto);

    //reiniciar el form
    guardarProyecto({
      nombre: "",
    });
  };

  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />

          <input
            type="submit"
            value="Agregar Proyecto"
            className="btn btn-block btn-primario"
          />
        </form>
      ) : null}

      {errorformulario ? (
        <p className="mensaje error">El nombre del Proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
