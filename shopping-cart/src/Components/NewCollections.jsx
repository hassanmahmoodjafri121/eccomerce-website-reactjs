import React from "react";
import { useNavigate } from "react-router-dom";
import New_collections from "../data/new_collections.js";
import "../index.css"; 
import new_collections from "../data/new_collections.js";

function NewCollections() {
  const navigate = useNavigate();

  return (
    <div className="product-grid">
      {new_collections.map((item) => (
        <div key={item.id} className="product-card">
          <img
            src={item.image}
            alt={item.name}
            className="product-image"
          />
          <h3>{item.name}</h3>
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
export default NewCollections;
