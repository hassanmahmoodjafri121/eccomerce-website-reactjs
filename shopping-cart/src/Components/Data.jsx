import React from "react";
import data from "../data/data.js";

function Data() {
  return (
    <div className="product-grid">
      {data.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Data;