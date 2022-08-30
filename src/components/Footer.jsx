import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import "./home.css";
import pd from "../img/pdlogr.png";

const footer = () => {
  return (
    <>
      <footer>
        <span className="footer-logo">
          <img src={pd} alt="img" width={100} height={100} />
        </span>
        <ul className="footer-links">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer--socials">
          <a
            href="https://github.com/PurvishDhameliya"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/purvish-d-7a3840184/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.instagram.com/purvish_dhameliya/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </div>
        <div className="footer-copyright">
          <span>&copy;design by Purvish Dhameliya- 2022</span>
        </div>
      </footer>
    </>
  );
};

export default footer;
