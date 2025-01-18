// LandingPage.js
import React from 'react';
import '../../styles/landing.css'
const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="hero">
                <div className="header">
                    <div className="landingContent">
                        <h1>Welcome to Our E-Commerce Store</h1>
                        <p>Your one-stop shop for all your needs!</p>
                        <button className="cta-button">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="categories">
                <h2>Shop by Category</h2>
                <div className="category-list">
                    <div className="category-item">Electronics</div>
                    <div className="category-item">Fashion</div>
                    <div className="category-item">Home & Garden</div>
                    <div className="category-item">Sports</div>
                </div>
            </div>
            <footer className="footer">
                <p>&copy; 2023 Your E-Commerce Store. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;