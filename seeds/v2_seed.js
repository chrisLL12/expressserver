export const seed = async knex => {
    await knex('drink_description').del();
    await knex('drink_description').insert([
        {
            drink_title: 'Caramel Latte',
            drink_bio: 'The Caramel Latte is a delicious hot drink made with frothed non-fat milk that is extra foamy and flavored with a touch of caramel syrup.'
        },
        {
            drink_title: 'Iced Vanilla Coffee',
            drink_bio: 'The Iced Vanilla Coffee is a cold temperature delight. Ingredients include low fat vanilla powder and water. At only 150 calories, this is a great option for a healthy diet.'
        },
        {
            drink_title: 'Hazelnut Americano',
            drink_bio: 'The Hazelnut Americano is made with real hazelnuts! This drink captures both the hazelnut flavor and aroma. On top of that, it is made extra strong with 3 shots of espresso.'
        },
    ]);
    await knex('questions').del();
    await knex('questions').insert([
        {
            question_title: 'Is it too sweet??'
        },
        {
            question_title: 'Is this any good iced?'
        },
        {
            question_title: 'Doe hazelnut even taste good?'
        },
    ]);
};