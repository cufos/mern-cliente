import React from "react";
import Proyecto from "./proyecto";

const ListadoProyecto = () => {
  const proyectos = [
    { nombre: "Tienda Virtual" },
    { nombre: "Design de sitio" },
    { nombre: "Agregar botonera" },
  ];

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyecto;
