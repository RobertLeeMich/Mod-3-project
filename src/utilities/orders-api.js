import axios from 'axios';

export const createOrder = async (orderData) => {
  const res = await axios.post('/api/orders', orderData);
  return res.data;
};

export const getOrdersByUserId = async (userId) => {
    const res = await axios.get(`/api/orders/${userId}`);
    return res.data;
};
