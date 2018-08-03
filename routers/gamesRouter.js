const express = require('express');

const gamesController = require('../controllers/gamesController');
const viewController = require('../controllers/viewController');

const gamesRouter = express.Router();

const showJson = (req, res) => {
  res.json(res.locals.games);
};

gamesRouter.route('/').get(gamesController.storeAll, viewController.showAll);

module.exports = gamesRouter;
