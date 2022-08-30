import React from "react";
import "./home.css";
import { Button } from "react-bootstrap";
// import mm from '../img/me1qq.jpg';
// import ff from '../img/IMG_6278.JPG';
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Carouselcomponent from "./Carouselcomponent";
import { AiOutlineDownload } from "react-icons/ai";
import Review from "./Review";

function HomeComponent() {
  return (
    <>
      <div className="header container-fluid">
        <div className="row h__part">
          <div className="left-side col-md-6  text-center">
            <div className="contant">
              <h2>WELCOME TO MY WORLD</h2>
              <p className="t1_p">HI, I'm Purvish Dhameliya</p>
              <p className="t2_p">React Developer</p>
              <p className="t3_p">Based in India.</p>
            </div>
            <div className="button_home d-flex">
              <Button variant="outline-primary">
                <a
                  href="../img/215300694009_purvishdhameliya.pdf"
                  download="pdffile"
                >
                  <AiOutlineDownload />
                </a>{" "}
                Download Resume
              </Button>{" "}
            </div>
          </div>
          <div className="col-md-6 right-side">
            {/* <img src= { ff } alt="Home-img" /> */}
            <Carouselcomponent />
          </div>
        </div>
      </div>
      <About />
      <Service />
      <Portfolio />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default HomeComponent;
