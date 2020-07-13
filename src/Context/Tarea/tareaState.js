import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import uuid from "uuid/dist/v4";

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../Types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir hosting", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Escoger Plataforma", estado: false, proyectoId: 2 },
      { id: 3, nombre: "Elegir hosting", estado: true, proyectoId: 3 },
      { id: 4, nombre: "Elegir hosting", estado: true, proyectoId: 1 },
      { id: 5, nombre: "Escoger Plataforma", estado: false, proyectoId: 2 },
      { id: 6, nombre: "Elegir hosting", estado: true, proyectoId: 3 },
      { id: 7, nombre: "Elegir hosting", estado: true, proyectoId: 1 },
      { id: 8, nombre: "Escoger Plataforma", estado: false, proyectoId: 2 },
      { id: 9, nombre: "Elegir hosting", estado: true, proyectoId: 3 },
    ],
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null,
  };

  //creando el dispatch y el state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //obtener las tareas del proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  //Agregar una tarea al proyecto seleccionado
  const agregarTarea = (tarea) => {
    tarea.id = uuid();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  //valida y muestra un error en caso que sea necesario
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  //Cambiar el estado de la tarea
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  //extraer la tarea a editar
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  //Edita o modifica una tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  //limina la tarea seleccionada
  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
