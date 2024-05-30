/* eslint-disable no-unused-vars */
import { React, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const QualitiesCarousel = ({ darkMode }) => {
  const sliderRef = useRef(); 
  const [activeArrow, setActiveArrow] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const previousSlide = () => {
    console.log("Anterior");
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    console.log("Siguiente");
    sliderRef.current.slickNext();
  };

  return (
    <div className="w-full relative">
      <Slider ref={sliderRef} {...settings}>
        {/*Experiencia Laboral*/}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-orange text-center">
            Experiencia Laboral
          </h2>
          <div className="mb-4 px-12 text-left">
            <h3 className={`pb-2 text-lg sm:text-xl xl:text-2xl font-bold ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
              Academlo mexico
            </h3>
            <h4 className="pl-3 text-base sm:text-lg xl:text-xl text-orange">
            Creación de proyectos Academlo
            </h4>
            <p className="text-grey">2023 - 2023 </p>
            <ul className="list-disc list-inside">
              <li className={`text-base sm:text-lg xl:text-xl ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
                Realizacion de proyectos semanales durante seis meses y practicas continuas hasta la fecha.
              </li>
            </ul>
          </div>
          <div className="mb-4 px-12 text-left">
            <h3 className={`pb-2 text-lg sm:text-xl xl:text-2xl font-bold ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
              Hughesnet Cartagena
            </h3>
            <h4 className="pl-3 text-base sm:text-lg xl:text-xl text-orange">
            Instalador Redes satelitales
            </h4>
            <p className="text-grey">2018-2021</p>
            <ul className="list-disc list-inside">
              <li className={`text-base sm:text-lg xl:text-xl ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
                Se instalan redes satelitales en zonas apartadas.
              </li>
              <li className={`text-base sm:text-lg xl:text-xl ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
                Se suple la necesidad de conectividad.
              </li>
            </ul>
          </div>

          <div className="mb-4 px-12 text-left">
            <h3 className={`pb-2 text-lg sm:text-xl xl:text-2xl font-bold ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
              Alcaldia De Cartagena
            </h3>
            <h4 className="pl-3 text-base sm:text-lg xl:text-xl text-orange">
            Administrador base de datos
            </h4>
            <p className="text-grey">2013-20115</p>
            <ul className="list-disc list-inside">
              <li className={`text-base sm:text-lg xl:text-xl ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
                Actividades de consultas en la base de datos de la entidad.
              </li>
              <li className={`text-base sm:text-lg xl:text-xl ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
                Administrar y manipular la base de datos.
              </li>
            </ul>
          </div>

          <div className="mb-4 px-12 text-left">
            <h3 className={`pb-2 text-lg sm:text-xl xl:text-2xl font-bold ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
              Alcaldía de Mahates
            </h3>
            <h4 className="pl-3 text-base sm:text-lg xl:text-xl text-orange">
            Aministrador pagina web
            </h4>
            <p className="text-grey">2007-20115</p>
            
            <ul className="list-disc list-inside">
              <li className={`text-base sm:text-lg xl:text-xl ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
                Administrador pagina web de la entidad.
              </li>
              <li className={`text-base sm:text-lg xl:text-xl ${
                darkMode ? "text-white" : "text-veryDark"
              }`}> 
                 Actividades administrativas del sitio web.
              </li>
            </ul>
          </div>
        </div>


        {/*Educación*/}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-orange text-center">
            Educación
          </h2>
          <div className="mb-4 px-12 text-left">
            <h3 className={`text-lg sm:text-xl xl:text-2xl font-bold ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
              Academlo.
            </h3>
            <ul className="ml-4 list-disc list-inside">
              <li className="mt-2 text-xl sm:text-lg xl:text-xl text-orange">
                <a
                  href="https://bit.ly/465aio0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm sm:text-md xl:text-lg text-orange"
                  title="Click para ver certificado"
                >
                  Back-End desarrollo web con Node.js
                  
                </a>
              </li>
              <li className="mt-2 text-xl sm:text-lg xl:text-xl text-orange">
                <a
                  href="https://bit.ly/3sPthET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm sm:text-md xl:text-lg text-orange"
                  title="Click para ver certificado"
                >
                  Front-End Desarrollo web con React.
                </a>
              </li>
              <li className="mt-2 text-xl sm:text-lg xl:text-xl text-orange">
                <a
                  href="https://bit.ly/3Pc90Rn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm sm:text-md xl:text-lg text-orange"
                  title="Click para ver certificado"
                >
                  HTML, CSS, Javascript
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 px-12 text-left">
            <h3 className={`text-lg sm:text-xl xl:text-2xl font-bold ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
              Universidad San Martin{" "}
            </h3>
            <ul className="ml-4 list-disc list-inside">
              <li className="text-sm sm:text-md xl:text-lg text-orange">
                <a
                  href="https://bit.ly/48jIVbV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm sm:text-md xl:text-lg text-orange"
                  title="Click para ver certificado"
                >
                  Ingenieria de Sistemas.
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        {/*Idiomas*/}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-orange text-center">
            Idiomas
          </h2>
          <div className="mb-4 px-12 text-left">
            <h3 className={`text-lg sm:text-xl xl:text-2xl font-bold ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
              Español:
            </h3>
            <h4 className="ml-24 text-base sm:text-lg xl:text-xl text-orange">
              Nativo
            </h4>
          </div>
          <div className="mb-4 px-12 text-left">
            <h3 className={`md:text-xl xl:text-2xl font-bold ${
                darkMode ? "text-white" : "text-veryDark"
              }`}>
              Inglés:
            </h3>
            <h4 className="ml-24 text-base sm:text-lg xl:text-xl text-orange">
              Basico
            </h4>
          </div>
        </div>
        </Slider>
      <BiCaretLeft
        className={`slider-button text-3xl sm:text-4xl  text-grey hover:text-orange hover:scale-125 duration-300 cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 ${
          activeArrow === "left" ? "scale-125 duration-300 text-orange" : ""
        }`}
        onClick={() => {
          setActiveArrow("left");
          previousSlide();
        }}
      />
      <BiCaretRight
        className={`slider-button text-3xl sm:text-4xl  text-grey hover:text-orange hover:scale-125 duration-300 cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 ${
          activeArrow === "right" ? "scale-125 duration-300 text-orange" : ""
        }`}
        onClick={() => {
          setActiveArrow("right");
          nextSlide();
        }}
      />
    </div>
  );
};
QualitiesCarousel.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};


export default QualitiesCarousel;
