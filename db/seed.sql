INSERT INTO types (type_name)
VALUES('board'),
('card'),
('other');

INSERT INTO players (players_number)
VALUES(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10);

INSERT INTO games (game_name, directions, game_image, players_id, type_id)
VALUES 
('sorry', 'destroy your friends','img url', 1, 1),
('monopoly', 'destroy some friends','img url', 2, 2);

INSERT INTO categories (category_name)
VALUES
('strategy'),
('deck-building');

INSERT INTO games_categories (category_id, type_id)
VALUES
(1,1),
(2,2);
