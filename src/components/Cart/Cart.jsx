import React from 'react';
import CartItem from '../../components/CartItem/CartItem';

const Cart = ({ cartItems, onRemove, onIncrease, onDecrease }) => {
  const subtotal = cartItems.reduce((acc, game) => acc + game.price, 0);

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
      {/* Checkout button here */}
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
