// Cart.jsx
import React from "react";
import "../styles/cart.css";

function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-grid">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>
                  ₹{item.price}
                  <span className="old-price">₹{item.oldPrice}</span>
                </p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
