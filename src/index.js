import express from 'express';
import { addDrink, getDrink, updateDrink, deleteDrink } from './services/review';

const app = express();
app.use(express.json());


// Add drink route
const addDrinkRoute = async (request, response) => {
    try {
        const drink = request.body;
        const addDrink = await addDrink(drink);
        response.json(addDrink);
    } catch (err) {
        response.json({success: false});
    }
};
app.post('/api/addDrink/', addDrinkRoute);

// Get drink and review route
const getDrinkRoute = async (request, response) => {
    try {
        const { id } = await request.params || {};
        const drink = await getDrink(parseFloat(id));
        response.json(drink);
        return true;
    } catch (err) {
        response.json({success: false});
    }
    return false;
};
app.get('/api/getDrink/:id', getDrinkRoute);

// Update drink route
const updateDrinkRoute = async (request, response) => {
    try {
        const { id } = request.params || {};
        await updateDrink(parseFloat(id), request.body);
        response.json({ success: true });
        return true;
    } catch (err) {
        response.json({ success: false});
    }
    return false;
};
app.post('/api/updateDrink/:id', updateDrinkRoute);

// Delete drink route
const deleteDrinkRoute = async (request, response) => {
    const { id } = request.query || {};
    await deleteDrink(id);
    response.json({success: true});
};
app.get('/api/deleteDrink/', deleteDrinkRoute);

// Static routes
const staticRoute = express.static('public');
app.use('/static', staticRoute);
app.use('/', staticRoute);

// Listening on port 8000
app.listen(8000, () =>
    console.log(`Listening on port 8000!`));

export default app;

