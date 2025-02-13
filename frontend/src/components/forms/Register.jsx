import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
// import "./Register.css";

const API_URL = "http://127.0.0.1:8000/api/users/register/";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, formData);
    navigate("/login");
  };

  return (
    <motion.div className="lcont" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="login-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
          <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          <button type="submit" className="Login-button">Register</button>
        </form>
        <div className="nav-register">
          <span>Have an account?</span>
          <span><a href="/login">Sign in</a></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
