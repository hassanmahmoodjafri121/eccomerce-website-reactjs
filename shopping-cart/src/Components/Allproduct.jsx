import React from "react";
import { useNavigate } from "react-router-dom";
import all_product from "../data/all_product.js";
import "../index.css"; 

function AllProduct() {
  const navigate = useNavigate();

  return (
    <div className="product-grid">
      {all_product.map((item) => (
        <div key={item.id} className="product-card">
          <img
            src={item.image}
            alt={item.name}
            className="product-image"
          />
          <h3>{item.name}</h3>
=
          <p>
            <span style={{ fontWeight: "bold" }}>₹{item.new_price}</span>{" "}
            <span
              style={{
                textDecoration: "line-through",
                color: "gray",
                fontSize: "0.9rem",
              }}
            >
              ₹{item.old_price}
            </span>
          </p>

          <button
            className="shop-now-btn"
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default AllProduct;
