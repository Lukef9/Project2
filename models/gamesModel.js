const db = require('../dbConfig/connection');

module.exports = {
  findAll() {
    return db.many(`
    SELECT g.*
    FROM games g
  `);
  },
  findByName(name) {
    return db.one(`
    SELECT g.*
    FROM games g
    WHERE g.game_name = $1;
    `, name);
  },
  createGame(game) {
    return db.one(`
    INSERT INTO games
    (game_name, directions, game_image, min_players, max_players, type_id)
    VALUES
    ($/game_name/, $/directions/, $/game_image/, $/min_players/, $/max_players/, $/type_id/)
    RETURNING *
    `, game);
  },
};
