import React, { useEffect } from "react";
import "./Middle.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Middle = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="middle section">
      <div className="secContainer container">
        <div className="grid">
          <span className="flex" data-aos="fade-up">
            <h1>10</h1>
            <p>Experiencias Mundiales</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h1>2k</h1>
            <p>Destinos</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h1>10k</h1>
            <p>Opiniones de Clientes</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h1>4.8</h1>
            <p>Calificación General</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Middle;
