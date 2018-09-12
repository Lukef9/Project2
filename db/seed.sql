INSERT INTO types (type_name)
VALUES('board'),
('card'),
('other');


INSERT INTO games (game_name, directions, game_image, min_players, max_players, type_id)
VALUES 
('sorry', 'destroy your friends','https://imgur.com/FjlONBG.jpg', 2, 4, 1),
('monopoly', 'destroy some friends','https://i.imgur.com/uot6Qgf.jpg', 2, 8, 2);

INSERT INTO categories (category_name)
VALUES
('strategy'),
('deck-building');

INSERT INTO games_categories (category_id, type_id)
VALUES
(1,1),
(2,2);
