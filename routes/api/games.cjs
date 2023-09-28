const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = process.env.API_KEY;

router.get('/genres', async (req, res) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=2`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/genre/:genre', async (req, res) => {
  try {
    const genre = req.params.genre;
    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=2/${genre}`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
