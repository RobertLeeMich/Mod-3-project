import React from "react";
import styles from './CartItem.module.css'

const CartItem = ({ game, onRemove, onIncrease, onDecrease }) => {
  return (
    <div>
      <h3>{game.name}</h3>
      <img className={styles.cartItemImage} src={game.background_image} alt={game.name} />
      <p>Released: {game.released}</p>
      <p>Rating: {game.rating}</p>
      <button onClick={() => onRemove(game.id)}>Remove</button>
      <button onClick={() => onDecrease(game.id)}>-</button>
      <span>{game.quantity}</span>
      <button onClick={() => onIncrease(game.id)}>+</button>
    </div>
  );
};

export default CartItem;
