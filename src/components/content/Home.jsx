/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../../App.css";
import PropTypes from "prop-types";

const Home = ({ onItemClick, darkMode }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const animatedText = "¡Hola!, Soy Cesar Ordoñez";

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(animatedText.substring(0, index));
      setIndex(index + 1);

      if (index >= animatedText.length) {
        setTimeout(() => {
          setDisplayText("");
          setIndex(0);
        }, 3000);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [index, animatedText]);

  const handleProjectsClick = () => {
    onItemClick("projects");
  };

  return (
    <div className={`pt-12 sm:pt-16 px-2 sm:px-8 ${darkMode ? 'bg-veryDark' : 'bg-white'}`}>
      <div className="" style={{ overflow: "hidden", height: "auto" }}>
        <h1 className={`font-bold text-3xl sm:text-4xl xl:text-5xl ${darkMode ? 'text-white' : 'text-veryDark'}`}>
          <span>{displayText.substring(0, 11)}</span> 
          <span className="text-orange">{displayText.substring(11, 26)}</span> 
          <span>|</span>
        </h1>
      </div>
      <p className={`my-8 sm:my-16 font-bold text-base sm:text-lg xl:text-xl ${darkMode ? 'text-white' : 'text-veryDark'} leading-7 sm:leading-8 lg:leading-9 xl:leading-9`}>
        Soy Ingeniero de Sistemas, Desarrollador web Full Stack con conocimiento en tecnologías web. Mi experiencia cubre desde el desarrollo front-end con HTML, CSS, JavaScrit, React, hasta el desarrollo back-end con JavaScript, Node.js, bases de datos SQL como MySQL y PostgreSQL, utilizando Sequelize y Express.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        <div className={`p-3 sm:p-10 xl:p-8 rounded-3xl bg-orange shadow-lg shadow-orange/50 text-center hover:cursor-pointer hover:scale-110 duration-300 ${darkMode ? 'text-white' : 'text-veryDark'}`}>
          <p className={`font-extrabold text-3xl sm:text-4xl xl:text-5xl ${darkMode ? 'text-veryDark' : 'text-white'}`}>
            +500
          </p>
          <h2 className="font-extrabold text-base sm:text-lg xl:text-xl mt-4">
            Horas de práctica
          </h2>
        </div>
        <div className={`p-3 sm:p-10 xl:p-8 rounded-3xl bg-orange shadow-lg shadow-orange/50 text-center hover:cursor-pointer hover:scale-110 duration-300 ${darkMode ? 'text-white' : 'text-veryDark'}`}>
          <p className={`font-extrabold text-3xl sm:text-4xl xl:text-5xl ${darkMode ? 'text-veryDark' : 'text-white'}`}>
            +700
          </p>
          <h2 className="font-extrabold text-base sm:text-lg xl:text-xl mt-4">
            Horas de teoría
          </h2>
        </div>
        <button
          className={`p-3 sm:p-10 xl:p-8 rounded-3xl bg-orange shadow-lg shadow-orange/50 text-center hover:scale-110 duration-300 ${darkMode ? 'text-white' : 'text-veryDark'}`}
          onClick={handleProjectsClick}
          title="Ver Proyectos"
        >
          <p className={`font-extrabold text-3xl sm:text-4xl xl:text-5xl ${darkMode ? 'text-veryDark' : 'text-white'}`}>
            +6
          </p>
          <h2 className="font-extrabold text-base sm:text-lg xl:text-xl mt-4">
            Proyectos completos
          </h2>
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Home;

