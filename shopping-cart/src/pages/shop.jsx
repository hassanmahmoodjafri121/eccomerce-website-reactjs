import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import all_product from "../data/all_product";

function Shop({ setCartItems }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = all_product.find((p) => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="product-detail-empty">
        <p>No product selected. Please go to Home and click "Shop Now".</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    setCartItems((prev) => [...prev, product]);
    navigate("/cart");
  };

  return (
    <section className="product-detail-container">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-detail-image"
        />
      </div>
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">
          ₹{product.new_price}{" "}
          <span className="product-old-price">₹{product.old_price}</span>
        </p>
        <button className="shop-now-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default Shop;
