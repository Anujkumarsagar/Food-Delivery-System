import React, { useState } from 'react';
import axios from 'axios';
import './AddFoodItems.css';
import FoodItems from './FoodItems';

const AddFoodItem = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [place, setPlace] = useState('');
  const [ratings, setRatings] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newFoodItem = { name, price, description, place, time, ratings };
      await axios.post('http://localhost:5000/api/foodItems', newFoodItem);
      setName('');
      setPrice('');
      setDescription('');
      setPlace('');
      setTime('');
      setRatings('');
    } catch (error) {
      console.error('Error adding food item:', error);
    }
  };

  return (
    <div className='container-of-AddFoodItem'>
    <div className="add-food-item">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Food Name"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Place"
          required
        />
        <input
          type="number"
          value={ratings}
          onChange={(e) => setRatings(e.target.value)}
          placeholder="Ratings"
        />
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Time"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description" 
        />
        <button type="submit">Add Food Item</button>
      </form>
    </div>
    <div className="show-food-item">
    <FoodItems/>
    </div>
    </div>
    
  );
};

export default AddFoodItem;
