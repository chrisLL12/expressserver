import knex from '../database';
import { hashPassword } from "../../auth";

export const getUserByUsername = async username =>
    (await knex('users')
        .select()
        .where({ username }))
        [0];

export const createUser = async ({ username, displayName, email, password }) => {
    const [user] = await knex('users').insert({
        username,
        email,
        display_name: displayName,
        password: await hashPassword(password)
    }).returning(['id', 'email', 'username','display_name', 'password']);
    return user;
};