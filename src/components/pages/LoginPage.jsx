// Importa las dependencias necesarias
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Componente funcional para la página de inicio de sesión
const LoginPage = ({ onLogin }) => {
  // Estado local para el email y la contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Hook useNavigate para la navegación
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí deberías realizar la lógica de autenticación
    // y llamar a onLogin con los datos del usuario si la autenticación es exitosa
    const usuario = {
      nombre: 'Usuario de ejemplo',
      email,
    };

    onLogin(usuario);

    // Redirige a la página principal después de iniciar sesión
    navigate('/');
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>
        ¿No tienes una cuenta? <Link to="/register">Registrarse</Link>
      </p>
    </div>
  );
};

export default LoginPage;
