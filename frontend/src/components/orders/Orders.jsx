import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import "./Orders.css";

const API_URL = "http://127.0.0.1:8000/api/orders/";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } }).then((response) => setOrders(response.data));
  }, [token]);

  return (
    <motion.div className="orders-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Your Orders</h2>
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <h3>Order #{order.id}</h3>
          <p>Total Price: ${order.total_price}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Orders;
