// Alert review titles, comments, and username's to the screen
const displayName = ({title, reviews_comment, display_name}) => {
        alert(JSON.stringify(`${title} | COMMENT: ${reviews_comment} | WRITTEN BY: ${display_name}`));
};

// Alert the added drink's id and name to the screen
const displayCreate = ({id, drinks_name}) => {
    alert(JSON.stringify(`${id}. ${drinks_name} added!`));
};

// Add drink
const alertAddDrink = async e => {
    const drinkId = parseForm('addForm');
    e.preventDefault();
    console.log(drinkId);
    const success = await new Request('/api/addDrink/', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(drinkId)
    });
    if (success) {
        displayCreate(drinkId);
    }
};

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
const updateDrink = async (id, drinksChange) => {
        try {
             //drinks_name = parseForm('updateForm');
             const response = await fetch('/api/updateDrink/' + id, {
                 method: 'POST',
                 body: JSON.stringify(drinksChange),
                 headers: {'Content-Type': 'application/json'}
             });
             if (response) {
                alert(JSON.stringify({success:true}));
             }

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
    if (wasSuccess) alert(JSON.stringify({success:true}));
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// Parse field
const parseField = (formId, fieldName) => {
        const inputSelector = `#${formId} [name="${fieldName}"]`;
        const input = document.querySelector(inputSelector);
        return input.value || input.placeholder;
};

const fields = ['id', 'drinks_name'];

// Turns drink to object
const parseForm = formId => {
        const drink = fields.reduce((drink, field) => {
                drink[field] = parseField(formId, field);
                return drink;
        }, {});
        drink.id = parseFloat(drink.id);
        return drink;
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// Event listeners
const form = document.getElementById('addForm');
form.addEventListener('submit', alertAddDrink);

document.getElementById('am').addEventListener('click', () => alertGetDrink(1));
document.getElementById('l').addEventListener('click', () => alertGetDrink(2));
document.getElementById('ch').addEventListener('click', () => alertGetDrink(3));

const updateForm = document.getElementById('updateForm');
updateForm.addEventListener('submit', updateDrink);

const deleteForm = document.getElementById('deleteForm');
deleteForm.addEventListener('submit', deleteDrink);















