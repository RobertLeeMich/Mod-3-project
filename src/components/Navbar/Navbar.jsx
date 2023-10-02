import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut, getUser } from "../../utilities/users-service.js";
import styles from './Navbar.module.css'

const Navbar = ({getUser, setUser}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    setUser(null);
    navigate('/games')
  };

  return (
    <nav className={styles.navbar}>
      <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/games" className={styles.navLink}>New Order</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/orders" className={styles.navLink}>Order History</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/cart" className={styles.navLink}>Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
