-- Adding seed data to tables

INSERT INTO drinks (id, drinks_name)
VALUES
(1, 'Caramel Latte'),
(2, 'Iced Vanilla Coffee'),
(3, 'Hazelnut Americano');

INSERT INTO rating (id, rating_number)
VALUES
(1, 5),
(2, 5),
(3, 4);

INSERT INTO reviews (id, title, reviews_comment, created_by, created_on)
VALUES
(1, 'Really tasty!', 'Really great latte! The caramel is really delicious!', 1, CURRENT_TIMESTAMP),
(2, 'Awesome!', 'Its so good iced! Promise you will not be disappointed!', 2, CURRENT_TIMESTAMP),
(3, 'Pretty good', 'Its pretty good. I give it a 4. Could have more hazelnut.!', 3, CURRENT_TIMESTAMP);

INSERT INTO users (id, display_name, username, created_on, last_login)
VALUES
(1, 'reSanchez', 'reSanchez12', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'EricMathews', 'eemMathews43', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'ssWilson', 'sarahwilson342', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO drinks_categories (drinks_id, rating_id, reviews_id, users_id)
VALUES
(1, 1, 1, 1), (2, 2, 2, 2), (3, 3, 3, 3);