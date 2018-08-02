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
};
