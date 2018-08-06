const db = require('../dbConfig/connection');

module.exports = {
  findAll() {
    return db.many(`
    SELECT g.*
    FROM games g;
  `);
  },
  findById(id) {
    return db.one(`
    SELECT g.*
    FROM games g
    WHERE g.game_id = $1;
    `, id);
  },
  createGame(game) {
    return db.one(`
    INSERT INTO games
    (game_name, directions, game_image, min_players, max_players, type_id)
    VALUES
    ($/game_name/, $/directions/, $/game_image/, $/min_players/, $/max_players/, $/type_id/)
    RETURNING *;
    `, game);
  },
  destroy(id) {
    return db.none(`
    DELETE FROM games
    WHERE game_id = $1;
    `, id);
  },
};
