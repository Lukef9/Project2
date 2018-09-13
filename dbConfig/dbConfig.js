module.exports = process.env.DATABASE_URL || {
  port: 5432,
  host: 'localhost',
  database: 'tablegames_db',
};
