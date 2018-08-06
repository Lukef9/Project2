const db = require('../dbConfig/connection');

module.exports = {
  findAllCategories() {
    return db.many(`
    SELECT *
    FROM categories c
  `);
  },
  findCategoryByName(id) {
    return db.one(`
    SELECT *
    FROM categories c
    WHERE c.category_id = $1;
    `, id);
  },
  createCategory(category) {
    return db.one(`
    INSERT INTO categories
    (category_name)
    VALUES
    ($/category_name/)
    RETURNING *
    `, category);
  },
  destroyCategory(name) {
    return db.none(`
    DELETE FROM categories
    WHERE category_name = $1;
    `, name);
  },
  updateCategory(category) {
    return db.one(`
      UPDATE categories
      SET category_name = $/category_name/
      WHERE category_git id = $/category_id/
      RETURNING *;
      `, category);
  },
};
