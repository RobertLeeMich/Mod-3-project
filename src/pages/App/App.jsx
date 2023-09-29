import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import NewOrderPage from '../../pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../../pages/OrderHistoryPage/OrderHistoryPage';
import AuthPage from '../../pages/AuthPage/AuthPage';
import GameListPage from '../../pages/GameListPage/GameListPage';
import CartPage from '../../pages/CartPage/CartPage';
import { getUser } from '../../utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (game) => {
    setCartItems(prevItems => [...prevItems, game]);
  };

  return (
    <main className='App'>
      { 
        user ?
        <>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
            <Route path='/games' element={<GameListPage cartItems={cartItems} addToCart={addToCart} />} />
            <Route path='/cart' element={<CartPage cartItems={cartItems} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      } 
    </main>
  );
}

export default App;
