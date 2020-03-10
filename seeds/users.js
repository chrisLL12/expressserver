import { hashPassword } from '../auth';

export const seed = async knex => {
    await knex('users').truncate();
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
};