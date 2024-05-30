/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiFillHome } from "react-icons/ai";
import { FaFileCode, FaBriefcase, FaMobile } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { MdLightMode, MdNightlight } from "react-icons/md";
import "../../App.css";
import cv from "../../assets/pdf/CV_CESAR_ORDONEZ_6.pdf";

const Menu = ({ onItemClick, activeSection, darkMode, toggleTheme }) => {
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isSmallScreen = window.innerWidth <= 1024;

      if (currentScrollY > prevScrollY && isSmallScreen) {
        setIsMenuHidden(true);
      } else {
        setIsMenuHidden(false);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { id: "home", icon: <AiFillHome className="text-2xl md:text-3xl lg:text-4xl" /> },
    { id: "skills", icon: <FaFileCode className="text-2xl md:text-3xl lg:text-4xl" /> },
    { id: "projects", icon: <FaBriefcase className="text-2xl md:text-3xl lg:text-4xl" /> },
    { id: "qualities", icon: <PiCertificateFill className="text-2xl md:text-3xl lg:text-4xl" /> },
    { id: "contact", icon: <FaMobile className="text-2xl md:text-3xl lg:text-4xl" /> },
  ];

  const handleIconClick = (itemId) => {
    setActiveIcon(itemId);
    onItemClick(itemId);
  };

  return (
    <div
      className={`rounded-2xl sm:rounded-3xl border-2 text-grey ${
        darkMode ? "bg-veryDark" : "bg-white"
      } flex xl:flex-col mx-auto lg:ml-auto lg:mr-auto ${
        isMenuHidden ? "hidden" : ""
      }`}
    >
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`menu-item ${
            activeSection === item.id ? "active" : ""
          } w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 grid place-items-center hover:scale-150 duration-300 ${
            activeIcon === item.id ? "text-orange scale-150 duration-300" : ""
          }`}
          onClick={() => handleIconClick(item.id)}
        >
          <div className="icon-container cursor-pointer">
            {item.id === "contact" ? (
              <div className="relative">
                <span className="absolute top-0 right-0 w-2 h-2 md:w-4 md:h-4 flex items-center justify-center bg-[#16a34a] rounded-full">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
                </span>
                {item.icon}
              </div>
            ) : (
              item.icon
            )}
          </div>
        </div>
      ))}
      <button
        className={`w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 font-bold text-2xl md:text-3xl lg:text-4xl grid place-items-center cursor-pointer hover:scale-125 duration-300 ${
          activeIcon === "theme" ? "text-orange scale-125 duration-300" : ""
        } ${darkMode ? 'text-grey' : ' text-grey'}`}
        onClick={() => {
          setActiveIcon("theme");
          toggleTheme();
        }}
      >
        {darkMode ? <MdLightMode  className="text-2xl md:text-3xl lg:text-4xl" /> : <MdNightlight className="text-2xl md:text-3xl lg:text-4xl" />}
      </button>
      <a
        href={cv}
        download="CV-Cesar-Ordoñez.pdf"
        className={`mr-2 sm:mr-0 w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 font-bold text-2xl md:text-3xl grid place-items-center cursor-pointer hover:scale-125 duration-300 ${
          activeIcon === "cv" ? "text-orange scale-125 duration-300" : ""
        } ${darkMode ? 'text-grey' : ' text-grey'}`}
        onClick={() => {
          setActiveIcon("cv");
        }}
      >
        <span>CV</span>
      </a>
    </div>
  );
};

Menu.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Menu;


