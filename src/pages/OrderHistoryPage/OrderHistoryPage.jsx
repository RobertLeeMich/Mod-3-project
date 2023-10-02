import React, { useState, useEffect } from 'react';
import { checkToken, getUser } from "../../utilities/users-service.js";
import { getOrdersByUserId, deleteOrder } from "../../utilities/orders-api.js"; 
import styles from './OrderHistoryPage.module.css';



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

  async function handleDeleteOrder(orderId) {
    try {
      await deleteOrder(orderId);
      setOrders(orders.filter(order => order._id !== orderId));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Order History Page</h1>
      {/* <button className={styles.button} onClick={handleCheckToken}>Check Token Expiration</button> */}
      
      {orders.length ? (
        <ul className={styles.orderList}>
          {orders.map((order, idx) => (
            <li key={idx} className={styles.orderItem}>
              <h3 className={styles.subHeading}>Order ID: {order._id.slice(-5)} 
              <button className={styles.deleteOrder} onClick={() => handleDeleteOrder(order._id)}>Delete Order</button></h3>
              <ul className={styles.itemList}>
                {order.items.map((item, i) => (
                  <li key={i} className={styles.item}>
                    <img className={styles.itemImage} src={item.background_image || 'default_image_url_here'} alt={item.name} width="50" /> 
                    <span className={styles.itemName}>{item.name}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.total}>Total: ${order.items.reduce((acc, item) => acc + (item.price * item.quantity || 0), 0).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noOrders}>No orders found</p>
      )}
    </div>
  );
}

export default OrderHistoryPage;
