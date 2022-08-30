import React from "react";
import "./home.css";
// import bs from "../img/bannerservice1.jpg";
import Cards from "./Cards";
import Data from "./Data";
import { Row } from "react-bootstrap";

function Service() {
  return (
    <>
      <h2 className="service_title pt-1 mt-1">Service</h2>
      <div className="container mt-5 pt-3 d-flex">
        <Row className="justify-content-between">
          {Data.map((val) => {
            return (
              <>
                <div className="col-md-4 service_box" >
                  <Cards
                    imgsrc={val.cImg}
                    title={val.title}
                    name={val.cardname}
                    link={val.link}
                    key={val.id}
                  />
                </div>
              </>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default Service;
