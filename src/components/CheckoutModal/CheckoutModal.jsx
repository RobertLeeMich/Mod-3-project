import React from 'react';
import styles from './CheckoutModal.module.css';

const CheckoutModal = ({ isOpen, onClose, onConfirm, cartItems }) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, game) => acc + (game.price * game.quantity), 0);

  return (
    <div className={styles['modal-backdrop']}>
      <div className={styles['modal-content']}>
        <h2>Confirm Checkout</h2>
        <div>Subtotal: {subtotal.toFixed(2)}</div>
        {/* Insert Payment Information Fields Here */}
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default CheckoutModal
