import React from 'react';

const CartItem = ({ game }) => {
  return (
    <div>
      <h3>{game.name}</h3>
      {/* Remove from cart button here */}
    </div>
  );
};

export default CartItem;
