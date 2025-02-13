import Navbar from "./components/shared/Navbar";
import LandingPage from "./components/shared/Landing";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import { Provider } from "react-redux";
import React from 'react';
import Product from "./components/products/Product"; 
import { BrowserRouter as Router, Route ,Routes ,Navigate} from 'react-router-dom';
import store from "./components/redux/Store";
import './App.css'



const About = () => <h2>About Page</h2>;
const Services = () => <h2>Services Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
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
