import express from 'express';
import { getReviewById } from './reviews';

const app = express();

const reviewRoute = (request, response) => {
    const { id } = request.params || {};
    const reviewData = getReviewById(parseFloat(id));
    response.json(reviewData);
};
app.get('/api/reviewData/:id', reviewRoute);

const staticRoute = express.static('public');
app.use('/static', staticRoute);
app.use('/', staticRoute);


app.listen(8000, console.log('Listening on port 8000'));

export default app;

