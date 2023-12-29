import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categorias">Categorías</Link></li>
      
        <li><Link to="/buscar">Buscar</Link></li>
        <li><Link to="/perfil">MiPerfil</Link></li>
        <li><Link to="/login">Contactanos</Link></li>
       
        {/* Agrega más elementos del menú según tus necesidades */}
      </ul>
    </nav>
  );
};

export default Menu;