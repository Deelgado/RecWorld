import React, { useState } from "react";
import "./Navbar.css";

//Iconos Importados
import { FcCameraIdentification } from "react-icons/fc";
import { PiDotsNineBold } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  //State to track and update navbar
  const [navBar, setNavBar] = useState("menu");
  // Funcion para mostrar la navbar
  const showNavBar = () => {
    setNavBar("menu showNavBar");
  };
  // Funcion para quitar la navbar
  const removeNavBar = () => {
    setNavBar("menu");
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <FcCameraIdentification className="icon" />
        <span>RecWorld </span>
      </div>
      <div className="menu">
        <ul>
          <li className="navList">Destinos</li>
          <li className="navList">Acerca de nosotros</li>
          <li className="navList">Galeria</li>
        </ul>

        {/* Icono para remover el Navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>
      <button className="singUpBtn btn">Sign Up </button>
      {/* Icono para alternar el Navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
};

export default Navbar;
