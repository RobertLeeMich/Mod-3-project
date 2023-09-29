import React from 'react';
import Cart from '../../components/Cart/Cart';

const CartPage = ({ cartItems, onRemove, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      <Cart 
        cartItems={cartItems}
        onRemove={onRemove}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

export default CartPage;
