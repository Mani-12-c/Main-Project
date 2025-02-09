// import React from 'react'
// import '../../styles/login.css'

// const Login = () => {
//   return (
// <div class="container">
// 	<div class="screen">
// 		<div class="screen__content">
// 			<form class="login">
// 				<div class="login__field">
// 					<i class="login__icon fas fa-user"></i>
// 					<input type="text" class="login__input" placeholder="User name / Email" />
// 				</div>
// 				<div class="login__field">
// 					<i class="login__icon fas fa-lock"></i>
// 					<input type="password" class="login__input" placeholder="Password" />
// 				</div>
// 				<button class="button login__submit">
// 					<span class="button__text">Log In Now</span>
// 					<i class="button__icon fas fa-chevron-right"></i>
// 				</button>				
// 			</form>
// 			<div class="social-login">
// 				<h3>log in via</h3>
// 				<div class="social-icons">
// 					<a href="/" class="social-login__icon fab fa-instagram">{}</a>
// 					<a href="/" class="social-login__icon fab fa-facebook">{}</a>
// 					<a href="/" class="social-login__icon fab fa-twitter">{}</a>
// 				</div>
// 			</div>
// 		</div>
// 		<div class="screen__background">
// 			<span class="screen__background__shape screen__background__shape4"></span>
// 			<span class="screen__background__shape screen__background__shape3"></span>		
// 			<span class="screen__background__shape screen__background__shape2"></span>
// 			<span class="screen__background__shape screen__background__shape1"></span>
// 		</div>		
// 	</div>
// </div>
//   )
// }

// export default Login

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import axios from "axios";
import { authSlice } from "../redux/AuthSlice";
 import '../../styles/login.css'

const API_URL = "http://127.0.0.1:8000/api/";

const Login = () => {
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
    dispatch(authSlice.actions.login({ user: response.data.user, token: response.data.access }));
    await axios.post(`${API_URL}users/behavior/`, { behaviorData });
  };

  return (
    <motion.div className="login-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button className="Login-button"  type="submit">Login</button>
      </form>
    </motion.div>
  );
};

export default Login;
