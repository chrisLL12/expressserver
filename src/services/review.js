import knex from '../database';
import { hashPassword } from "../../auth";


// Add drink
// export const addDrink = async(drink, ...categoryIds) => {
//     const [drink_id] = await knex('drinks').insert(drink).returning('id');
//     const categoryRecords = categoryIds.map(
//         category_id => ({ drink_id, category_id })
//     );
//     await knex('drinks_categories').insert(categoryRecords);
//     return {...drink, id: drink_id};
// };

// Add drink
export const addDrink = async ({ id, drinks_name }) => {
    const [drink] = await knex('drinks').insert({
        id,
        drinks_name
    }).returning(['id', 'drinks_name']);
    return drink;
};

// Get drink
export const getDrink = async id => {
    //const drinks =
    await knex('drinks')
        .select('drinks.drinks_name', "drinks.id", "reviews.reviews_comment")
        .join('reviews', 'drinks.id', 'reviews.id')
        .where({'drinks.id': id});

    //return drinks[0] || null;
};

// Get review by id
export const getReviewById = async id =>
    (await knex('reviews')
        .select()
        .where({ id }))
        [0];


// Update drink
export const updateDrinkChange = (id, drinks_name) =>
    knex('drinks').update(drinks_name).where({ id });


// Delete drink
export const deleteDrink = async id => {
    await knex('drinks')
        .del()
        .where({ 'drinks.id' : id });

    await knex('drinks_categories')
        .del()
        .where({ drinks_id : id });
};