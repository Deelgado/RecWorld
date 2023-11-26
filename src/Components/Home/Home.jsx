import React, { useEffect } from "react";
import "./Home.css";

//Assets Importados
import Video from "../../Assets/Homevideo.mp4";
import image1 from "../../Assets/cataratas.jpg";
import image2 from "../../Assets/machu.jpg";
import image3 from "../../Assets/sakura.jpg";
import image4 from "../../Assets/empire.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

//Iconos Importados
import { AiOutlineSwapRight } from "react-icons/ai";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1 data-aos="fade-up">
          Sumérgete en las aventuras extraordinarias que te ofrece el mundo.
        </h1>
        <p data-aos="fade-up">
        Descubre la diversidad del planeta en emocionantes travesías al aire libre; una sola vida no es suficiente para explorar todo.
        </p>
        <button className="btn flex" data-aos="fade-up">
          Empieza <AiOutlineSwapRight className="icon" />{" "}
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos="fade-up">Popular Places</h3>
          <div className="images flex" data-aos="fade-up">
            <img src={image1} alt="Destination Images" />
            <img src={image2} alt="Destination Images" />
            <img src={image3} alt="Destination Images" />
            <img src={image4} alt="Destination Images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
