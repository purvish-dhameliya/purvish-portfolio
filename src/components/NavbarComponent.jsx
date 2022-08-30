import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "./home.css";
import pd from "../img/pdlogr.png";

function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="sticky-top">
      <div className="container mt-n5 pt-n5 nav_com text-white">
        {/* <Navbar.Brand to="/" className="Logo">Purvish Dhameliya</Navbar.Brand> */}

        <Navbar.Brand>
          <img
            src={pd}
            width="100"
            height="100"
            className="d-flex Logo mt-n4"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav_right">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/service">
              <Nav.Link>Service</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/portfolio">
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/review">
              <Nav.Link>Testimonials</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
