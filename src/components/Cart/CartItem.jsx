import React, { useState } from 'react';
import './CartItem.css'; // Ensure this file contains the relevant styles

const CartItem = ({ imgSrc, altText, title, description, initialQuantity, price, onRemove }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => setQuantity(prevQuantity => prevQuantity + 1);
  const handleDecrease = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // Prevent quantity from going below 1

  const handleRemove = () => {
    if (onRemove) onRemove(); // Call the remove handler if provided
  };

  return (
    <div className="cardofcart items-center bg-background rounded-lg p-4">
      <img
        src={imgSrc}
        alt={altText}
        width="64"
        height="64"
        className="rounded-md"
        style={{ aspectRatio: '64 / 64', objectFit: 'cover' }}
      />
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={handleDecrease}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M5 12h14"></path>
          </svg>
        </button>
        <span className="text-lg font-medium">{quantity}</span>
        <button 
          onClick={handleIncrease}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-end gap-2">
        <span className="text-lg font-medium">{price}</span>
        <button 
          onClick={handleRemove}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
