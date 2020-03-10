import { compareHashed } from '../../auth';
import { createUser } from '../services/users';
import { getUserByUsername } from "../services/users";
// import { sendResetEmail } from '../email';

const convertUserFromDatabase = user => {
    user.displayName = user.display_name;
    delete user.display_name;
    return user;
};

const resolvers = {
    addDrink: async ({ drink }, { session }) => {
        if(!session.user) throw new Error('Please login');
        drink.created_by = session.user.id;
    },

    login: async ({loginInput: {username, password}}, {session}) => {
        const user = await getUserByUsername(username);
        const matches = await compareHashed(password, user.password);
        session.user = matches ? convertUserFromDatabase(user) : null;
        return session.user;
    },

    signup: async ({ user }, { session }) => {
        session.user = convertUserFromDatabase(await createUser(user));
        return session.user;
    },

    currentUser: (args, { session }) => session.user

    // requestPasswordReset: async ({ username}) => {
    //     try {
    //         sendResetEmail(await getUserByUserName(username));
    //     } catch (err) {
    //         return { wasSuccessful : false };
    //     }
    //     return { wasSuccessful : true};
    // }
};

export default resolvers;