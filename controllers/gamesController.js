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
  storeOneById(req, res, next) {
    db.findByName(req.params.id).then((games) => {
      res.locals.games = games;
      next();
    }).catch(e => (e));
  },
};
