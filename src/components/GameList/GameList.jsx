import React from 'react';

const GameList = ({ games }) => {
  return (
    <div>
      {games.map(game => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <img src={game.background_image} alt={game.name} />
          {/* Add to cart button here */}
        </div>
      ))}
    </div>
  );
};

export default GameList;
