import React from 'react';
import { Link } from 'react-router-dom';

const PublicPage = ({ usuario, children }) => {
  return (
    <div>
      <h2>¡Bienvenido a la Trivia de Nuestro Proyecto de Frontend!</h2>
      {usuario ? (
        <div>
          <p>Hola, {usuario.username}. Has iniciado sesión.</p>
          {/* Puedes agregar más contenido o acciones para usuarios autenticados */}
        </div>
      ) : (
        <div>
          <p>Por favor, inicia sesión o regístrate.</p>
          <div className="d-grid gap-2">
            <Link to="/login">
              <button className="btn btn-primary">Iniciar sesión</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-secondary">Registrarse</button>
            </Link>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default PublicPage;
