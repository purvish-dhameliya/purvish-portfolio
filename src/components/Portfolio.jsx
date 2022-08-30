import React from "react";
import "./home.css";

import Img1 from "../img/portfolio1.jpg";
import Img2 from "../img/portfolio2.jpg";
import Img3 from "../img/portfolio3.jpg";
import { Row } from "react-bootstrap";

const arr = [
  {
    title: "",
    link: "https://github.com/PurvishDhameliya/TeamMeet-Backend",
    image: Img1,
  },
  {
    title: "",
    link: "https://github.com/PurvishDhameliya/TeamMeet-Backend",

    image: Img2,
  },
  {
    title: "",
    link: "https://github.com/PurvishDhameliya/TeamMeet-Backend",
    image: Img3,
  },
];

const Portfolio = () => {
  return (
    <>
      <div id="portfolio">
        <h2 className="portfolio_title">Portfolio</h2>
        <h5 className="portfolio_para">My Recent Work</h5>

        <div className="container portfolio-container">
          <Row>
            {arr.map((item, index) => {
              return (
                // <div className="portfolio-item" >
                <div className="portfolio-item col-md-4 " key={index}>
                  <div className="portfolio-item-image">
                    <img src={item.image} alt="img" />
                  </div>
                  <h3>{item.title}</h3>
                  <a
                    href={item.link}
                    className="btn btn-outline-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CheckOut
                  </a>
                </div>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
