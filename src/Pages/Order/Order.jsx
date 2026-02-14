import React from "react";
import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector(state => state.product.orders);

  return (
    <div className="orders">
      <h2>My Orders</h2>

      {orders.map(order => (
        <div key={order.id} className="order-card">
          <p><b>Order ID:</b> {order.id}</p>
          <p><b>Total:</b> ₹{order.totalAmount}</p>
          <p><b>Status:</b> {order.status}</p>

          {order.items.map(item => (
            <p key={item.id}>
              {item.name} × {item.qty}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Orders;
