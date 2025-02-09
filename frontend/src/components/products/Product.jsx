import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import '../../styles/product.css'

const API_URL = "http://127.0.0.1:8000/api/";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}products/`).then((response) => setProducts(response.data));
  }, []);

  return (
    <motion.div className="products-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} width="100" />
        </div>
      ))}
    </motion.div>
  );
};

export default Products;
