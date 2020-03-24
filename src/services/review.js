import knex from '../database';
import { hashPassword } from "../../auth";

// Add drink
export const addDrink = async ({ id, drinks_name }) => {
    const [drink] = await knex('drinks').insert({
        id,
        drinks_name
    }).returning(['id', 'drinks_name']);
    return drink;
};

// Add question
export const addNewQuestion = async ({ id, question_title }) => {
    const [question] = await knex('questions').insert({
        id,
        question_title
    }).returning(['id', 'question_title']);
    return question;
};

// Get drink
export const getDrink = async id => {
    await knex('drinks')
        .select('drinks.drinks_name', 'drinks.id', 'reviews.reviews_comment')
        .join('reviews', 'drinks.id', 'reviews.id')
        .where({'drinks.id': id});

};

// Get review by id
export const getReviewById = async id =>
    (await knex('reviews')
        .select()
        .where({ id }))
        [0];

// Get question by id
export const getQuestionById = async id =>
    (await knex('questions')
        .select()
        .where({ id }))
        [0];

// Get drink description by id
export const getDescriptionById = async id =>
    (await knex('drink_description')
        .select()
        .where({ id }))
        [0];

// Update drink
export const updateDrinkChange = async ({ id, drinks_name }) => {
    const [drink] = await knex('drinks').update({
        drinks_name
    }).returning(['drinks_name']).where({ id });
    return drink;
};


// Delete drink
export const deleteDrink = async id => {
    await knex('drinks')
        .del()
        .where({ 'drinks.id' : id });

    await knex('drinks_categories')
        .del()
        .where({ drinks_id : id });
};