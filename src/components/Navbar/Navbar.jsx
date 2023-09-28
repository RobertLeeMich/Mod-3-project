import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/orders/new">New Order</Link></li>
        <li><Link to="/orders">Order History</Link></li>
        <li><Link to="/games">Browse Games</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
