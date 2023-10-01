import React, { useState, useEffect } from 'react';
import { checkToken, getUser } from "../../utilities/users-service.js";
import { getOrdersByUserId } from "../../utilities/orders-api.js"; 

function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const user = getUser();
    const userId = user ? user._id : null;
    
    if (userId) {
      const fetchOrders = async () => {
        try {
          const data = await getOrdersByUserId(userId);
          console.log('Returned data:', data);
          setOrders(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchOrders();
    }
  }, []);

  const handleCheckToken = async () => {
    try {
      const expDate = await checkToken();
      alert(expDate.toLocaleString());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken}>Check Token Expiration</button>
      
      {orders.length ? (
        <ul>
          {orders.map((order, idx) => (
            <li key={idx}>
              <h3>Order ID: {order._id.slice(-5)}</h3>
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>
                    <img src={item.background_image || 'default_image_url_here'} alt={item.name} width="50" /> <span>{item.name}</span>
                  </li>
                ))}
              </ul>
              {console.log('Order Items:', order.items)}
              <p>Total: ${order.items.reduce((acc, item) => acc + (item.price * item.quantity || 0), 0).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
}

export default OrderHistoryPage;
