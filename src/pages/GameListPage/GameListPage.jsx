import React, { useEffect, useState } from 'react';
import { fetchGamesByGenre, fetchGenres } from '../../utilities/games-api';

const GameListPage = () => {
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("About to fetch genres"); // Debug 1
        const data = await fetchGenres();
        console.log("Fetched genres: ", data.results); // Debug 2
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
          
          // Transform games data
          const transformedGames = data.results.map(game => {
            const { id, name, background_image, genres, released, rating } = game;
            return {
              id,
              name,
              background_image,
              genres: genres.map(genre => genre.name),
              released,
              rating
            };
          });
  
          setGames(transformedGames);
        }
      } catch (err) {
        console.error('Fetching games by genre failed:', err);
      }
    };
    fetchData();
  }, [selectedGenre]);
  

  return (
    <div>
      <div>
        <h1>Genres</h1>
        <ul>
  {games.map((game, idx) => (
    <li key={idx}>
      {game.name} - Rating: {game.rating} - Released: {game.released}
    </li>
  ))}
</ul>
      </div>
      <div>
        <h1>Games in {selectedGenre}</h1>
        <ul>
          {games.map((game, idx) => (
            <li key={idx}>{game.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameListPage;
