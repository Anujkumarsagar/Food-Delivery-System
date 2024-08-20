import React from 'react';
import {logo} from "../index";

const HeroSection = () => {
  return (
    <section className=" cardofcart w-[99%]  m-auto bg-[url({'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVhbHxlbnwwfHwwfHx8MA%3D%3D'})] bg-cover bg-center py-20 px-4 md:px-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 text-center">
        <img
          src={logo}
          width="80"
          height="80"
          alt="Restaurant Logo"
          className="rounded-full"
          style={{ aspectRatio: '80 / 80', objectFit: 'cover' }}
        />
        <h1 className="text-3xl font-bold text-primary-foreground">Acme Delicious Diner</h1>
        <p className="text-lg text-muted-foreground">Delicious meals delivered to your doorstep.</p>
        <a
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Start Order
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
