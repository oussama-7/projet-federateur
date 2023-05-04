import React from "react";
import { Card, Button } from "react-bootstrap";

const CardsMajor = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem", }}>
        <Card.Img variant="top" src={props.image} style={{height: "270px" , width: "280 px" }} />
        <Card.Body>
          <Card.Title>{props.jurusan}</Card.Title>
          <Card.Text style={{marginLeft: "10px" }}>
            Explorer
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsMajor;
