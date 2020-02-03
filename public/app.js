const printRating = ({ name, rating, featuredComment }) => {
        if (rating >= 5) {
                let el = document.querySelector('#p');
                el.textContent = (` Excellent Choice! Drink: ${name}. Rating: ${rating}/5. Featured Review: ${featuredComment}`);
        } else if (rating === 4) {
                let el = document.querySelector('#p');
                el.textContent = (`Great Pick! Drink: ${name}. Rating: ${rating}/5. Featured Review: ${featuredComment}`);
        } else if (rating === 3) {
                let el = document.querySelector('#p');
                el.textContent = (`Okay choice! Drink: ${name}. Rating: ${rating}/5. Featured Review: ${featuredComment}`);
        } else if (rating <= 2) {
                let el = document.querySelector('#p');
                el.textContent = (`Maybe try a different drink? Drink: ${name}. Rating: ${rating}/5. Featured Review: ${featuredComment}`);
        } else {
                return "Try a drink!";
        }
};

const showRating = async reviewDataId => {
        const response = await fetch ('/api/reviewData/' + reviewDataId);
        const ratings = await response.json();
        printRating(ratings);
};





