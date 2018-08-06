const db = require('../models/categoriesModel');

module.exports = {
  storeAllCategories(req, res, next) {
    db.findAllCategories().then((categories) => {
      res.locals.categories = categories;
      next();
    }).catch(e => (e));
  },
  storeOneCategory(req, res, next) {
    db.findCategoryById(req.params.id).then((categories) => {
      res.locals.categories = categories;
      next();
    }).catch(e => (e));
  },
};
