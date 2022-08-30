import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./home.css";

const Cards = (props) => {
  return (
    <>
      <div className="container d-flex justify-content-space-between">
        <Card style={{ width: "21rem" }} className="mb-3 align-items-center">
          <Card.Img
            variant="top"
            src={props.imgsrc}
            style={{ height: "10rem" }}
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.name}</Card.Text>
            <Button variant="outline-dark">Explore</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Cards;
