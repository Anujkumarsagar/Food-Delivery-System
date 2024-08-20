import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaHome, FaHamburger, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';
import Button from '../Button/Button';
import LoginPopup from '../loggingPOPUP/LoggingPOPUP';

function Navbar() {
    const location = useLocation(); // React Router's useLocation hook
    const [showLoginPopup, setShowLoginPopup] = useState(false); // Default to false
    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    const handleSearchClear = () => {
        document.getElementById('search').value = ''; // Clear the input field
    };

    const toggleLoginPopup = () => {
        setShowLoginPopup(!showLoginPopup);
    };

    const toggleSideMenu = () => {
        setSideMenuOpen(!sideMenuOpen);
    };

    const buttonStyles = {
        boxShadow: '5px 9px 10px -1px grey, inset 7px 8px 11px -1px #8080802e',
    };

    return (
        <div className='navbar'>
            <img
                src='https://png.pngtree.com/png-clipart/20231014/original/pngtree-savor-the-perfect-burger-generative-with-ai-png-image_13298444.png'
                width='6%'
                alt='Logo'
                onClick={() => handleMenuChange('home')}
            />
            {/* Toggle button for side menu */}
            <FaBars className='menu-toggle' onClick={toggleSideMenu} />

            {/* Desktop Navigation */}
            {!showLoginPopup && (
                <div className='pc-nav gap-2'>
                    <ul className='menu'>
                        <li>
                            <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
                                <FaHome /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/Order' className={location.pathname === '/Order' ? 'active' : ''}>
                                <FaHamburger /> Order
                            </Link>
                        </li>
                        <li>
                            <Link to='/Cart' className={location.pathname === '/Cart' ? 'active' : ''}>
                                <FaShoppingCart /> Cart
                            </Link>
                        </li>
                        <li>
                            <span><Link to='/login' onClick={toggleLoginPopup}>Login</Link></span> /
                            <span><Link to='/Register'>Register</Link></span>
                        </li>
                    </ul>

                    <ul>
                        <Button style={buttonStyles} onClick={handleSearchClear} text='Clear' width='64px' />
                        <input
                            type='text'
                            placeholder='Search Your Dish😋'
                            name='Search'
                            id='search'
                        />
                    </ul>
                </div>
            )}

            {/* Side Menu */}
            <div id='sideMenu' className={`side-menu ${sideMenuOpen ? 'open' : ''}`}>
                <div className='mobile-search'>
                    <div className={`cross-for-nav ${sideMenuOpen ? 'open' : ''}`} onClick={toggleSideMenu}> X </div>
                    <form className='search-form'>
                        <input
                            autoComplete='off'
                            className='search-input'
                            placeholder='Search'
                            type='search'
                        />
                        <button className='search-action' type='submit' value=''>
                            Search
                        </button>
                    </form>
                </div>

                <div className='menu-items'>
                    <Link to='/' className={location.pathname === '/' ? 'active-of-small-nav' : 'item'} onClick={toggleSideMenu}>
                        <FaHome /> Home
                    </Link>
                    <Link to='/Order' className={location.pathname === '/Order' ? 'active-of-small-nav' : 'item'} onClick={toggleSideMenu}>
                        <FaHamburger /> Order
                    </Link>
                    <Link to='/Cart' className={location.pathname === '/Cart' ? 'active-of-small-nav' : 'item'} onClick={toggleSideMenu}>
                        <FaShoppingCart /> Cart
                    </Link>
                    {/* Add more links as needed */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
