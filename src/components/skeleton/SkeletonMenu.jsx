/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiFillHome } from "react-icons/ai";
import { FaFileCode, FaBriefcase, FaMobile } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import "../../App.css";
import cv from "../../assets/pdf/CV_CESAR_ORDONEZ_4.pdf";

const SkeletonMenu = ({ onItemClick }) => {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    // Simula un tiempo de carga (puedes reemplazar esto con una solicitud de datos real)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula 2 segundos de carga
  }, []);

  const menuItems = [
    { id: "home", icon: <AiFillHome className={`text-2xl md:text-4xl ${isLoading ? 'animate-pulse' : ''}`} /> },
    { id: "skills", icon: <FaFileCode className={`text-2xl md:text-4xl ${isLoading ? 'animate-pulse' : ''}`} /> },
    { id: "projects", icon: <FaBriefcase className={`text-2xl md:text-4xl ${isLoading ? 'animate-pulse' : ''}`} /> },
    { id: "qualities", icon: <PiCertificateFill className={`text-2xl md:text-4xl ${isLoading ? 'animate-pulse' : ''}`} /> },
    { id: "contact", icon: <FaMobile className={`text-2xl md:text-4xl ${isLoading ? 'animate-pulse' : ''}`} /> },
  ];

  return (
    <div className={`SkeletonMenu rounded-3xl flex xl:flex-col mx-auto lg:ml-auto lg:mr-auto ${isLoading ? ' animate-pulse bg-white-rgba text-transparent' : ''}`}>
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`menu-item w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 grid place-items-center ${isLoading ? 'animate-pulse' : ''}`}
          onClick={() => onItemClick(item.id)}
        >
          <div className="icon-container cursor-pointer ">{item.icon}</div>
        </div>
      ))}
      <a
        href={cv}
        download="CV-CESAR-ORDONEZ.pdf"
        className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 font-bold text-2xl md:text-3xl grid place-items-center cursor-pointer ${isLoading ? 'animate-pulse' : ''}`}
      >
        CV
      </a>
    </div>
  );
};

SkeletonMenu.propTypes = {
  onItemClick: PropTypes.func.isRequired,
};

export default SkeletonMenu;
