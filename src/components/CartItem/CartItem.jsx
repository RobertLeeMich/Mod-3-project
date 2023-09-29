import React from 'react';

const CartItem = ({ game, onRemoveFromCart, onChangeQuantity }) => {
  return (
    <div>
      <h3>{game.name}</h3>
      <img src={game.background_image} alt={game.name} />
      <p>Released: {game.released}</p>
      <p>Rating: {game.rating}</p>
      <button onClick={() => onRemoveFromCart(game.id)}>Remove</button>
      <button onClick={() => onChangeQuantity(game.id, -1)}>-</button>
      <span>{game.quantity}</span>
      <button onClick={() => onChangeQuantity(game.id, 1)}>+</button>
    </div>
  );
};

export default CartItem;
