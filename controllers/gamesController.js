const db = require('../models/gamesModel');

module.exports = {
  storeAll(req, res, next) {
    db.findAll().then((games) => {
      res.locals.games = games;
      next();
    }).catch(e => (e));
  },
  storeOneById(req, res, next) {
    db.findById(req.params.id).then((games) => {
      res.locals.games = games;
      next();
    }).catch(e => (e));
  },
  save(req, res, next) {
    db.createGame(req.body).then((newGame) => {
      res.locals.games = newGame;
      next();
    }).catch(e => (e));
  },
  destroy(req, res, next) {
    db.destroy(req.params.id).then(() => {
      next();
    }).catch(e => (e));
  },
};
