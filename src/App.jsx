import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Admin from './pages/Admin'; // Adjust path as needed
import Restaurents from './components/Restaurent/Restaurents';
import LoggingPOPUP from './components/loggingPOPUP/LoggingPOPUP';
import MainOrder from './pages/MainOrder';

function App() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch('/api/foodItems')
      .then(response => response.json())
      .then(data => setFoodItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='w-full  overflow-hidden m-auto'>
      {/* <h1>Food Items</h1>
      <ul>
        {foodItems.map(item => (
          <li key={item._id}>{item.name} - ${item.price}</li>
        ))}
      </ul> */}
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoggingPOPUP/>} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Order' element={<MainOrder />} />
        <Route path='/Restaurent' element={<Restaurents link='disable' showAdditionalContent="enable" />} />
      </Routes>
    </div>
  );
}

export default App;
