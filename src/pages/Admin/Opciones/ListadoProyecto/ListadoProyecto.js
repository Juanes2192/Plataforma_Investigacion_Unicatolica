import React from 'react';
import { useNavigate } from 'react-router-dom';  

export function ListadoProyecto() {
    const navigate = useNavigate();  

    const redirectToCreateProject = () => {
      navigate('/CrearProyecto'); 
    };
  
    const redirectToHomeAdmin = () => {
        navigate('/HomeAdmin'); 
      };
  
    return (
      <div>
        <nav className="navbar">
          <div className="nav-buttons">
          <button className="nav-button" onClick={redirectToHomeAdmin}>Home Administador</button>
            <button className="nav-button" onClick={redirectToCreateProject}>Crear Proyecto</button>
          </div>
        </nav>
        <div>
          <h1>Estamos en Listado de Proyecto</h1>
        </div>
      </div>
    );
}
