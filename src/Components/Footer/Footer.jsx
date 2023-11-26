import React, {useEffect} from "react";
import "./Footer.css";

//Iconos Importados
import { FcCameraIdentification } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[]
  )

  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv" >
          <div className="footerLogo" data-aos="fade-up">
            <FcCameraIdentification className="icon"  />
            <span>RecWorld</span>
          </div>
          <div className="socials flex" >
            <ImFacebook className="icon"/>
            <AiFillInstagram className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
          <div className="footerLinks" data-aos="fade-up">
            <span className="linkTitle">Información</span>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Explora</a>
            </li>
            <li>
              <a href="#">Viaja</a>
            </li>
          </div> 
          <div className="footerLinks"data-aos="fade-up">
            <span className="linkTitle">Contáctanos</span>
            <span className="Teléfono">+57 324 1080849</span>
            <span className="Email">RecWorld@gmail.com</span>
          </div>
      </div>
    </div>
  );
};

export default Footer;
