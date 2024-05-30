/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const SkeletonHome = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula 2 segundos de carga
  }, []);

  return (
    <div
      className={`SkeletonHome pt-12 sm:pt-16 px-2 sm:px-8 ${
        isLoading ? "" : ""
      }`}
    >
      <h1
        className={`font-bold text-3xl sm:text-4xl xl:text-5xl ${
          isLoading ? "animate-pulse bg-white-rgba text-transparent" : ""
        }`}
      >
        <span className="">¡Hola!</span>, Soy Cesar Ordoñez
      </h1>
      <p
        className={`my-8 sm:my-16 font-bold text-base sm:text-lg xl:text-xl ${
          isLoading ? "animate-pulse bg-white-rgba text-transparent" : ""
        }`}
      >
        Soy Ingeniero de Sistemas, Desarrollador web Full Stack con conocimiento en tecnologías de banguardia. Mi experiencia cubre desde el desarrollo front-end con HTML, CSS, JavaScrit, React, hasta el desarrollo back-end con JavaScript, Node.js, bases de datos SQL como MySQL y PostgreSQL, utilizando Sequelize y Express.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        <div
          className={`p-3 sm:p-10 xl:p-8 rounded-3xl text-center ${
            isLoading ? "animate-pulse bg-white-rgba text-transparent" : ""
          }`}
        ><p className={`font-extrabold text-3xl sm:text-4xl xl:text-5xl `}>
        +500
      </p>
      <h2 className="font-extrabold text-base sm:text-lg xl:text-xl mt-4">
        Horas de práctica
      </h2></div>
        <div
          className={`p-3 sm:p-10 xl:p-8 rounded-3xl text-center ${
            isLoading ? "animate-pulse bg-white-rgba text-transparent" : ""
          }`}
        ></div>
        <div
          className={`p-3 sm:p-10 xl:p-8 rounded-3xl text-center ${
            isLoading ? "animate-pulse bg-white-rgba text-transparent" : ""
          }`}
        >
        </div>
      </div>
    </div>
  );
};

export default SkeletonHome;
