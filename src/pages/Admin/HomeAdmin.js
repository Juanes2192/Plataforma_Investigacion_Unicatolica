import React from 'react';
import "./HomeAdmin.css";

export function HomeAdmin() {
  return (
    <div>
      <nav className="navbar">
        <div className="brand">Administrador</div>
        <div className="nav-buttons">
          <button className="nav-button">Listado Proyectos</button>
          <button className="nav-button">Crear Proyecto</button>
        </div>
      </nav>
      <div>
        <h1>Estamos en la Home del admin</h1>
      </div>
    </div>
  );
}
