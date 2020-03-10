import express from 'express';
import graphqlHTTP from 'express-graphql';
import session from 'express-session';
import ConnectSessionKnex from 'connect-session-knex';
//import { addDrink, getDrink, updateDrink, deleteDrink } from './services/review';

import resolvers from './graphql/resolvers';
import schema from "./graphql/schema";
import knex from './database';

const env = process.env.NODE_ENV || 'development';

const app = express();
app.use(express.json());

// Global Error Handler
if (!['development', 'test'].includes(env)) {
    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(500).send();
    });
}

const ONE_MONTH = 7 * 24 * 60 * 60 * 1000;
const KnexSessionStore = ConnectSessionKnex(session);
app.use(session({
    store: new KnexSessionStore({ knex }),
    secret: 'kjhfdshdfdguy34873bhdf8743hre',
    cookie: { maxAge: ONE_MONTH }
}));

app.use('/api/graphql/', graphqlHTTP({
    schema ,
    rootValue: resolvers,
    graphiql: env === 'development'
}));

// // Add drink route
// const addDrinkRoute = async (request, response) => {
//     try {
//         const drink = request.body;
//         const addDrink = await addDrink(drink);
//         response.json(addDrink);
//     } catch (err) {
//         response.json({success: false});
//     }
// };
// app.post('/api/addDrink/', addDrinkRoute);
//
// // Get drink and review route
// const getDrinkRoute = async (request, response) => {
//     try {
//         const { id } = await request.params || {};
//         const drink = await getDrink(parseFloat(id));
//         response.json(drink);
//         return true;
//     } catch (err) {
//         response.json({success: false});
//     }
//     return false;
// };
// app.get('/api/getDrink/:id', getDrinkRoute);
//
// // Update drink route
// const updateDrinkRoute = async (request, response) => {
//     try {
//         const { id } = request.params || {};
//         await updateDrink(parseFloat(id), request.body);
//         response.json({ success: true });
//         return true;
//     } catch (err) {
//         response.json({ success: false});
//     }
//     return false;
// };
// app.post('/api/updateDrink/:id', updateDrinkRoute);
//
// // Delete drink route
// const deleteDrinkRoute = async (request, response) => {
//     const { id } = request.query || {};
//     await deleteDrink(id);
//     response.json({success: true});
// };
// app.get('/api/deleteDrink/', deleteDrinkRoute);

// Static routes
const staticRoute = express.static('public');
app.use('/static', staticRoute);
app.use('/', staticRoute);

// Listening on port 8000
app.listen(8000, () =>
    console.log(`Listening on port 8000!`));

export default app;

