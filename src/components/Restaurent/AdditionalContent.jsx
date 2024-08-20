import React from 'react';
import Header from '../Header/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AdditionalContent.css';
import Card from '../Cards/Card';

function AdditionalContent() {
    const info = [
        {
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D",
            heading: "Salad With Protein",
            para: `"Fuel Your Day with Protein-Packed "`,
        },
        {
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
            heading: "Day With Pizza",
            para: `"Make Every Day a Pizza Day!
        Indulge in "`,
        },
        {
            image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            heading: "Night With Burger",
            para: `"Unwind Your Night with Irresistible Burgers!
        Savor Every "`,
        },
        {
            image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww",
            heading: "Morning Burger",
            para: `"Start Your Day Right with "`,
        },
        {
            image: "https://media.istockphoto.com/id/1321706360/photo/sago-fritters-or-sabudana-vada-made-from-tapioca-sago.webp?b=1&s=170667a&w=0&k=20&c=yXowIZxJ1SBSOoG8LQa9P5cLnUciFzslIsu5tNeTcL0=",
            heading: "Pakode",
            para: `"Delight Your Taste Buds w" `,
        },
    ];

    function Headers() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            cssEase: 'ease',
        };

        return (
            <div className="header-cover">
                <Slider {...settings} arrows>
                    {info.map((item, index) => (
                        <div key={index}>
                            <Header image={item.image} heading={item.heading} para={item.para} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }

    function CardsOfAdditionalRestaurantItems({ info }) {
        return (
            <div>
                {info.map((item, index) => (
                    <div key={index} className='card-wrapper' >
                        <Card image={item.image} title={item.heading} para={item.para} price='56$' restaurant={null} />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <Headers />
            <CardsOfAdditionalRestaurantItems info={info} />
        </div>
    );
}

export default AdditionalContent;
