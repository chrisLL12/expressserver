-- Create database of coffee reviews

CREATE TABLE drinks (
    id serial,
    drinks_name varchar(255)
);

CREATE TABLE rating (
    id serial,
    rating_number integer
);

CREATE TABLE reviews (
    id serial,
    title varchar(100),
    reviews_comment varchar(500),
    created_by integer,
    created_on timestamp
);

CREATE TABLE users (
    id serial,
    display_name varchar(100),
    username varchar(25),
    created_on timestamp,
    last_login timestamp
);

CREATE TABLE drinks_categories (
    drinks_id integer,
    rating_id integer,
    reviews_id integer,
    users_id integer
);