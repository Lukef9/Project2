DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS types;
DROP TABLE IF EXISTS categories;

CREATE TABLE types (
type_id SERIAL PRIMARY KEY,
type_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE games (
game_id SERIAL PRIMARY KEY,
game_name VARCHAR(255) UNIQUE NOT NULL,
number_of_players VARCHAR(255) NOT NULL,
directions TEXT,
game_image TEXT,
date_added TIMESTAMP NOT NULL DEFAULT NOW(),
type_id INTEGER REFERENCES types (type_id)
);

CREATE TABLE categories (
category_id SERIAL PRIMARY KEY,
category_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE games_categories (
games_categories_id SERIAL PRIMARY KEY,
category_id INTEGER REFERENCES categories(category_id),
type_id INTEGER REFERENCES types(type_id)
);

