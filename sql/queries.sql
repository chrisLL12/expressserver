-- Two queries for drinks/rating and drinks/reviews/rating/user.

SELECT d.drinks_name, r.rating_number FROM drinks d JOIN drinks_categories dc ON d.id = dc.drinks_id JOIN rating r ON dc.rating_id = r.id;

SELECT r.reviews_comment, rt.rating_number, u.display_name, d.drinks_name FROM reviews r JOIN drinks_categories dc ON r.id = dc.reviews_id JOIN
rating rt ON dc.rating_id = rt.id JOIN users u ON dc.users_id = u.id JOIN drinks d
ON dc.drinks_id = d.id WHERE d.drinks_name = 'Caramel Latte';

