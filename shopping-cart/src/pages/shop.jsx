import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import all_product from "../data/all_product";

function Shop({ setCartItems }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = all_product.find((p) => p.id === parseInt(productId));

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p>No product selected. Please go to Home and click "Shop Now".</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    setCartItems((prev) => [...prev, product]);
    navigate("/cart");
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>
        <strong>Price: ₹{product.new_price}</strong>{" "}
        <span style={{ textDecoration: "line-through", color: "gray" }}>
          ₹{product.old_price}
        </span>
      </p>
      <button className="shop-now-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Shop;
