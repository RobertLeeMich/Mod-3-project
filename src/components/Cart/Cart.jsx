import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems }) => {
  return (
    <div>
      {cartItems.map(item => (
        <CartItem key={item.id} game={item} />
      ))}
      {/* Checkout button here */}
    </div>
  );
};

export default Cart;
