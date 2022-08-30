import Form from "react-bootstrap/Form";
import React from "react";
import "./home.css";
import { Button } from "react-bootstrap";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function Contact() {
  return (
    <>
      <div className="container mt-3 mb-5 contact_box">
        <h2 className="contact_title">Contact Me</h2>
        <p className="about_info mb-5">
          Any question or remarks?Just write us a mee sage!
        </p>
        <hr className="w-75 text-center ml-5"></hr>

        <div className="row">
          <div className="col-md-4 bg_img">
            <h2>Contact Information</h2>
            <p>
              Fill up form and our team will get back to you within 24 hour.
            </p>
            <ul className="d-block text-left mb-5 my-5 contact_left_des">
              <li>
                <AiOutlinePhone />
                +91 9106163772
              </li>
              <li>
                <AiOutlineMail />
                purvisdhameliya37@gmail.com
              </li>
              <li>🗺 Surat,Gujarat</li>
            </ul>
            <ul className="d-flex justify-content-start gap-3">
              <li>
                <AiFillFacebook />
              </li>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <AiFillGithub />
              </li>
              <li>
                <AiFillLinkedin />
              </li>
            </ul>
          </div>
          <div className="col-md-8 text-left text-align-left">
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email address"
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Phone Number"
                  />
                </Form.Group>
              </div>
              <p>Which type of Website do you want?</p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" placeholder="Enter Message here" />
              </Form.Group>
              <div className="">
                <Button variant="outline-dark" className="ml-5">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
