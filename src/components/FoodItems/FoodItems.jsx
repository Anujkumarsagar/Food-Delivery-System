import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./FoodItem.css" // Import the CSS file

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/foodItems');
        setFoodItems(response.data);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };

    fetchFoodItems();
  }, []);

  return (
    <div className="food-items-container">
      <h2 className="food-items-title">Food Items</h2>
      <ul className="food-items-list">
        {foodItems.map(item => (
          <li key={item._id} className="food-item">
            <h3 className="food-item-name">{item.name}</h3>
            <p className="food-item-price">Price: ${item.price}</p>
            <p className="food-item-description">Description: {item.description}</p>
            <p className="food-item-ratings">Rating: {item.ratings}</p>
            <p className="food-item-place">Place: {item.place}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
