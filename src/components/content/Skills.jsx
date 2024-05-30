/* eslint-disable no-unused-vars */
import React from "react";
import { FaCode, FaServer, FaCogs } from "react-icons/fa";
import { BiSolidServer } from "react-icons/bi";
import PropTypes from "prop-types";

const Skills = ({ darkMode }) => {
  return (
    <div className={`pt-12 sm:pt-16 px-2 sm:px-8`}>
      <h1 className="font-bold text-3xl sm:text-4xl xl:text-5xl text-orange text-center mx-auto xl:text-left">Habilidades</h1>
      <div className="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
        <div className="mt-2 sm:mt-8">
          <div className="flex">
            <FaCode className="text-2xl sm:text-3xl xl:text-4xl pr-2 text-grey" />
            <h2 className={`text-orange font-bold text-xl sm:text-2xl xl:text-3xl `}>Frontend</h2>
          </div>
          <ul className={`ml-8 mt-4 list-disc font-bold text-base sm:text-lg xl:text-xl ${darkMode ? 'text-white' : 'text-veryDark'}`}>
            <li className="m-4">React</li>
            <li className="m-4">JavaScript</li>
            <li className="m-4">CSS</li>
            <li className="m-4">HTML</li>
            
          </ul>
        </div>
        <div className="mt-2 sm:mt-8">
          <div className="flex">
            <BiSolidServer className="text-2xl sm:text-3xl xl:text-4xl pr-2 text-grey" />
            <h2 className={`text-orange font-bold text-xl sm:text-2xl xl:text-3xl `}>Backend</h2>
          </div>
          <ul className={`ml-8 mt-4 list-disc font-bold text-base sm:text-lg xl:text-xl ${darkMode ? 'text-white' : 'text-veryDark'}`}>
            <li className="m-4">JavaScript</li>
            <li className="m-4">Node.js</li>
            <li className="m-4">MySQL</li>
            <li className="m-4">SQL</li>
            <li className="m-4">PostgreSQL</li>
            <li className="m-4">Sequelize</li>
            <li className="m-4">Express</li>
          </ul>
        </div>
        <div className="mt-2 sm:mt-8">
          <div className="flex">
            <FaCogs className="text-2xl sm:text-3xl xl:text-4xl pr-2 text-grey" />
            <h2 className={`text-orange font-bold text-xl sm:text-2xl xl:text-3xl`}>Herramientas</h2>
          </div>
          <ul className={`ml-8 mt-4 list-disc font-bold text-base sm:text-lg xl:text-xl ${darkMode ? 'text-white' : 'text-veryDark'}`}>
            <li className="m-4">Git & Github</li>
            <li className="m-4">Postman</li>
            <li className="m-4">Dbdiagram</li>
            <li className="m-4">Figma</li>
            <li className="m-4">Entre otros</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Skills;
