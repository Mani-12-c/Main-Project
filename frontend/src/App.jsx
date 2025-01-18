import Navbar from "./components/shared/Navbar";
import LandingPage from "./components/shared/Landing";
import Login from "./components/forms/Login";
// App.js
import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';


// Sample components for the routes
const About = () => <h2>About Page</h2>;
const Services = () => <h2>Services Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                  <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" exact element={<LandingPage/>} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                    </Routes>
            </div>
        </Router>
    );
};

export default App;
