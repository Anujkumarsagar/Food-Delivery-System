import React, { useState } from 'react';
import Cart from "./Cart"
import MenuItems from '../components/Main Order Components/MenuItems';
import HeroSection from '../components/Main Order Components/HeroSection';

// Sample data for menu items
const menuItems = [
  {
    id: 1,
    name: 'Juicy Burger',
    description: 'Delicious beef patty, fresh buns, and all the fixings.',
    price: 12.99,
    image: 'https://placehold.co/400',
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    description: 'Freshly baked pizza with pepperoni and mozzarella cheese.',
    price: 15.99,
    image: 'https://placehold.co/400',
  },
  {
    id: 3,
    name: 'Fresh Salad',
    description: 'Mixed greens, vegetables, and a delicious dressing.',
    price: 9.99,
    image: 'https://placehold.co/400',
  },
  {
    id: 4,
    name: 'Creamy Pasta',
    description: 'Perfectly cooked pasta in a rich, creamy sauce.',
    price: 14.99,
    image: 'https://placehold.co/400',
  },
  {
    id: 5,
    name: 'Spicy Tacos',
    description: 'Flavorful tacos with a kick of spice.',
    price: 11.99,
    image: 'https://placehold.co/400',
  },
  {
    id: 6,
    name: 'Decadent Dessert',
    description: 'A sweet treat to end your meal.',
    price: 6.99,
    image: 'https://placehold.co/400',
  },
];

const MainOrder = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    } else {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    }
  };

  return (
    <div className="flex flex-col w-[90%] m-auto rounded-2xl min-h-screen">
      <HeroSection />
      <section id="menu" className="py-12 md:py-24">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <MenuItems key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </section>
      <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default MainOrder;
