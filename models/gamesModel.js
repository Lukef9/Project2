const db = require('../dbConfig/connection');

module.exports = {
  findAll() {
    return db.many(`
    SELECT *
    FROM games;
  `);
  },
};
