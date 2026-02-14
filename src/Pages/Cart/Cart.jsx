import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/action";
import "./Cart.css";
import { useEffect } from "react";
import { saveCartToStorage } from "../../redux/cartStorage";
import { useNavigate } from "react-router-dom"; 

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.product.cartproduct);
  useEffect(() => {
  saveCartToStorage(cart);
}, [cart]);


  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <h2>.</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>

              <td>{item.name}</td>

              <td>₹{item.price}</td>

              <td>
                <button onClick={() => dispatch(remove(item.id))}>−</button>
                <span className="qty-value">{item.qty}</span>
                <button onClick={() => dispatch(add(item))}>+</button>
              </td>

              <td>₹{item.price * item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="cart-total">Grand Total: ₹{totalAmount}</h3>
      <button className="pay-btn" onClick={()=>navigate("/checkout")}>Payment</button>
    </div>
  );
}

export default Cart;
