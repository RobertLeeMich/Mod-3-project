import React, { useState, useEffect } from 'react';
import * as gamesAPI from '../../utilities/games-api';
import GameList from '../../components/GameList/GameList';

export default function GameListPage() {
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('action');

  useEffect(() => {
    async function getGamesAndGenres() {
      const fetchedGames = await gamesAPI.fetchGamesByGenre(selectedGenre);
      const fetchedGenres = await gamesAPI.fetchGenres();
      setGames(fetchedGames);
      setGenres(fetchedGenres);
    }
    getGamesAndGenres();
  }, [selectedGenre]);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <aside>
        {genres.map((genre, idx) => (
          <button key={idx} onClick={() => handleGenreSelect(genre)}>
            {genre}
          </button>
        ))}
      </aside>
      <main>
        <GameList games={games} />
      </main>
    </div>
  );
}
