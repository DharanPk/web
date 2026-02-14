import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder, clearCart } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const cart = useSelector(state => state.product.cartproduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const handleOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Fill all required fields");
      return;
    }
    dispatch(addOrder({
      id: Date.now(),
      items: cart,
      totalAmount: total,
      deliveryInfo: form,
      status: "Out for delivery",
      orderDate: new Date().toLocaleString()
    }));
    dispatch(clearCart());
    navigate("/orders");
  };

  return (
    <div className="c-main">
    <div className="check">
      <h2>Delivery Information</h2>

      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Phone" onChange={e=>setForm({...form,phone:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Address" onChange={e=>setForm({...form,address:e.target.value})}/>
      <input placeholder="City" onChange={e=>setForm({...form,city:e.target.value})}/>
      <input placeholder="State" onChange={e=>setForm({...form,state:e.target.value})}/>
      <input placeholder="Pincode" onChange={e=>setForm({...form,pincode:e.target.value})}/>

      <h3>Total: ₹{total}</h3>
      <button onClick={handleOrder}>Proceed To Payment</button>
    </div>
    </div>
  );
}

export default Checkout;
