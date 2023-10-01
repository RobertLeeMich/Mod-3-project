import React, { useState } from 'react'; 
import CartItem from '../../components/CartItem/CartItem';
import CheckoutModal from '../CheckoutModal/CheckoutModal';

const Cart = ({ cartItems, handleCheckout, onRemove, onIncrease, onDecrease }) => {
  

  
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false); 
  const subtotal = cartItems.reduce((acc, game) => acc + (game.price * game.quantity), 0);

  const handleConfirm = () => {
    setCheckoutModalOpen(false);
    handleCheckout(cartItems);
  };

  return (
    <div>
      {cartItems.map((item, idx) => (
        <CartItem
          key={idx}
          game={item}
          onRemove={onRemove}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
      <div>Subtotal: {subtotal.toFixed(2)}</div>
      <button onClick={() => setCheckoutModalOpen(true)}>Proceed to Checkout</button>
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        onConfirm={handleConfirm}
        cartItems={cartItems} 
      />
    </div>
  );
};

export default Cart;
