import React, { useEffect } from "react";
import "./Destinations.css";

//Iconos importados
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

//Imagenes importadas
import image1 from "../../Assets/china.jpg";
import image2 from "../../Assets/auckland.jpg";
import image3 from "../../Assets/budapest.jpg";
import image4 from "../../Assets/cristal.jpg";
import image5 from "../../Assets/eiffel.jpg";
import image6 from "../../Assets/monte.jpg";
import image7 from "../../Assets/tajmahal.jpg";
import image8 from "../../Assets/coliseo.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

//Vamos a crear una matriz que va a contener todos los datos de destino y el bucle a través de ella.

const destinations = [
  {
    id: 1,
    img: image1,
    name: "Shangai",
    location: "China",
    rating: 4.9,
  },
  {
    id: 2,
    img: image2,
    name: "Auckland",
    location: "Nueva Zelanda",
    rating: 5,
  },
  {
    id: 3,
    img: image3,
    name: "Budapest",
    location: "Hungría",
    rating: 4.9,
  },
  {
    id: 4,
    img: image4,
    name: "Caño de Cristal",
    location: "Colombia",
    rating: 4.9,
  },
  {
    id: 5,
    img: image5,
    name: "Torre Eiffel",
    location: "Francia",
    rating: 4.8,
  },
  {
    id: 6,
    img: image6,
    name: "Monte Fuji",
    location: "Japón",
    rating: 5,
  },
  {
    id: 7,
    img: image7,
    name: "Taj Mahal",
    location: "India",
    rating: 4.8,
  },
  {
    id: 8,
    img: image8,
    name: "Coliseo Romano",
    location: "Roma",
    rating: 4.9,
  },
];

const Destinations = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText">Explora ahora</span>
          <h3>Busca el paraíso que coincide con tus sueños más profundos.</h3>
          <p>Descubre el destino perfecto para tu próxima travesía.</p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Ubicación" />{" "}
          </div>

          <div className="inputField flex" data-aos="fade-up">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Precio" />{" "}
          </div>

          <div className="inputField flex" data-aos="fade-up">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Fecha" />{" "}
          </div>

          <button className="btn flex" data-aos="fade-up">
            <BiSearchAlt className="icon" />
            Buscar
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="acitrve">All</li>
            <li>Recomendados</li>
            <li>Playas</li>
            <li>Parques</li>
            <li>Naturaleza</li>
            <li>Montañas</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div
                className="singleDestination"
                key={destination.id}
                data-aos="fade-up"
              >
                <div className="imgDiv" data-aos="fade-up">
                  <img src={destination.img} alt="Destination Image" />
                </div>
                <div className="descInfo flex">
                  <div className="text">
                    <span className="name">{destination.name}</span>
                    <p className="flex">
                      <TiLocation className="icon" />
                      {destination.location}
                    </p>
                  </div>
                  <span className="rating">{destination.rating}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
