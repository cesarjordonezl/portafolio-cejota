/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Menu from "./components/menu/Menu";
import Profile from "./components/profile/Profile";
import Skills from "./components/content/Skills";
import Projects from "./components/content/Projects";
import Qualities from "./components/content/Qualities";
import Contact from "./components/content/Contact";
import SkeletonMenu from "./components/skeleton/SkeletonMenu";
import SkeletonHome from "./components/skeleton/SkeletonHome";
import SkeletonProfile from "./components/skeleton/SkeletonProfile";
import Home from "./components/content/Home";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true); // Establecer el tema oscuro como predeterminado

  const handleItemClick = (item) => {
    setActiveSection(item);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div
      className={`containerBackground min-h-screen flex justify-center items-center ${
        darkMode ? "bg-veryDark" : "bg-white"
      }`}
    >
      <div className="container mx-auto lg:mx-4 flex justify-between flex-wrap">
        <div className="columProfile w-full sm:max-w-sm sm:mx-auto xl:mx-0">
          {isLoading ? (
            <SkeletonProfile onItemClick={handleItemClick} />
          ) : (
            <Profile onItemClick={handleItemClick} darkMode={darkMode} />
          )}
        </div>
        <div className="columnDescription w-full md:max-w-3xl sm:mx-auto pb-40 sm:pb-40 md:pb-40 lg:pb-40 xl:pb-0">
          {activeSection === "home" && (
            <div>
              {isLoading ? (
                <SkeletonHome />
              ) : (
                <Home onItemClick={handleItemClick} darkMode={darkMode} />
              )}
            </div>
          )}
          {activeSection === "skills" && (
            <div>
              <Skills darkMode={darkMode} />
            </div>
          )}
          {activeSection === "projects" && (
            <div>
              <Projects darkMode={darkMode} />
            </div>
          )}
          {activeSection === "qualities" && (
            <div>
              <Qualities darkMode={darkMode} />
            </div>
          )}
          {activeSection === "contact" && (
            <div>
              <Contact darkMode={darkMode} />
            </div>
          )}
        </div>
        <div className="columnNavbar grid content-center fixed inset-x-0 bottom-5 xl:relative lg:px-24 xl:px-0 z-30">
          {isLoading ? (
            <SkeletonMenu
              onItemClick={handleItemClick}
              activeSection={activeSection}
            />
          ) : (
            <Menu
              onItemClick={handleItemClick}
              activeSection={activeSection}
              darkMode={darkMode}
              toggleTheme={toggleTheme}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
