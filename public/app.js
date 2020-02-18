const displayName = ({id, drinks_name, reviews_comment}) =>
        alert(`${id}. ${drinks_name}. ${reviews_comment}`);


// Add drink
const alertAddDrink = async addDrinkInfo => {
        const response = await fetch('/api/addDrink' + addDrinkInfo);
        const drink = await response.json();
        displayName(drink);
};

// Get drink
const alertGetDrink = async drinkInfo => {
        try {
        const response = await fetch('/api/getDrink' + drinkInfo);
        const drink = await response.json();
        displayName(drink);
        return true;

        } catch (err) {
                console.error(err);
                alert('An error has occurred.');
        }
        return false;
};

// Update drink
const updateDrink = async updateInfo => {
        const response = await fetch('/api/updateDrink' + updateInfo);
        const drinkChange = await response.json();
        displayName(drinkChange);
};

// Delete drink
const deleteDrink = async deleteInfo => {
        const response = await fetch('/api/deleteDrink' + deleteInfo);
        const deleteChange = await response.json();
        displayName(deleteChange);
};


// Event listeners
document.getElementById('addForm').addEventListener('submit');












