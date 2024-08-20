import React from 'react';

const Order = () => {
  return (
    <div className='text-white'>
     

      <div className="container mx-auto my-6 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or dish"
            className="border p-2 rounded-lg w-full md:max-w-md mb-4 md:mb-0"
          />
          <div className="flex space-x-4">
            <button className="bg-red-500  py-2 px-4 rounded-lg">
              Order
            </button>
            <button className=" py-2 px-4 rounded-lg">Login</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-6 px-4 md:px-0">
        <h2 className="text-2xl font-semibold mb-4  ">Inspiration for your first order</h2>
        <div className="flex space-x-4 overflow-auto shadow-for-strip">
          <div className="flex-none flex-shrink-0  p-2 rounded-lg cursor-pointer outlineforcard">Pizza</div>
          <div className="flex-none flex-shrink-0  p-2 rounded-lg cursor-pointer outlineforcard">Biryani</div>
          <div className="flex-none flex-shrink-0  p-2 rounded-lg cursor-pointer outlineforcard">Burger</div>
          <div className="flex-none flex-shrink-0  p-2 rounded-lg cursor-pointer outlineforcard">Thai</div>
          <div className="flex-none flex-shrink-0  p-2 rounded-lg cursor-pointer outlineforcard">Cake</div>
          <div className="flex-none flex-shrink-0  p-2 rounded-lg cursor-pointer outlineforcard">Chicken</div>
        </div>
      </div>

      <div className="container mx-auto my-6 px-4 md:px-0">
        <h2 className="text-2xl font-semibold mb-4">Top brands for you</h2>
        <div className="flex space-x-4 overflow-auto shadow-for-strip">
          <div className="flex-none flex-shrink-0  p-2 rounded-lg cursor-pointer outlineforcard">Haldiram's</div>
          <div className="flex-none flex-shrink-0  p-2 rounded-lg cursor-pointer outlineforcard">McDonald's</div>
          <div className="flex-none flex-shrink-0  p-2 rounded-lg cursor-pointer outlineforcard">Domino's Pizza</div>
          <div className="flex-none flex-shrink-0  p-2 rounded-lg cursor-pointer outlineforcard">Burger King</div>
          <div className="flex-none flex-shrink-0  p-2 rounded-lg cursor-pointer outlineforcard">Subway</div>
          <div className="flex-none flex-shrink-0  p-2 rounded-lg cursor-pointer outlineforcard">KFC</div>
        </div>
      </div>

      <div className="container mx-auto my-6 px-4 md:px-0">
        <h2 className="text-2xl font-semibold mb-4">Order food online in</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className=" p-4 rounded-lg">Haldiram's</div>
          <div className=" p-4 rounded-lg">Cake Square</div>
          <div className=" p-4 rounded-lg">Eat & Great Pizza</div>
          <div className=" p-4 rounded-lg">La Pino'z Pizza</div>
          <div className=" p-4 rounded-lg">Biryani N Grill</div>
          <div className=" p-4 rounded-lg">The Burger Club</div>
          <div className=" p-4 rounded-lg">McDonald's</div>
          <div className=" p-4 rounded-lg">Biryani Blues</div>
          <div className=" p-4 rounded-lg">Roma Pizza</div>
          <div className=" p-4 rounded-lg">KFC</div>
          <div className=" p-4 rounded-lg">Domino's Pizza</div>
          <div className=" p-4 rounded-lg">Burger King</div>
        </div>
      </div>
    </div>
  );
};

export default Order;
