import { hashPassword } from '../auth';

export const seed = async knex => {
    await knex('users').del();
    await knex('users').insert([
        {
            display_name: 'Rufus Peterson',
            email: 'stuff@stuff.com',
            password: await hashPassword('stuffPass'),
            username: 'rufp12'
        },
        {
            display_name: 'Ronald McDonald',
            email: 'mickiedees@mc.com',
            password: await hashPassword('burgerPass'),
            username: 'Mc14'
        },
        {
            display_name: 'Jack Box',
            email: 'jack@box.com',
            password: await hashPassword('boxPass'),
            username: 'jack44'
        },
    ]);
    await knex('drinks').del();
    await knex('drinks').insert([
        {
            id: 1,
            drinks_name: 'Caramel Latte'
        },
        {
            id: 2,
            drinks_name: 'Iced Vanilla Coffee'
        },
        {
            id: 3,
            drinks_name: 'Hazelnut Americano'
        }
    ]);
    await knex('reviews').del();
    await knex('reviews').insert([
        {
            id: 1,
            title: 'Really Tasty!',
            reviews_comment: 'Really great latte! The caramel is really delicious!',
            created_by: 1,
            created_on: new Date()
        },
        {
            id: 2,
            title: 'Awesome!!',
            reviews_comment: 'Its so good iced! Promise you will not be disappointed!',
            created_by: 2,
            created_on: new Date()
        },
        {
            id: 3,
            title: 'Pretty good.',
            reviews_comment: 'Its pretty good. I give it a 4. Could have more hazelnut.!',
            created_by: 3,
            created_on: new Date()
        }
    ]);
};