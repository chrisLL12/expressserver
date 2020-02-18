import express from 'express';
import { addDrink, getDrink, updateDrink, deleteDrink } from './services/review';

const app = express();
app.use(express.json());

// Add drink route
const addDrinkRoute = async (request, response) => {
    const drink = request.body;
    await addDrink(drink);
    response.json({ success: true });
};
app.post('/api/addDrink', addDrinkRoute);

// Get drink and review route
const getDrinkRoute = async (request, response) => {
    try {
        const { id } = await request.params || {};
        await getDrink(parseFloat(id));
        response.json({ success: true });
        return true;
    } catch (err) {
        response.json({ success: false })
    }
    return false;
};
app.get('/api/getDrink', getDrinkRoute);

// Update drink route
const updateDrinkRoute = async (request, response) => {
    const { id } = request.params || {};
    await updateDrink(parseFloat(id));
    response.json({success: true});
};
app.get('/api/updateDrink', updateDrinkRoute);

// Delete drink route
const deleteDrinkRoute = async (request, response) => {
    const { id } = request.params || {};
    await deleteDrink(parseFloat(id));
    response.json({success: true});
};
app.get('/api/deleteDrink', deleteDrinkRoute);



const staticRoute = express.static('public');
app.use('/static', staticRoute);
app.use('/', staticRoute);


app.listen(8000, console.log('Listening on port 8000'));

export default app;

