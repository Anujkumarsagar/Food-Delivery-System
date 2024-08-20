import React from 'react';

const MenuItems = ({ item, addToCart }) => {
  return (
    <div className="  rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <img
        src={item.image}
        width="300"
        height="200"
        style={{ aspectRatio: '300 / 200', objectFit: 'cover' }}
        alt={item.name}
        className= "  rounded-t-lg object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-muted-foreground">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
          <button
            className="whitespace-nowrap ring-offset-background focus-visible:ring-offset-2 inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
