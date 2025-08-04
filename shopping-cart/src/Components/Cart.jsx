import React from "react";
import "../index.css"; 

const Cart = ({ cartItems = [], removeFromCart }) => {
  return (
    <div className="cart-container">
      <h2>🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item, index) => (
            <div key={item.id || index} className="cart-card">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3 className="cart-name">{item.name}</h3>
                <p className="cart-price">₹{item.price}</p>
                <p className="cart-qty">Qty: {item.quantity || 1}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
