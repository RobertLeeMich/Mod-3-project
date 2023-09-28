import axios from 'axios';

export const fetchGamesByGenre = async (genre) => {
  const response = await axios.get(`/api/games/genre/${genre}`);
  return response.data;
};

export const fetchGenres = async () => {
  const response = await axios.get('/api/games/genres');
  return response.data;
};
