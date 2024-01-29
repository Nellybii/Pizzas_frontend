import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../assets/utils';
import Cardbody from './RestaurantCardBody';

const SearchBarFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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
        // Initialize filteredData as an empty array
        setFilteredData([]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };

  const filterData = (searchTerm) => {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <div>
      <input
        style={{ width: '100%', paddingTop:"4px", paddingBottom:"4px" }}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />

      <>
        {filteredData.map((restaurant) => (
          <div key={restaurant.id} style={{ display: "inline-block", marginRight: "10px" }}>
            <Cardbody restaurant={restaurant} />
          </div>
        ))}
      </>
    </div>
  );
};

export default SearchBarFilter;
