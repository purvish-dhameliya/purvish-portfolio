import React from "react";
import mm from "../img/11111.png";
import "./home.css";
import { Carousel } from "react-bootstrap";

function Review() {
  return (
    <>
      <div className="testimonials-clean">
        <div className="container">
          <div className="intro">
            <h2 className="text-center review_title">Testimonials </h2>
            <p className="text-center">
              Work with Good people make you good to do anything for your
              journey In this I have some of them.
            </p>
          </div>
          <div className="row people">
            <Carousel className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  its been great experince with Purvish. Purvish is nice with
                  designing and make website with good manner to suggest to what
                  to do.
                </p>
              </div>
              <div className="author">
                <img className="rounded-circle" src={mm} alt="11" />
                <h5 className="name">Ravi Sachapara</h5>
                <p className="title">CEO of RS pvt.</p>
              </div>
            </Carousel>
            <Carousel className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  Nice thinker and give all design with good manner in return
                  with few hour.I Highly recommand to work with Purvish.
                </p>
              </div>
              <div className="author">
                <img className="rounded-circle" src={mm} alt="11" />
                <h5 className="name">Sumit singh Rajput</h5>
                <p className="title">At upwork client.</p>
              </div>
            </Carousel>
            <Carousel className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  I give to Wordpress design and he is done in some days with
                  great work and pixel perfect and responsive design with good
                  communication with me.
                </p>
              </div>
              <div className="author">
                <img className="rounded-circle" src={mm} alt="11" />
                <h5 className="name">Sam Son</h5>
                <p className="title">At Upwork.</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
