import React from 'react';
import { useNavigate } from 'react-router-dom';  
import "./HomeAdmin.css";

export function HomeAdmin() {
  const navigate = useNavigate();  

  const redirectToCreateProject = () => {
    navigate('/CrearProyecto'); 
  };

  const redirectToListProject = () => {
    navigate('/ListadoProyecto'); 
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-buttons">
          <button className="nav-button" onClick={redirectToListProject}>Listado Proyectos</button>
          <button className="nav-button" onClick={redirectToCreateProject}>Crear Proyecto</button>
        </div>
      </nav>
      <div>
        <h1>Estamos en la Home del admin</h1>
      </div>
    </div>
  );
}
