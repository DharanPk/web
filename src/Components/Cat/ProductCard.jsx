import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/action"; // adjust path if needed
import "./ProductCard.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="food-card">
      <div className="food-img">
        <img src={product.image} alt={product.name} />

        {/* ADD TO CART */}
        <span
          className="add-btn"
          onClick={() => dispatch(add(product))}
        >
          +
        </span>
      </div>

      <div className="food-info">
        <div className="food-title">
          <h4>{product.name}</h4>
          <span className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa-solid fa-star-half"></i>
          </span>
        </div>
        <p className="price">₹{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
