import Navbar from "./components/shared/Navbar";
import LandingPage from "./components/shared/Landing";
import Login from "./components/forms/Login";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import React from 'react';
import Product from "./components/products/Product"; 
import { BrowserRouter as Router, Route ,Routes ,Navigate} from 'react-router-dom';
import { authSlice } from "./components/redux/AuthSlice";

// Sample components for the routes
const About = () => <h2>About Page</h2>;
const Services = () => <h2>Services Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const store = configureStore({ reducer: { auth: authSlice.reducer } });

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/" exact element={<LandingPage/>} />
                        <Route path="/products" element={<Product />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/contact" component={Contact} />
                        </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
