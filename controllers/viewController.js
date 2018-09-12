module.exports = {
  showAll(req, res) {
    res.render('showAll');
  },
  showOne(req, res) {
    res.render('showOne');
  },
  createGame(req, res) {
    res.render('createForm');
  },
  updateGame(req, res) {
    res.render('updateForm');
  },
  redirectShowAll(req, res) {
    res.redirect('/games');
  },
  redirectShowOne(req, res) {
    console.log(res.locals);
    res.redirect(`/games/${res.locals.games.game_id}`);
  },
};
