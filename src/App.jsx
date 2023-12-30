import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import PublicPage from './components/pages/PublicPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

const App = () => {
  const trivia = [
    {
      pregunta: '¿Cuál es el lenguaje de programación más utilizado para el desarrollo web?',
      respuestas: ['Java', 'Python', 'JavaScript', 'C#'],
      correcta: 2,
      puntos: 10,
      pista: 'Lenguaje de scripting en el navegador',
    },
    {
      pregunta: '¿En qué año fue lanzado JavaScript?',
      respuestas: ['1995', '2000', '2005', '2010'],
      correcta: 0,
      puntos: 15,
      pista: 'Desarrollado por Netscape',
    },
    {
      pregunta: '¿Cuál es el propósito de React en el desarrollo web?',
      respuestas: [
        'Manejar bases de datos',
        'Crear interfaces de usuario interactivas',
        'Conectar servidores y clientes',
        'Optimizar consultas SQL',
      ],
      correcta: 1,
      puntos: 12,
      pista: 'Biblioteca de JavaScript para construir interfaces de usuario',
    },
    {
      pregunta: '¿Qué significa el acrónimo API?',
      respuestas: [
        'Application Programming Interface',
        'Advanced Program Instructions',
        'Automated Programming Interface',
        'Application Process Integration',
      ],
      correcta: 0,
      puntos: 13,
      pista: 'Interfaz de programación de aplicaciones',
    },
    {
      pregunta: '¿Cuál de las siguientes NO es una estructura de control en JavaScript?',
      respuestas: ['if-else', 'repeat-while', 'for-in', 'switch'],
      correcta: 1,
      puntos: 10,
      pista: 'No es una estructura de control estándar en JavaScript',
    },
    {
      pregunta: '¿Qué es JSX en el contexto de React?',
      respuestas: [
        'Una notación para describir objetos JSON',
        'Una forma de declarar variables en JavaScript',
        'Una extensión de JavaScript que se parece a XML/HTML',
        'Un formato de compresión de imágenes',
      ],
      correcta: 2,
      puntos: 14,
      pista: 'JavaScript XML, utilizado en React para definir la estructura del componente',
    },
    {
      pregunta: '¿Cuál de las siguientes afirmaciones sobre React es FALSA?',
      respuestas: [
        'React es una biblioteca de JavaScript desarrollada por Facebook',
        'React se utiliza para construir interfaces de usuario interactivas',
        'React utiliza el concepto de unidireccionalidad (one-way data binding)',
        'React solo puede utilizarse en proyectos de código abierto',
      ],
      correcta: 3,
      puntos: 11,
      pista: 'React se puede utilizar en proyectos de código cerrado o privado',
    },
    {
      pregunta: '¿Qué es npm en el contexto de JavaScript?',
      respuestas: [
        'Node Package Manager, utilizado para instalar y gestionar paquetes de software de Node.js',
        'New Programming Method, una metodología de desarrollo de software',
        'Nested Program Modules, una técnica de programación modular',
        'Node Project Manager, un gestor de proyectos en Node.js',
      ],
      correcta: 0,
      puntos: 12,
      pista: 'npm es el administrador de paquetes de Node.js',
    },
    {
      pregunta: '¿Cuál es el operador de asignación en JavaScript?',
      respuestas: ['=', ':', '-', '=='],
      correcta: 0,
      puntos: 10,
      pista: 'Se utiliza para asignar un valor a una variable',
    },
    {
      pregunta: '¿En qué fase del ciclo de vida de React se realiza la solicitud de datos a un servidor?',
      respuestas: ['render', 'componentDidMount', 'componentWillUnmount', 'shouldComponentUpdate'],
      correcta: 1,
      puntos: 15,
      pista: 'Esta fase ocurre después de que el componente ha sido montado en el DOM',
    },
    {
      pregunta: '¿Qué significa el término "callback" en programación?',
      respuestas: [
        'Un tipo de error en el código',
        'Una función que se pasa como argumento a otra función y que se espera que se ejecute más tarde',
        'Un tipo de bucle en JavaScript',
        'Un método de manipulación de cadenas de texto',
      ],
      correcta: 1,
      puntos: 13,
      pista: 'Se refiere a una función que se pasa como argumento a otra función',
    },
    {
      pregunta: '¿Cuál es el resultado de la expresión 5 + "5" en JavaScript?',
      respuestas: ['10', '55', 'Error', '25'],
      correcta: 1,
      puntos: 10,
      pista: 'En JavaScript, la concatenación de cadenas prevalece sobre la adición numérica',
    },
    {
      pregunta: '¿Qué es CORS en el contexto de desarrollo web?',
      respuestas: [
        'Cross-Origin Request Sharing, una técnica para compartir solicitudes entre diferentes dominios',
        'Centralized Object Rendering System, una biblioteca de renderización de objetos',
        'Cookies and Resource Sharing, una técnica para compartir cookies y recursos en una red',
        'Cross-Origin Resource Sharing, una política de seguridad del navegador que restringe cómo los recursos de una página web pueden ser solicitados desde otro dominio',
      ],
      correcta: 3,
      puntos: 14,
      pista: 'Es una política de seguridad del navegador para compartir recursos entre diferentes dominios',
    },
    {
      pregunta: '¿Cuál de los siguientes NO es un método HTTP?',
      respuestas: ['GET', 'PUSH', 'POST', 'DELETE'],
      correcta: 1,
      puntos: 11,
      pista: 'Métodos HTTP estándar: GET, POST, DELETE',
    },
    {
      pregunta: '¿En qué año se lanzó la primera versión estable de React?',
      respuestas: ['2010', '2013', '2015', '2017'],
      correcta: 2,
      puntos: 12,
      pista: 'React fue inicialmente lanzado en 2013 por Facebook',
    },
    {
      pregunta: '¿Qué es JSX?',
      respuestas: [
        'Una nueva versión de JavaScript',
        'Una biblioteca de gráficos para juegos',
        'Una extensión de sintaxis para JavaScript recomendada en React',
        'Un lenguaje de marcado para la creación de documentos web',
      ],
      correcta: 2,
      puntos: 13,
      pista: 'JavaScript XML, utilizado en React para definir la estructura del componente',
    },
    {
      pregunta: '¿Cuál de los siguientes NO es un concepto clave de React?',
      respuestas: ['Componentes', 'Estado (State)', 'Vistas (Views)', 'Props'],
      correcta: 2,
      puntos: 10,
      pista: 'React se centra en componentes y su estado, pero no directamente en "vistas"',
    },
    {
      pregunta: '¿Qué es un "hook" en React?',
      respuestas: [
        'Un trozo de código que "engancha" o se conecta a una base de datos',
        'Un componente funcional en React',
        'Una función que permite a los componentes funcionales tener estado y otras características de componentes de clase',
        'Una herramienta de depuración en el navegador',
      ],
      correcta: 2,
      puntos: 15,
      pista: 'Introducido en React 16.8, permite usar estado y otras características en componentes funcionales',
    },
    {
      pregunta: '¿Cuál es el propósito de Redux en una aplicación React?',
      respuestas: [
        'Gestionar el estado de la aplicación de forma centralizada',
        'Optimizar el rendimiento del navegador',
        'Crear componentes estilizados',
        'Facilitar la comunicación entre componentes hijos y padres',
      ],
      correcta: 0,
      puntos: 14,
      pista: 'Biblioteca para el manejo del estado global en aplicaciones React',
    },
    {
      pregunta: '¿Cuál es la función de la herramienta "webpack" en el desarrollo web?',
      respuestas: [
        'Optimizar el rendimiento de las consultas SQL',
        'Empaquetar y minificar archivos de recursos (JavaScript, CSS, imágenes) para el despliegue',
        'Crear componentes de interfaz de usuario',
        'Herramienta de depuración en el navegador',
      ],
      correcta: 1,
      puntos: 13,
      pista: 'Empaquetador de módulos para aplicaciones web modernas',
    },







    // ... (preguntas existentes)
  ];

  const [rondaActual, setRondaActual] = useState(0);
  const [puntosTotales, setPuntosTotales] = useState(0);
  const [preguntasCorrectas, setPreguntasCorrectas] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [modoDesafio, setModoDesafio] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [temporizadorActivo, setTemporizadorActivo] = useState(false);
  const [mostrarResultadoFinal, setMostrarResultadoFinal] = useState(false);

  const inicializarRonda = () => {
    setRespuestaSeleccionada(null);
    reiniciarTemporizador();
  };

  const reiniciarTemporizador = () => {
    setTiempoRestante(10);
    setTemporizadorActivo(true);
  };

  const verificarRespuesta = (respuestaIndex) => {
    if (respuestaSeleccionada !== null || !temporizadorActivo) {
      return;
    }

    setRespuestaSeleccionada(respuestaIndex);
    setTemporizadorActivo(false);

    setTimeout(() => {
      const respuestaCorrecta = trivia[rondaActual]?.correcta;

      if (respuestaIndex === respuestaCorrecta) {
        if (!modoDesafio) {
          setPuntosTotales((puntos) => puntos + trivia[rondaActual]?.puntos);
          setPreguntasCorrectas((preguntas) => preguntas + 1);
        }
      }

      setRondaActual((ronda) => ronda + 1);

      if (rondaActual + 1 >= trivia.length) {
        setMostrarResultadoFinal(true);
      } else {
        reiniciarTemporizador(); // reiniciar el temporizador para la siguiente pregunta
      }
    }, 1000);
  };

  useEffect(() => {
    if (rondaActual < trivia.length) {
      inicializarRonda();
    }
  }, [rondaActual]);

  const pedirPista = () => {
    // Implementa la lógica para mostrar la pista (por ejemplo, puedes usar un modal).
    alert(trivia[rondaActual]?.pista);
  };

  const reiniciarTrivia = () => {
    setRondaActual(0);
    setPuntosTotales(0);
    setPreguntasCorrectas(0);
    setRespuestaSeleccionada(null);
    setMostrarResultadoFinal(false);
    inicializarRonda();
  };

  const handleLogin = (user) => {
    console.log('Usuario autenticado:', user);
    setUsuario(user);
  };

  const handleRegister = (user) => {
    console.log('Usuario registrado:', user);
    setUsuario(user);
  };

  const cambiarModo = (modo) => {
    setModoDesafio(modo === 'desafio');
    reiniciarTrivia();
  };

  useEffect(() => {
    if (temporizadorActivo && tiempoRestante > 0) {
      const temporizador = setInterval(() => {
        setTiempoRestante((prevTiempo) => prevTiempo - 1);
      }, 1000);

      return () => clearInterval(temporizador);
    } else if (temporizadorActivo && tiempoRestante === 0) {
      verificarRespuesta(-1); // Sin respuesta cuando se agota el tiempo
    }
  }, [temporizadorActivo, tiempoRestante, rondaActual]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicPage usuario={usuario} />} />
        <Route
          path="/login/*"
          element={
            <Outlet>
              <LoginPage onLogin={handleLogin} usuario={usuario} />
            </Outlet>
          }
        />
        <Route
          path="/register/*"
          element={
            <Outlet>
              <RegisterPage onRegister={handleRegister} usuario={usuario} />
            </Outlet>
          }
        />
      </Routes>

      <div>
        <Header />
        <Menu />

        <div className="container mt-4">
          <div className="card">
            <div className="card-header">
              <h5>Trivia de Historia y Geografía</h5>
            </div>
            <div className="card-body">
              {modoDesafio && (
                <div className="mt-3">
                  <h6>Modo Desafío: Responde rápido y acumula más puntos</h6>
                  {temporizadorActivo && <p>Temporizador: {tiempoRestante}s</p>}
                </div>
              )}
              {!mostrarResultadoFinal && (
                <>
                  <div className="mb-3">
                    <label className="form-label" id="pregunta">
                      {trivia[rondaActual]?.pregunta}
                    </label>
                  </div>
                  <div className="d-grid gap-2">
                    {trivia[rondaActual]?.respuestas.map((respuesta, index) => (
                      <button
                        key={index}
                        className={`btn btn-primary btn-lg respuesta-btn ${
                          respuestaSeleccionada === index ? 'clicked' : ''
                        }`}
                        onClick={() => verificarRespuesta(index)}
                        disabled={respuestaSeleccionada !== null}
                      >
                        {respuesta}
                      </button>
                    ))}
                  </div>
                  <div id="resultado" className="alert alert-warning mt-3">
                    {respuestaSeleccionada !== null && (
                      <p>
                        {respuestaSeleccionada === trivia[rondaActual]?.correcta
                          ? '¡Respuesta correcta!'
                          : 'Respuesta incorrecta.'}
                      </p>
                    )}
                  </div>
                  <div id="puntuacion" className="mt-3">
                    <p className="lead">
                      Tu puntuación actual es: <span id="puntos">{puntosTotales}</span>
                    </p>
                  </div>
                  {temporizadorActivo && (
                    <button className="btn btn-info mt-3" onClick={pedirPista}>
                      Pedir Pista
                    </button>
                  )}
                  {!temporizadorActivo && (
                    <button className="btn btn-danger mt-3" onClick={reiniciarTrivia}>
                      Reiniciar Trivia
                    </button>
                  )}
                  <button className="btn btn-primary mt-3" onClick={() => cambiarModo('practica')}>
                    Modo Práctica
                  </button>
                  <button className="btn btn-dark mt-3" onClick={() => cambiarModo('desafio')}>
                    Modo Desafío
                  </button>
                </>
              )}
              {mostrarResultadoFinal && (
                <div className="mt-3">
                  <h4>¡Trivia completada! Puntuación final: {puntosTotales}</h4>
                  <div className="alert alert-success" role="alert">
                    ¡Felicidades, has completado la trivia!
                  </div>
                  <button className="btn btn-danger mt-3" onClick={reiniciarTrivia}>
                    Reiniciar Trivia
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;