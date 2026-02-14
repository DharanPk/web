import React ,{useState}from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/action"; 
import "./ProductCard.css";

function ProductCard({ product }) {
   const dispatch = useDispatch();
  const [showMsg, setShowMsg] = useState(false);

  const handleAdd = () => {
    dispatch(add(product));

    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 1500);}

  return (
    <div className="food-card">
      <div className="food-img">
        <img src={product.image} alt={product.name} />
         <span className="add-btn" onClick={handleAdd}>+</span>
            </div>
         <div className="food-card">   
       {showMsg && <div className="cart-msg">Added to cart</div>}
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
    </div>
  );
}
export default ProductCard;
