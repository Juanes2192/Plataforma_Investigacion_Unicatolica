import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import "./CrearProyecto.css";

export function CrearProyecto() {
  const navigate = useNavigate();  

  const redirectToHomeAdmin = () => {
    navigate('/HomeAdmin'); 
  };

  const redirectToListProject = () => {
    navigate('/ListadoProyecto'); 
  };

  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [correoError, setCorreoError] = useState('');
  const [contrasenaError, setContrasenaError] = useState('');

  const handleCrearPonente = () => {
    // Validación del formulario
    if (!correo) {
      setCorreoError('Por favor, ingresa un correo.');
      return;
    } else {
      setCorreoError('');
    }

    if (!contrasena) {
      setContrasenaError('Por favor, ingresa una contraseña.');
      return;
    } else {
      setContrasenaError('');
    }

    // Lógica para crear un ponente (puedes agregar la lógica necesaria aquí)
    console.log('Ponente creado');
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-buttons">
          <button className="nav-button" onClick={redirectToListProject}>Listado Proyectos</button>
          <button className="nav-button" onClick={redirectToHomeAdmin}>Home Administrador</button>
        </div>
      </nav>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='Form-Proyecto'>
        <div className="contenedor">
          <form>
            <h3>Registro de Ponentes</h3>
            <label htmlFor="correo">Correo:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="Aqui va el correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
            {correoError && <p className="error">{correoError}</p>}

            <label htmlFor="contrasena">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              placeholder="Aqui va la contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
            {contrasenaError && <p className="error">{contrasenaError}</p>}

            <button type="button" onClick={handleCrearPonente}>Crear Ponente</button>
          </form>
        </div>
      </div>
    </div>
  );
}
