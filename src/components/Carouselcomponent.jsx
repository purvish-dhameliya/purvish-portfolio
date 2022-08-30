import React from "react";
import { Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import t1 from "../img/IMG_6278.JPG";
import t2 from "../img/me-about1.jpg";
import t3 from "../img/IMG_6278.JPG";
import "./home.css";

function Carouselcomponent() {
  return (
    <>
      <div className="container ">
        <Row className="mx-auto d-flex justify-content-center">
          <Carousel className="col-md-12 justify-content-center">
            <Carousel.Item>
              <img
                className="w-86 p-n5 justify-content-center"
                src={t2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-86 p-n5 justify-content-center"
                src={t1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-80 p-n5 justify-content-center"
                src={t3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Row>
      </div>
    </>
  );
}

export default Carouselcomponent;
