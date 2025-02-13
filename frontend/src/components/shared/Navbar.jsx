// Navbar.js
import React from 'react';
import '../../styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {  useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthSlice from "../redux/AuthSlice";


const Navbar = () => {

    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      dispatch(AuthSlice.actions.logout());
      navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="logo"><a href="/">Shop Sphere</a></div>
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-bar" />
                <button className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="nav-links">
                <a href="/products">Products</a>
                <a href="/wishlist">WhishList</a>
                <a href="/cart"><FontAwesomeIcon icon={faCartShopping} size="lg" /> &nbsp; Cart</a>
                {user ? (
                    <>
                    <a href="/orders">Orders</a>
                    <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <a href="/login">Login</a>
                )}
                <a href="/" className='profile-icon'><FontAwesomeIcon icon={faUserCircle} size="lg" />&nbsp;Profile</a>
            </div>
        </nav>
    );
};

export default Navbar;