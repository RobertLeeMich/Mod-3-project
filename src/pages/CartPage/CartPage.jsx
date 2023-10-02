import React from 'react';
import Cart from '../../components/Cart/Cart';
import styles from './CartPage.module.css'

const CartPage = ({ cartItems, handleCheckout, onRemove, onIncrease, onDecrease }) => {

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.header}>Your Cart</h1>
      <Cart 
        cartItems={cartItems}
        handleCheckout={handleCheckout}
        onRemove={onRemove}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        
      />
    </div>
  );
};

export default CartPage;
