import { compareHashed } from '../../auth';
import { createUser } from '../services/users';
import { getUserByUsername } from "../services/users";
import { deleteDrink } from "../services/review";
import { getReviewById } from "../services/review";
import { addDrink } from "../services/review";
import { updateDrinkChange } from "../services/review";
import { getDescriptionById } from "../services/review";
import { addNewQuestion } from "../services/review";
import { getQuestionById } from "../services/review";
// import { sendResetEmail } from '../email';

const convertUserFromDatabase = user => {
    user.displayName = user.display_name;
    delete user.display_name;
    return user;
};

const resolvers = {
    // addDrink: async ({ drink }, { session }) => {
    //     if(!session.user) throw new Error('Please login');
    //     drink.created_by = session.user.id;
    // },

    // Add drink
    addNewDrink: async ({ drink }) => await addDrink(drink),

    // Update Drink
    updateDrink: async ({ drink }) => await updateDrinkChange(drink),

    // Delete Drink
    deleteDrink: async ({ id }) => await deleteDrink(id),


    // Resolve review by id
    drinks: async ({ id }) => await getReviewById(id),

    // Resolve drink description by id
    drink_description: async ({ id }) => await getDescriptionById(id),

    // Resolve add question
    addQuestion: async ({ question }) => await addNewQuestion(question),

    // Resolve get question
    questions: async ({ id }) => await getQuestionById(id),

    // User login
    login: async ({loginInput: {username, password}}, {session}) => {
        const user = await getUserByUsername(username);
        const matches = await compareHashed(password, user.password);
        session.user = matches ? convertUserFromDatabase(user) : null;
        return session.user;
    },

    // User logout. Delete user session and return boolean
    logout: async (args, {session}) => {
        delete session.user;
        return { wasSuccessful : true };
    },

    // User signup
    signup: async ({ user }, { session }) => {
        session.user = convertUserFromDatabase(await createUser(user));
        return session.user;
    },

    // Current user logged in
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