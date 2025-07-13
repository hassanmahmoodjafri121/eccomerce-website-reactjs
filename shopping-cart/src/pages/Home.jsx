import React from "react";
import { useNavigate } from "react-router-dom";
import all_product from "../data/all_product";
import "../index.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="product-grid">
      {all_product.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>
            <strong>₹{item.new_price}</strong>{" "}
            <span style={{ textDecoration: "line-through", color: "gray" }}>
              ₹{item.old_price}
            </span>
          </p>
          <button
            className="shop-now-btn"
            onClick={() => navigate(`/shop/${item.id}`)}
          >
            Shop Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
