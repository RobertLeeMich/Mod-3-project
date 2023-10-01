import React from 'react';
import Cart from '../../components/Cart/Cart';

const CartPage = ({ cartItems, handleCheckout, onRemove, onIncrease, onDecrease }) => {
  console.log(cartItems, handleCheckout, onRemove, onIncrease, onDecrease);

  return (
    <div>
      <h1>Your Cart</h1>
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
