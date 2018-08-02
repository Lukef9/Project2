const express = require('express');

const gamesController = require('../controllers/gamesController');

const gamesRouter = express.Router();

const showJson = (req, res) => {
  res.json(res.locals.games);
};

gamesRouter.route('/').get(gamesController.storeAll, showJson);

module.exports = gamesRouter;
