import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
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
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>

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
    </Fragment>
  );
};

export default NuevoProyecto;
