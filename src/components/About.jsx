import React from "react";
import { Button } from "react-bootstrap";
import "./home.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="about_title pt-5 mt-4">About Me</h2>
          <p className="about_info">WHAT I DO?</p>
          <div className="col-md-12 text-center p-5 m-2">
            <p className="about_para">
              I Work As React Frontend Developer And As A Developer
              <br /> I Learn Some Basic Of HTML, CSS, Javascript And Js library
              With Good Knowledge Of Skills.
              <br /> I Implement Of In My Developing Website Where I Use All
              Website As This Type Of Technologies.
              <br />I Will Provide Great Solution To My Client And There Best
              Resources Use I Will Implement With My Skillset. <br />
            </p>
            <Button variant="outline-dark">
              <a href="https://www.linkedin.com/in/purvish-d-7a3840184/">
                <AiFillLinkedin />
              </a>{" "}
              Linkedin Profile
            </Button>{" "}
            <Button variant="dark">
              <a
                href="../img/215300694009_purvishdhameliya.pdf"
                download="pdffile"
              >
                <AiOutlineDownload />
              </a>{" "}
              Download Resume
            </Button>{" "}
            <Button variant="outline-dark">
              <a href="https://github.com/PurvishDhameliya">
                <AiFillGithub />
              </a>{" "}
              Github Profile
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
