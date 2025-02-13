import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping,faHeartCirclePlus,faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import '../../styles/product.css'

const API_URL = "http://127.0.0.1:8000/api/";

const Products = () => {
  const pd = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Experience the freedom of wireless audio with these comfortable headphones.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      oldPrice: "$699",
      newPrice: "$345",
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Stay connected with the latest smartphone featuring a stunning display and powerful performance.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      oldPrice: "$999",
      newPrice: "$799",
    },
    {
      id: 3,
      name: "Laptop",
      description: "A lightweight laptop with a long battery life, perfect for work and play.",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      oldPrice: "$1299",
      newPrice: "$999",
    },
    {
      id: 4,
      name: "Smartwatch",
      description: "Track your fitness and stay connected with this stylish smartwatch.",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      oldPrice: "$299",
      newPrice: "$199",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      description: "Enjoy high-quality sound on the go with this portable Bluetooth speaker.",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      oldPrice: "$149",
      newPrice: "$99",
    },
    {
      id: 6,
      name: "Gaming Mouse",
      description: "Enhance your gaming experience with this high-precision gaming mouse.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      oldPrice: "$89",
      newPrice: "$59",
    },
  ];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}products/`).then((response) => setProducts(response.data));
  }, []);

  return (
    <motion.div className="products-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="products-title">
        <h2>Products</h2>
        <hr />
      </div>
      <div className="products-list">
        {pd.map((product) => (
        <>
      <div className="container" key={product.id}>
          <div className="overlay">
            <div className="items head">
              <p>{product.name}</p>
              <hr />
            </div>
            <div className="items price">
              <div className="old">
                <p >{product.oldPrice}</p>
              </div>
              <div className="new">
                <p >{product.newPrice}</p>
              </div>
            </div>
            <div className="items description">
              <p >{product.description}</p>
            </div>
            <div className="items cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>ADD TO CART</span>
              <FontAwesomeIcon icon={faHeartCircleCheck} />

            </div>
          </div>
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
          {/* // <div key={product.id} className="product-card">
          //   <h3>{product.name}</h3>
          //   <p>{product.description}</p>
          //   <img src={product.image} alt={product.name} width="100" />
          // </div> */}
        </>
      ))}
      </div>
      
    </motion.div>
  );
};

export default Products;
