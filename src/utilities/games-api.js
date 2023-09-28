import axios from 'axios';

export const fetchGamesByGenre = async (genre) => {
  try {
    const response = await axios.get(`/api/games/genre/${genre}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch games by genre');
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get('/api/games/genres');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch genres');
  }
};
