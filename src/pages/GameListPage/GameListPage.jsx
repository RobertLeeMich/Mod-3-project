import React, { useEffect, useState } from 'react';
import { fetchGamesByGenre, fetchAllGenres } from '../../utilities/games-api';
import Cart from '../../components/Cart/Cart'; 

const GameListPage = () => {
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [cartItems, setCartItems] = useState([]); 
  const price = 59.99

  const addToCart = (game) => {
    setCartItems(prevItems => [...prevItems, game]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllGenres();
        setGenres(data.results);
      } catch (err) {
        console.error('Fetching genres failed:', err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedGenre) {
          const data = await fetchGamesByGenre(selectedGenre);
          setGames(data.results.map(game => ({ ...game, price: 59.99 })));
        }
      } catch (err) {
        console.error('Fetching games by genre failed:', err);
      }
    };
    fetchData();
  }, [selectedGenre]);

  return (
    <div>
      <div style={{ float: 'left' }}>
        <h1>Genres</h1>
        <ul>
          {genres.map((genre, idx) => (
            <li key={idx} onClick={() => setSelectedGenre(genre.slug)}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginLeft: '200px' }}>
        <h1>Games in {selectedGenre}</h1>
        <ul>
          {games.map((game, idx) => (
            <li key={idx}>
              <h2>{game.name}</h2>
              <img src={game.background_image} alt={game.name} />
              <p>Released: {game.released}</p>
              <p>Rating: {game.rating}</p>
              <h4>${price}</h4>
              <button onClick={() => addToCart(game)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h1>Your Cart</h1>
        <Cart cartItems={cartItems} />  {/* Pass cartItems as prop */}
      </div>
    </div>
  );
};

export default GameListPage;
