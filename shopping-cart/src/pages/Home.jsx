import React from "react";
import { useNavigate } from "react-router-dom";
import all_product from "../data/all_product";
import "../index.css";

function Home() {
  const navigate = useNavigate();

  // Try to detect "new" products based on common fields; fallback to first 4.
  const newProducts = all_product.filter(
    (p) =>
      p.isNew === true ||
      p.new === true ||
      (typeof p.tag === "string" && p.tag.toLowerCase().includes("new"))
  );
  const displayNew = newProducts.length > 0 ? newProducts : all_product.slice(0, 4);

  return (
    <div className="home-container">
      {/* === Hero / Intro (optional, keep or remove) === */}
      <header className="hero-section">
        <h1>Welcome to Our Store</h1>
        <p>Discover great deals on top products.</p>
      </header>

      {/* === New Collection Section === */}
      <section className="new-collection">
        <h2>🆕 New Collection</h2>
        <div className="product-grid">
          {displayNew.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>
                <strong>₹{item.new_price}</strong>{" "}
                <span
                  style={{ textDecoration: "line-through", color: "gray" }}
                >
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
      </section>

      {/* === All Products Section === */}
      <section className="all-products">
        <h2>All Products</h2>
        <div className="product-grid">
          {all_product.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>
                <strong>₹{item.new_price}</strong>{" "}
                <span
                  style={{ textDecoration: "line-through", color: "gray" }}
                >
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
      </section>
    </div>
  );
}

export default Home;
