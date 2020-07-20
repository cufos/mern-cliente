import React, { useContext, useEffect } from "react";
import Proyecto from "./proyecto";
import proyectoConntext from "../../Context/Proyectos/proyectoContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AlertaContext from "../../Context/alertas/alertaContext";

const ListadoProyecto = () => {
  //extrayendo proyectos del state inicial
  const proyectosConntext = useContext(proyectoConntext);
  const { mensaje, proyectos, obtenerProyectos } = proyectosConntext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  //obteniendo proyectos a la carga del componente
  useEffect(() => {
    //si hubo un error
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    obtenerProyectos();

    //eslint-disable-next-line
  }, [mensaje]);

  //revisando si proyectos tiene contenido
  if (proyectos.length === 0) {
    return <p>No hay Proyectos. Comienza creando uno</p>;
  }

  return (
    <ul className="listado-proyectos">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyecto;
