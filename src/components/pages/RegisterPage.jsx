import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = ({ onRegister }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí deberías realizar la lógica de registro
    // y llamar a onRegister con los datos del nuevo usuario si el registro es exitoso
    const nuevoUsuario = {
      nombre,
      email,
    };

    onRegister(nuevoUsuario);

    // Redirige a la página principal después de registrarse
    console.log('Redirigiendo a la página principal');
    navigate('/');
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
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
        <button type="submit">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
