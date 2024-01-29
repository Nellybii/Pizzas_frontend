import React from "react";
import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Cardbody({ restaurant }) {
  return (
    <Card>
    <Card.Img
      variant="top"
      src={restaurant.image}
      style={{ height: "300px", width: "200px" }}
    />
    <Card.Body>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Text>{restaurant.location}</Card.Text>
      <Card.Text>ksh {restaurant.price}</Card.Text>
      <Card.Text>{restaurant.pizza}</Card.Text>
    </Card.Body>
  </Card>
      
//       <Card
//       style={{
//         width: "20rem",
//         height: "30rem",
//         marginTop: "20px",
//         marginLeft: "10px",
//       }}
//       >
//         <Card.Img variant="top" src={restaurant.image} style={{ height: "250px", objectFit: "cover" }}/>
//         <Card.Body>
//           <Card.Title>{restaurant.name}</Card.Title>
//           <Card.Text>{restaurant.location}</Card.Text>
//           <Card.Text>ksh {restaurant.price}</Card.Text>
//           <Card.Text>{restaurant.pizza}</Card.Text>
//         </Card.Body>
//       </Card>
  )
 }

export default Cardbody;
