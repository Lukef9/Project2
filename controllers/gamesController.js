const db = require('../models/gamesModel');

module.exports = {
  storeAll(req, res, next) {
    db.findAll().then((games) => {
      res.locals.games = games;
      next();
    }).catch(e => (e));
  },
  storeOneByName(req, res, next) {
    db.findByName(req.params.name).then((games) => {
      res.locals.games = games;
      next();
    }).catch(e => (e));
  },
  save(req, res, next) {
    db.findByName(req.body).then((newGame) => {
      res.locals.games = newGame;
      next();
    }).catch(e => (e));
  },
};
