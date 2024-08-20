import React, { useState, useEffect, useRef } from 'react';
import './Cards.css';
import Card from './Card';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function Cards({ data}, replay = false) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const cardWrapperRef = useRef(null);
    const cardWidthRef = useRef(0);

     replay && useEffect(() => {
        const updateCardWidth = () => {
            if (cardWrapperRef.current) {
                cardWidthRef.current = cardWrapperRef.current.clientWidth;
            }
        };

        updateCardWidth();
        window.addEventListener('resize', updateCardWidth);

        return () => {
            window.removeEventListener('resize', updateCardWidth);
        };
    }, []);

    const goToPrevCard = () => {
        setCurrentCardIndex(prevIndex => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const goToNextCard = () => {
        setCurrentCardIndex(prevIndex => (prevIndex + 1) % data.length);
    };

    replay && useEffect(() => {
        if (cardWrapperRef.current) {
            cardWrapperRef.current.scrollTo({
                left: currentCardIndex * cardWidthRef.current,
                behavior: 'smooth'
            });
        }
    }, [currentCardIndex]);

    replay && useEffect(() => {
        const interval = setInterval(goToNextCard, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='cards-of-card'>
            <div className="btn-for-slider">
                <div className="left" onClick={goToPrevCard}><FaArrowLeftLong /></div>
                <div className="right" onClick={goToNextCard}><FaArrowRightLong /></div>
            </div>
            <div className="card-wrapper" ref={cardWrapperRef} style={{ display: 'flex', overflowX: 'auto' }}>
                {data.map((item, index) => (
                    <Card key={index} title={item.title} image={item.image} para={item.para} price={item.price} restaurant={item.restaurant} />
                ))}
            </div>
        </div>
    );
}

export default Cards;
