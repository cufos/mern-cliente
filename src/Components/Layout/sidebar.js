import React from "react";
import NuevoProyecto from "../Proyectos/nuevoProyecto";

const Sidebar = () => (
  <aside>
    <h1>
      MERN<span>Tasks</span>
    </h1>
    <NuevoProyecto />

    <div className="proyectos">
      <h2>Tus Proyectos</h2>
    </div>
  </aside>
);

export default Sidebar;
