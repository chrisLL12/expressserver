import knex from '../database';

// Add drink
export const addDrink = async (drink, ...categoryIds) => {
    const [drink_id] = await knex('drinks').insert(drink).returning('id');
    const categoryRecords = categoryIds.map(
        category_id => ({ drink_id, category_id })
    );
    await knex('drinks_categories').insert(categoryRecords);
    return {...drink, id: drink_id};
};

// Get drink and review
export const getDrink= async id => {
    await knex('drinks')
        .select('drinks.drinks_name',
                'reviews.reviews_comment')
        .join('reviews', 'drinks.id', 'reviews.id');
};

// Update drink
export const updateDrink = (id, drinkUpdate) =>
    knex('drinks')
        .update(drinkUpdate)
        .where({ id });

// Delete drink
export const deleteDrink = async id => {
    await knex('drinks')
        .delete()
        .where({ id });

    await knex('drinks_categories')
        .delete()
        .where({ drink_id: id });
};