import React, { useState, useEffect } from 'react';
import styles from './CheckoutModal.module.css';

const CheckoutModal = ({ isOpen, onClose, onConfirm, cartItems }) => {
  
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    cvv: '',
    zipCode: '',
    billingAddress: ''
  });

  const [isConfirmEnabled, setConfirmEnabled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    const areAllFieldsFilled = Object.values(formData).every((field) => field.trim() !== '');
    setConfirmEnabled(areAllFieldsFilled);
  }, [formData]);

  useEffect(() => {
    const areAllFieldsFilled = Object.values(formData).every((field) => field.trim() !== '');
    const areAllNumberFieldsValid = ["cardNumber", "cvv", "zipCode"].every((key) => !isNaN(formData[key]) && formData[key].trim() !== '');
    setConfirmEnabled(areAllFieldsFilled && areAllNumberFieldsValid);
  }, [formData]);

  const subtotal = cartItems.reduce((acc, game) => acc + (game.price * game.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className={styles['modal-backdrop']}>
      <div className={styles['modal-content']}>
        <div>
          <h1>Payment Details</h1>
          Cardholder Name:{' '}
          <input className={styles.checkoutInput} name="cardholderName" value={formData.cardholderName} onChange={handleInputChange} required />
        </div>
        <div>
          Card Number:{' '}
          <input className={styles.checkoutInput} type="text" pattern="\d*" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required />
        </div>
        <div>
          CVV:{' '}
          <input className={styles.checkoutInput} type="text" pattern="\d*" name="cvv" value={formData.cvv} onChange={handleInputChange} required />
        </div>
        <div>
          Zip Code:{' '}
          <input className={styles.checkoutInput} type="text" pattern="\d*" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
        </div>
        <div>
          Billing Address:{' '}
          <input className={styles.checkoutInput} name="billingAddress" value={formData.billingAddress} onChange={handleInputChange} required />
        </div>
        <h2>Confirm Checkout</h2>
        <div>Subtotal: {subtotal.toFixed(2)}</div>
        <button
          disabled={!isConfirmEnabled}
          className={isConfirmEnabled ? styles['confirm-enabled'] : styles['confirm-disabled']}
          onClick={onConfirm}
        >
          Confirm
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default CheckoutModal;
