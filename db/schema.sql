DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS games_categories;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS types;
DROP TABLE If EXISTS players;

CREATE TABLE types (
type_id SERIAL PRIMARY KEY,
type_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE players (
players_id SERIAL PRIMARY KEY,
players_number INTEGER NOT NULL
);

CREATE TABLE games (
game_id SERIAL PRIMARY KEY,
game_name VARCHAR(255) UNIQUE NOT NULL,
directions TEXT,
game_image TEXT,
date_added TIMESTAMP NOT NULL DEFAULT NOW(),
number_of_players INTEGER REFERENCES players (players_id) ON DELETE CASCADE,
type_id INTEGER REFERENCES types (type_id) ON DELETE CASCADE
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

