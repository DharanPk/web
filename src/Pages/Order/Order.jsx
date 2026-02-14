import React from "react";
import { useSelector } from "react-redux";
import './Order.css';

function Orders() {
  const orders = useSelector(state => state.product.orders);

  return (
    <div className="orders">
      <h2>My Orders</h2>

      {orders.map(order => (
        <div key={order.id} className="card">
          <p><b>Order ID:</b> {order.id}</p>
          <p><b>Total:</b> ₹{order.totalAmount}</p>
          {order.items.map(item => (
            <div key={item.id} className="item">
              <img src={item.image} alt={item.name} />

              <div className="detail">
                <p className="name">{item.name}</p>
                <p>Qty: {item.qty}</p>
              </div>

              <div className="price">
                ₹{item.price}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Orders;
