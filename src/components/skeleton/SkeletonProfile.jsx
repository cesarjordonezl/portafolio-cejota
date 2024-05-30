/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../App.css";

const SkeletonProfile = ({ onItemClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula 2 segundos de carga
  }, []);

  const handleContactClick = () => {
    onItemClick("contact");
  };

  return (
    <div className={`SkeletonProfile borde-0 p-8 ${isLoading ? "" : ""}`}>
      <h1
        className={`mb-8 font-bold text-base sm:text-lg xl:text-xl${
          isLoading ? "animate-pulse bg-white-rgba text-transparent" : ""
        }`}
      >
        <span className="">Cesar </span>Ordoñez
      </h1>
      <div
        className={`ProfileBox grid justify-items-center ${
          isLoading ? "animate-pulse " : ""
        }`}
      >
        <div
          className={`w-60 h-44 mt-16 sm:w-64 sm:h-52 sm:mt-24 rounded-3xl z-0 bg-white-rgba ${
            isLoading ? "animate-pulse " : ""
          }`}
        ></div>
        <h1
          className={`my-2 font-bold text-lg sm:text-xl xl:text-2xl ${
            isLoading ? "animate-pulse bg-white-rgba text-transparent" : ""
          }`}
        >
          Full Stack Developer
        </h1>
        <h2
          className={`font-bold text-base sm:text-lg xl:text-xl ${
            isLoading ? "animate-pulse bg-white-rgba text-transparent" : ""
          }`}
        >
          Frontend
        </h2>
        <div
          className={`containerIcons w-56 h-10 sm:w-72 sm:h-14 my-8 flex justify-between ${
            isLoading ? "animate-pulse" : ""
          }`}
        >
          <a
            href="https://www.linkedin.com/in/cesarordopez/"
            target="_blank"
            rel="noopener noreferrer"
            className={`boxIcons grid place-items-center w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 cursor-pointer bg-white-rgba rounded-xl ${
              isLoading ? "animate-pulse" : ""
            }`}
          ></a>
          <a
            href="mailto:ordor75@hotmail.com"
            className={`boxIcons grid place-items-center w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 cursor-pointer bg-white-rgba rounded-xl ${
              isLoading ? "animate-pulse" : ""
            }`}
          ></a>
          <a
            href="https://wa.me/573203336995"
            target="_blank"
            rel="noopener noreferrer"
            className={`boxIcons grid place-items-center w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 cursor-pointer bg-white-rgba rounded-xl ${
              isLoading ? "animate-pulse" : ""
            }`}
          ></a>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`boxIcons grid place-items-center w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 cursor-pointer bg-white-rgba rounded-xl ${
              isLoading ? "animate-pulse" : ""
            }`}
          ></a>
        </div>
        <button
          className={`w-52 h-10 sm:w-60 sm:h-12 xl:w-64 xl:h-14 bg-white-rgba rounded-2xl ${
            isLoading ? "animate-pulse" : ""
          }`}
          onClick={handleContactClick}
        ></button>
      </div>
    </div>
  );
};

SkeletonProfile.propTypes = {
  onItemClick: PropTypes.func.isRequired,
};

export default SkeletonProfile;
