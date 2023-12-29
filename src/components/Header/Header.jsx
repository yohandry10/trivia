// Header.jsx
import React from 'react';
import './Header.css';  // Importa el archivo de estilo

const Header = () => {
  return (
    <header className="app-header"> {/* Agrega una clase para los estilos */}
      <h1>¡Trivia de Curso BootcampG16!</h1>
      {/* Otros elementos del header si es necesario */}
    </header>
  );
};

export default Header;