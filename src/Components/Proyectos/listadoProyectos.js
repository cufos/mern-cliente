import React, { useContext, useEffect } from "react";
import Proyecto from "./proyecto";
import proyectoConntext from "../../Context/Proyectos/proyectoContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListadoProyecto = () => {
  //extrayendo proyectos del state inicial
  const proyectosConntext = useContext(proyectoConntext);
  const { proyectos, obtenerProyectos } = proyectosConntext;

  //obteniendo proyectos a la carga del componente
  useEffect(() => {
    obtenerProyectos();

    //eslint-disable-next-line
  }, []);

  //revisando si proyectos tiene contenido
  if (proyectos.length === 0) {
    return <p>No hay Proyectos. Comienza creando uno</p>;
  }

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyecto;
