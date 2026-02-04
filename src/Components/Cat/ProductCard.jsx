import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="food-card">
      <div className="food-img">
        <img src={product.image} alt={product.name} />
        <span className="add-btn">+</span>
      </div>

      <div className="food-info">
        <div className="food-title">
          <h4>{product.name}</h4>
          <span className="rating">★★★★☆</span>
        </div>
        <p className="price">₹{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
