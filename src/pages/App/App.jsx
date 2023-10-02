import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import NewOrderPage from '../../pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../../pages/OrderHistoryPage/OrderHistoryPage';
import AuthPage from '../../pages/AuthPage/AuthPage';
import GameListPage from '../../pages/GameListPage/GameListPage';
import CartPage from '../../pages/CartPage/CartPage';
import { getUser } from '../../utilities/users-service';
import { createOrder } from '../../utilities/orders-api';
import Footer from '../../components/Footer/Footer.jsx';



function App() {
  const [user, setUser] = useState(getUser());
  const [cartItems, setCartItems] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);


  const addToCart = (game) => {
    const newGame = { ...game, quantity: 1 };
    setCartItems(prevItems => [...prevItems, newGame]);
  };
  
  const handleCheckout = async (orderItems) => {
    const user = getUser();
    if (!user) {
      console.error("User is not authenticated.");
      return;
    }
    const userId = user._id;
    const sanitizedItems = orderItems.map(({ _id, quantity, ...item }) => ({ ...item, quantity }));
    const totalPrice = sanitizedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    try {
      const newOrder = await createOrder({ userId, items: sanitizedItems, totalPrice });
      console.log("Order saved:", newOrder);
    } catch (error) {
      console.error("An error occurred while saving the order:", error);
    }
  };

  const onIncrease = (itemId) => {
    setCartItems(prevItems => 
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const onDecrease = (itemId) => {
    setCartItems(prevItems => 
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const onRemove = (gameId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== gameId));
  };
  return (
    <main className='App'>
      { 
        user ?
        <>
          <Navbar user={user} setUser={setUser} getUser={getUser}/>
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
            <Route path='/games' element={<GameListPage cartItems={cartItems} addToCart={addToCart} />} />
            <Route path='/cart' element={<CartPage cartItems={cartItems} handleCheckout={handleCheckout} onIncrease={onIncrease} onDecrease={onDecrease} onRemove={onRemove} />} />
            <Route path='/orders' element={<OrderHistoryPage userId={user._id} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
            <Footer />
    </main>
  );
}

export default App;
