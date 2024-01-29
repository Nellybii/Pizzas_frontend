import React, { useEffect, useState } from "react";
import { BASE_URL } from "../assets/utils";
import Cardbody from "./RestaurantCardBody";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/restaurants`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((restaurantsData) => {
        console.log(restaurantsData);
        setRestaurants(restaurantsData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} style={{ display: "inline-block", marginRight: "10px" }}>
          <Cardbody restaurant={restaurant} />
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;
