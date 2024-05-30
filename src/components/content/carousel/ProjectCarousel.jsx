/* eslint-disable no-unused-vars */
import { React, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import PropTypes from "prop-types";
import { FaGithub, FaProjectDiagram } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiPostman } from "react-icons/si";
import pokedex from "../../../assets/image/carouselImages/pokedex.png";
import ecommerce from "../../../assets/image/carouselImages/ecommerce.png";
import TodoAPI from "../../../assets/image/carouselImages/todo_api.png";
import RickandMorty from "../../../assets/image/carouselImages/rick_and_morty.png";
import PhraseCard from "../../../assets/image/carouselImages/phrase-card.png";
import PokemonRandom from "../../../assets/image/carouselImages/pokemon-random.png";
import WeatherApp from "../../../assets/image/carouselImages/weather.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProjectCarousel = ({ darkMode }) => {
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
        {/* Todo API  */}
        <div className=" ">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-orange text-center">
            Todo API
          </h2>
          <div className="flex flex-col md:flex-row sm:mx-14 sm:my-8 md:mx-8 md:my-8">
            <a
              href="https://todo-api-v07r.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-60 h-60 sm:w-80 sm:h-80  hover:skew-y-12  mx-auto md:mx-0">
                <img className="rounded-2xl shadow-2xl" src={TodoAPI} alt="todo api" />
              </div>
            </a>

            <div
              className={`md:ml-8 px-7 md:px-0 text-left ${
                darkMode ? "text-white" : "text-veryDark"
              } font-bold`}
            >
              <p className="mb-4 text-base sm:text-lg xl:text-xl">
                API para una aplicación de todo list, con su usuarios y su
                tareas, en donde cada tarea tiene su categoría.
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Tecnologías -{" "}
                </span>
                Node, Express, Sequelize, Swagger, Postman, PostgreSQL
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Role -{" "}
                </span>
                Backend
              </p>
              <div className="flex">
                {" "}
                <a
                  href="https://github.com/cesarjordonezl?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boxIcons mr-8 grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg hover:scale-125 duration-300"
                >
                  <FaGithub className="text-xl sm:text-2xl xl:text-3xl text-veryDark" />
                </a>
                <a
                  href="https://documenter.getpostman.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boxIcons mr-8 grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg hover:scale-125 duration-300"
                >
                  <SiPostman className="text-xl sm:text-2xl xl:text-3xl text-veryDark" />
                </a>
                <a
                  href="https://dbdiagram.io/d/todo-list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boxIcons grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg hover:scale-125 duration-300"
                >
                  <FaProjectDiagram className="text-xl sm:text-2xl xl:text-3xl text-veryDark" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Rick and Morty */}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-orange text-center">
            Rick and Morty
          </h2>
          <div className="flex flex-col md:flex-row sm:mx-14 sm:my-8 md:mx-8 md:my-8">
            <a
              href="https://rickamortyok.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-60 h-60 sm:w-80 sm:h-80  hover:skew-y-12  mx-auto md:mx-0 ">
                <img
                  className="rounded-2xl shadow-2xl"
                  src={RickandMorty}
                  alt="rick and morty"
                />
              </div>
            </a>

            <div className={`md:ml-8 px-7 md:px-0 text-left ${
                darkMode ? "text-white" : "text-veryDark"
              } font-bold`}>
              <p className="mb-4 text-base sm:text-lg xl:text-xl">
                App que da la información de los personajes, episodios,
                ubicaciones del universo de Rick and Morty.
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Tecnologías -{" "}
                </span>
                React, CSS, API
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Role -{" "}
                </span>
                Frontend
              </p>
              <div className="flex">
                {" "}
                <a
                  href="https://github.com/cesarjordonezl/rick-a-morty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boxIcons mr-8 grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg hover:scale-125 duration-300"
                >
                  <FaGithub className="text-xl sm:text-2xl xl:text-3xl text-veryDark" />
                </a>
                <a
                  href="https://www.figma.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boxIcons grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg hover:scale-125 duration-300"
                >
                  <FiFigma className="text-xl sm:text-2xl xl:text-3xl text-veryDark" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Pokédex */}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-orange text-center">
            Pokédex
          </h2>
          <div className="flex flex-col md:flex-row sm:mx-14 sm:my-8 md:mx-8 md:my-8">
            <a
              href="https://pikachuapi.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-60 h-60 sm:w-80 sm:h-80  hover:skew-y-12  mx-auto md:mx-0 ">
                <img className="rounded-2xl shadow-2xl" src={pokedex} alt="pokedex" />
              </div>
            </a>

            <div className={`md:ml-8 px-7 md:px-0 text-left ${
                darkMode ? "text-white" : "text-veryDark"
              } font-bold`}>
              <p className="mb-4 text-base sm:text-lg xl:text-xl">
                App Web que da información detallada sobre los
                Pokémon, tal como características, tipos, entre otros.
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Tecnologías -{" "}
                </span>
                React, CSS, API
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Role -{" "}
                </span>
                Frontend
              </p>
              <div className="flex">
                {" "}
                <a
                  href="https://github.com/cesarjordonezl/entre5_pika_con_Api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boxIcons mr-8 grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg hover:scale-125 duration-300"
                >
                  <FaGithub className="text-xl sm:text-2xl xl:text-3xl text-veryDark" />
                </a>
                <a
                  href="https://www.figma.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boxIcons grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg hover:scale-125 duration-300"
                >
                  <FiFigma className="text-xl sm:text-2xl xl:text-3xl text-veryDark" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Phrase Card */}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-orange text-center">
            Phrase Card
          </h2>
          <div className="flex flex-col md:flex-row sm:mx-14 sm:my-8 md:mx-8 md:my-8">
            <a
              href="https://promesasbiblicasparati.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-60 h-60 sm:w-80 sm:h-80  hover:skew-y-12  mx-auto md:mx-0 ">
                <img
                  className="rounded-2xl shadow-2xl"
                  src={PhraseCard}
                  alt="phrase-card"
                />
              </div>
            </a>

            <div className={`md:ml-8 px-7 md:px-0 text-left ${
                darkMode ? "text-white" : "text-veryDark"
              } font-bold`}>
              <p className="mb-4 text-base sm:text-lg xl:text-xl">
                App que cambia las frases de manera aleatoria al hacer
                clic en el botón.
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Tecnologías -{" "}
                </span>
                React, CSS, API
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Role -{" "}
                </span>
                Frontend
              </p>
              <a
                href="https://github.com/cesarjordonezl/proyecto1-React"
                target="_blank"
                rel="noopener noreferrer"
                className="boxIcons grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg hover:scale-125 duration-300"
              >
                <FaGithub className="text-xl sm:text-2xl xl:text-3xl text-veryDark" />
              </a>
            </div>
          </div>
        </div>
        {/* Pokémon Changer */}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-orange text-center">
            Pokémon Changer
          </h2>
          <div className="flex flex-col md:flex-row sm:mx-14 sm:my-8 md:mx-8 md:my-8">
            <a
              href="https://pokemon-changer.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-60 h-60 sm:w-80 sm:h-80  hover:skew-y-12  mx-auto md:mx-0">
                <img
                  className="rounded-2xl shadow-2xl"
                  src={PokemonRandom}
                  alt="pokemon"
                />
              </div>
            </a>

            <div className={`md:ml-8 px-7 md:px-0 text-left ${
                darkMode ? "text-white" : "text-veryDark"
              } font-bold`}>
              <p className="mb-4 text-base sm:text-lg xl:text-xl">
                App que muestra algunas características de un Pokémon de manera
                aleatoria con tan solo dar click en cambiar Pokémon y otras
                funciones.
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Tecnologías -{" "}
                </span>
                React, CSS, API
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Role -{" "}
                </span>
                Frontend
              </p>
              <a
                href="https://github.com/cesarjordonezl/rick-a-morty"
                target="_blank"
                rel="noopener noreferrer"
                className="boxIcons grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg hover:scale-125 duration-300"
              >
                <FaGithub className="text-xl sm:text-2xl xl:text-3xl text-veryDark" />
              </a>
            </div>
          </div>
        </div>
        {/* E-commerce */}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-orange text-center">
            E-commerce
          </h2>
          <div className="flex flex-col md:flex-row sm:mx-14 sm:my-8 md:mx-8 md:my-8">
            <a
              href="https://ecommerce1-cesarordonez.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-60 h-60 sm:w-80 sm:h-80  hover:skew-y-12  mx-auto md:mx-0">
                <img className="rounded-2xl shadow-2xl" src={ecommerce} alt="e-commerce" />
              </div>
            </a>

            <div className={`md:ml-8 px-7 md:px-0 text-left ${
                darkMode ? "text-white" : "text-veryDark"
              } font-bold`}>
              <p className="mb-4 text-base sm:text-lg xl:text-xl">
              En este proyecto se da a conocer las funcionalidades de html, css y js conectando una Api.
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Tecnologías -{" "}
                </span>
                Api, JavaScript, CSS, HTML
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Role -{" "}
                </span>
                Frontend
              </p>
              <a
                href="https://github.com/cesarjordonezl/my-ecommerce1"
                target="_blank"
                rel="noopener noreferrer"
                className="boxIcons grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg hover:scale-125 duration-300"
              >
                <FaGithub className="text-xl sm:text-2xl xl:text-3xl text-veryDark" />
              </a>
            </div>
          </div>
        </div>
        {/* WeatherApp */}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-orange text-center">
            WeatherApp
          </h2>
          <div className="flex flex-col md:flex-row sm:mx-14 sm:my-8 md:mx-8 md:my-8">
            <a
              href="https://climacesarordonez.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-60 h-60 sm:w-80 sm:h-80  hover:skew-y-12  mx-auto md:mx-0">
                <img
                  className="rounded-2xl shadow-2xl"
                  src={WeatherApp}
                  alt="weather-app"
                />
              </div>
            </a>

            <div className={`md:ml-8 px-7 md:px-0 text-left ${
                darkMode ? "text-white" : "text-veryDark"
              } font-bold`}>
              <p className="mb-4 text-base sm:text-lg xl:text-xl">
                Aplicación web que conecta a una Api metereologica, para obtener el estado del tiempo de manera precisa y
                actualizada en una ubicación en tiempo real.
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Tecnologías -{" "}
                </span>
                React, CSS, API
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-orange">
                  Role -{" "}
                </span>
                Frontend
              </p>
              <a
                href="https://github.com/cesarjordonezl/Aplicacion-del-clima"
                target="_blank"
                rel="noopener noreferrer"
                className="boxIcons grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg hover:scale-125 duration-300"
              >
                <FaGithub className="text-xl sm:text-2xl xl:text-3xl text-veryDark" />
              </a>
            </div>
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
ProjectCarousel.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default ProjectCarousel;
