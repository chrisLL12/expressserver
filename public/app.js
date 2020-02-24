
const displayName = ({id, drinks_name}) => {
        alert(JSON.stringify(`${id}. ${drinks_name}`));
};

// Add drink
const alertAddDrink = async e => {
                e.preventDefault();
                const drinkId = parseForm('addForm');
                console.log(drinkId);
                const success = await new Request('/api/addDrink/', {
                        headers: {'Content-Type': 'application/json'},
                        method: 'POST',
                        body: JSON.stringify(drinkId)
                });
                if (success) {alert('Added!');}


// Get drink
const alertGetDrink = async drinkInfo => {
        try {
                const response = await fetch('/api/getDrink/' + drinkInfo);
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
const updateDrink = async drinkChange => {
        try {
             const response = await fetch('/api/updateDrink/' + drinkChange);
             const updateDrink = await response.json();
             alert(JSON.stringify(updateDrink));
             return true;

        } catch (err) {
                console.error(err);
                alert('An error has occurred.');
        }
        return false;
};

// Delete drink
const deleteDrink = async e => {
        e.preventDefault();
        const {id} = parseForm('deleteForm'), wasSuccess = await new Request('/api/deleteDrink?id=' + id);
        if (wasSuccess) alert('Deleted!');
};



/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

const parseField = (formId, fieldName) => {
        const inputSelector = `#${formId} [name="${fieldName}"]`;
        const input = document.querySelector(inputSelector);
        return input.value || input.placeholder;
};


const fields = ['id', 'drinks_name'];

// Drink object
const parseForm = formId => {
        const drink = fields.reduce((drink, field) => {
                drink[field] = parseField(formId, field); // eg. joke.id = "5"
                return drink;
        }, {});
        drink.id = parseFloat(drink.id);
        return drink;
};


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


// Event listeners
document.getElementById('addForm').addEventListener('submit', alertAddDrink);

document.getElementById('am').addEventListener('click', () => alertGetDrink(1));

document.getElementById('l').addEventListener('click', () => alertGetDrink(2));
document.getElementById('ch').addEventListener('click', () => alertGetDrink(3));
document.getElementById('es').addEventListener('click', () => alertGetDrink(4));

document.getElementById('up').addEventListener('click', () => updateDrink(1));
document.getElementById('deleteForm').addEventListener('submit', deleteDrink);














