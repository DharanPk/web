 import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/action";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.product.cartproduct);


  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "10px" }}>
          <img src={item.image}  alt={item.name} width="60" />
          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <button onClick={() => dispatch(remove(item.id))}>-</button>
            <span style={{ margin: "0 10px" }}>{item.qty}</span>
            <button onClick={() => dispatch(add(item))}>+</button>
          </div>
        </div>
      ))}

      <h3>Total: ₹{totalAmount}</h3>
    </div>
  );
}

export default Cart;
