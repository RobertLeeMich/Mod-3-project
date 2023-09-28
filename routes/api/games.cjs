const express = require('express');
const router = express.Router();
const gamesController = require('../../controllers/api/games.cjs');

router.get('/genre/:genre', gamesController.getGamesByGenre);

module.exports = router;
