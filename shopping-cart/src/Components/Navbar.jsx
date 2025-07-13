import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import '../index.css'; //
function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="navList">
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/shop" className="link">Shop</Link></li>
        <li><Link to="/cart" className="link">Cart</Link></li>
        <li><Link to="/login" className="link">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
