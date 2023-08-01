import React from "react";
import Carousel from "react-bootstrap/Carousel";
import foto1 from "../resources/images/meme1.jpg";
import foto2 from "../resources/images/foto2.jpg";
import foto3 from "../resources/images/foto3.jpg";
import "./carro.css";

const Carrosuel = () => {
  return (
    <div className="carroImagenes">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={foto1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto3} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrosuel;
