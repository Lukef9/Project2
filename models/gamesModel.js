const db = require('../dbConfig/connection');

module.exports = {
  findAll() {
    return db.many(`
    SELECT g.*, p.players_number
    FROM games g
    JOIN players p
    ON g.players_id = p.players_id;
  `);
  },
  findByName(name) {
    return db.one(`
    SELECT g.*, p.players_number
    FROM games g
    JOIN players p
    ON g.players_id = p.players_id
    WHERE g.game_name = $1;
    `, name);
  },
  findById(id) {
    return db.one(`
    SELECT g.*, p.players_number
    FROM games g
    JOIN players p
    ON g.players_id = p.players_id
    WHERE g.game_id = $1;
    `, id);
  },
};
