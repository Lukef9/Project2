const express = require('express');

const gamesController = require('../controllers/gamesController');
const categoriesController = require('../controllers/categoriesController');
const viewController = require('../controllers/viewController');

const gamesRouter = express.Router();

const showJson = (req, res) => {
  res.json(res.locals.games, res.locals.categories);
};

gamesRouter.route('/:name').get(gamesController.storeOneByName, showJson);

gamesRouter.route('/')
  .get(gamesController.storeAll, categoriesController.storeAllCategories, viewController.showAll)
  .post(gamesController.save, viewController.createGame);

module.exports = gamesRouter;
