import React from "react";

const Cart = ({ cartItems, setCartItems }) => {
  // Function to remove item by index
  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
  };

  return (
    <div className="product-grid">
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              <strong>₹{item.new_price}</strong>{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                ₹{item.old_price}
              </span>
            </p>
            <button className="remove-btn" onClick={() => handleRemove(index)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
