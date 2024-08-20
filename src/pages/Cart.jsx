import React, { useState } from 'react';
import CartItem from '../components/Cart/CartItem';

// Sample data for cart items
const initialItems = [
  {
    id: 1,
    imgSrc: "https://placehold.co/400",
    altText: "Burger",
    title: "Deluxe Burger",
    description: "Beef patty, cheese, lettuce, tomato",
    quantity: 2,
    price: 12.99,
  },
  {
    id: 2,
    imgSrc: "https://placehold.co/400",
    altText: "Pizza",
    title: "Pepperoni Pizza",
    description: "Pepperoni, mozzarella, tomato sauce",
    quantity: 1,
    price: 14.99,
  },
  {
    id: 3,
    imgSrc: "https://placehold.co/400",
    altText: "Salad",
    title: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan",
    quantity: 1,
    price: 8.99,
  },
];

const Cart = () => {
  const [items, setItems] = useState(initialItems);

  // Calculate total price directly
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  // Handle item removal
  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="flex flex-col  min-h-screen text-white">
      <main className="flex-1 py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          <div className="grid gap-6">
            {items.map(item => (
              <CartItem
                key={item.id}
                imgSrc={item.imgSrc}
                altText={item.altText}
                title={item.title}
                description={item.description}
                initialQuantity={item.quantity}
                price={`$${item.price.toFixed(2)}`}
                onRemove={() => handleRemove(item.id)}
              />
            ))}
          </div>
          <div className="mt-8 bg-background rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Total</h2>
              <span className="text-2xl font-bold">${totalPrice}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
