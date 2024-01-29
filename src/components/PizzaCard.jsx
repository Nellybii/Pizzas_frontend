import React from "react";
import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function PizzaCard({ pizza }) {
  return (
    
    <Card>
      <Card.Img
        variant="top"
        src={pizza.image}
        style={{ height: "300px", width: "200px" }}
      />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>{pizza.ingredients}</Card.Text>
        <Card.Text>{pizza.price}</Card.Text>
        <Card.Text>{pizza.restaurants}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;
