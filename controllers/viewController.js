module.exports = {
  showAll(req, res) {
    res.render('showAll');
  },
  createGame(req, res) {
    res.render('createForm');
  },
  showOne(req, res) {
    res.render('showOne');
  },
  redirectShowAll(req, res) {
    res.redirect('/games');
  },
};
