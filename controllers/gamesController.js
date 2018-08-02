const db = require('../models/gamesModel');

module.exports = {
  storeAll(req, res, next) {
    db.findAll().then((games) => {
      res.locals.games = games;
      next();
    }).catch(e => (e));
  },
};
