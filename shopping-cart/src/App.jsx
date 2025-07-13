import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Components/Cart";
import UserLogin from "./Pages/UserLogin";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/shop/:productId"
          element={<Shop setCartItems={setCartItems} />}
        />
        <Route
  path="/cart"
  element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
/>
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
