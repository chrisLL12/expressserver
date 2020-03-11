import knex from '../database';


// Add drink
export const addDrink = async(drink, ...categoryIds) => {
    const [drink_id] = await knex('drinks').insert(drink).returning('id');
    const categoryRecords = categoryIds.map(
        category_id => ({ drink_id, category_id })
    );
    await knex('drinks_categories').insert(categoryRecords);
    return {...drink, id: drink_id};
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

// Get review

// Update drink
export const updateDrink = (id) =>
    knex('drinks').update('drinks'.drinks_name, 'drinks'.id).where({ 'drinks.id' : id });


// Delete drink
export const deleteDrink = async id => {
    await knex('drinks')
        .del()
        .where({ 'drinks.id' : id });

    await knex('drinks_categories')
        .del()
        .where({ drinks_id : id });
};