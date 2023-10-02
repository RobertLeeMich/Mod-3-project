import axios from 'axios';

export const createOrder = async (orderData) => {
  const res = await axios.post('/api/orders', orderData);
  return res.data;
};

export const getOrdersByUserId = async (userId) => {
    const res = await axios.get(`/api/orders/${userId}`);
    return res.data;
};

export async function deleteOrder(orderId) {
  try {
    const res = await fetch(`/api/orders/${orderId}`, {
      method: 'DELETE'
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
}
