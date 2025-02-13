

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import axios from "axios";
import AuthSlice from "../redux/AuthSlice";
import { useNavigate } from "react-router-dom";
 import '../../styles/login.css'

const API_URL = "http://127.0.0.1:8000/api/";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [behaviorData, setBehaviorData] = useState([]);

  useEffect(() => {
    const collectBehavior = (event) => {
      setBehaviorData((prev) => [
        ...prev,
        { event: event.type, x: event.clientX, y: event.clientY, time: Date.now() },
      ]);
    };
    window.addEventListener("mousemove", collectBehavior);
    window.addEventListener("keydown", collectBehavior);
    return () => {
      window.removeEventListener("mousemove", collectBehavior);
      window.removeEventListener("keydown", collectBehavior);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${API_URL}users/login/`, formData);
    const { access } = response.data; 
    dispatch(AuthSlice.actions.login({ user: response.data.user, token: access }));
    await axios.post(`${API_URL}users/behavior/`, { behaviorData }, {
      headers: {
        Authorization: `Bearer ${access}`, 
      },
    });
    if(response.status===200){
      alert("login was successful");
      navigate('/')
    }
  };

  return (
    <motion.div className="lcont" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="login-container">
        <h2>Log in to your account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
          <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          <button className="Login-button"  type="submit">Login</button>
        </form>
        <div className="nav-register">
          <span>Don't have an account?</span>
          <span><a href="/register">Sign up</a></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
