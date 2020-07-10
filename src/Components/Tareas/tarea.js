import React from "react";

const Tarea = ({ tarea }) => {
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

      <div classname="acciones">
        <button className="btn btn-primario" type="button">
          Editar
        </button>
        <button className="btn btn-secundario" type="button">
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
