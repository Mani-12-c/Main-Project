// Navbar.js
import React from 'react';
import '../../styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">MyLogo</div>
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-bar" />
                <button className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
                <a href="/login">Login</a>
                <a href="/" className='profile-icon'><FontAwesomeIcon icon={faUserCircle} size="lg" /></a>
            </div>
        </nav>
    );
};

export default Navbar;