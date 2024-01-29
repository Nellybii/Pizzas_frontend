import React, { useEffect, useState } from "react";
import { BASE_URL } from "../assets/utils";
import PizzaCard from "./PizzaCard";

function Pizzas() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/pizzas`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((Data) => {
        console.log(Data);
        setPizzas(Data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {pizzas.map((pizza) => (
        <div key={pizza.id} style={{ display: "inline-block", marginRight: "10px" }}>
          <PizzaCard pizza={pizza} />
        </div>
      ))}
    </div>
  );
}

export default Pizzas;
