import React, { useState } from 'react';
import './Stripe.css';
import Cards from '../Cards/Cards';

const Stripe = ({ data }) => {
    const [clickedCategorie, setClickedCategorie] = useState(-1);

    // Get the alt text of the selected category
    const selectedCategoryAlt = clickedCategorie !== -1 ? data[clickedCategorie].alt : '';

    // Filter data based on the selected category's alt text
    const filteredData = data.filter(item => item.alt === selectedCategoryAlt);

    return (
        <div className="flex flex-col items-center p-4 ">
            <div className="shadow-for-strip flex overflow-x-auto space-x-4 w-full">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 w-40 h-40 p-2 rounded-lg cursor-pointer ${index === clickedCategorie ? 'shadow-lg outlineforcard' : ''}`}
                        onClick={() => setClickedCategorie(clickedCategorie !== index ? index : -1)}
                    >
                        <img src={item.src} alt={item.alt} className="w-full h-full object-cover rounded-lg" />
                    </div>
                ))}
            </div>
            {clickedCategorie !== -1 && (
                <div className="w-full mt-4">
                    <Cards data={filteredData} /> {/* Pass filtered data */}
                </div>
            )}
        </div>
    );
};

export default Stripe;
