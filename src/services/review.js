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

export const getDrink = async id =>
    await knex('drinks')
        .select('drinks.drinks_name',
            'reviews.reviews_comment')
        .join('reviews', 'drinks.id', 'reviews.id')
        .where({ 'drinks.id': id });

// Update drink
export const updateDrink = (id, drinkChange) =>
    // knex('drinks')
    //     .update({drinks_name: "Latte"}, ['id', 'drinks_name'])
    //     .where({ 'drinks.id' : id });
    knex('drinks').update(drinkChange).where({ id });


// Delete drink
export const deleteDrink = async id => {
    await knex('drinks')
        .delete()
        .where({ id });

    await knex('drinks_categories')
        .delete()
        .where({ drink_id: id });
};