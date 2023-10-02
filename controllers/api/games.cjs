const getGamesByGenre = async (req, res) => {
    try {
      const genre = req.params.genre;
      const API_KEY = process.env.API_KEY

      const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=2`);
      
      console.log(`Results: ${response.results}`);

      const games = response.data.results.map(game => ({
        id: game.id,
        name: game.name,
        background_image: game.background_image,
        genres: game.genres.map(genre => genre.name),
        released: game.released,
        rating: game.rating
      }));
  
      res.json(games);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch games' });
    }
  };
  
  module.exports = {
    getGamesByGenre
  }
