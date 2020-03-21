// Login user form
$(document).ready(() => {
    $('#loginId').submit((e) => {
        const userLogIn = $('#userLogIn').val();
        const userPassword = $('#userPassword').val();
        e.preventDefault();
        $.ajax({
            url: '/api/graphql/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `mutation { 
                    login(loginInput: { 
                        username: "${userLogIn}"
                        password: "${userPassword}"
                     }) {
                        id
                        displayName
                        username
                     }
                 }`
            }),
            success: (data) => {
                alert('Signing in ' + JSON.stringify(data));
                $('#status').html("Hello " + JSON.stringify(data.data.login.username));
            },
            error: () => {
                alert('error');
            }
        });
    });
});

// Current user
$(document).ready(() => {
    $(window).on('load', () => {
        $.ajax({
            url: '/api/graphql/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `query{ 
                    currentUser{
                        id
                        displayName
                    }   
                 }`
            }),
            success: (data) => {
                $('#status').html("Hello " + JSON.stringify(data.data.currentUser.displayName));
            },
            error: () => {
                alert('error');
            }
        });
    });
});


// Signup user form
$(document).ready(() => {
    $('#signUpId').submit((e) => {
        const displayName = $('#displayName').val();
        const email = $('#email').val();
        const username = $('#username').val();
        const password = $('#passwordText').val();
        e.preventDefault();
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `mutation { 
                    signup(user:{ 
                        displayName: "${displayName}"
                        email: "${email}"
                        password: "${password}"
                        username: "${username}"
                     }) {
                        id
                        displayName
                        username
                     }
                 }`
            }),
            success: (data) => {
                alert('Welcome! ' + JSON.stringify(data));
                $('#status').html('Welcome to Coffee Reviews! ' + JSON.stringify(data.data.signup.username));
            }

        });
    });
});


// Add drink jquery
$(document).ready(() => {
    $('#addForm').submit((e) => {
        const newId = $('#addId').val();
        const newDrink = $('#addDrink').val();
        e.preventDefault();
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `mutation { 
                    addNewDrink(drink:{ 
                        id: "${newId}"
                        drinks_name: "${newDrink}"
                     }) {
                        id
                        drinks_name
                     }
                 }`
            }),
            success: (data) => {
                alert('Added! ' + JSON.stringify(data));
                $('#status').html('New drink! ' + JSON.stringify(data.data.addNewDrink.drinks_name));
            },
            error: () => {
                alert('error');
            }

        });
    });
});

// Delete Drink
$(document).ready(() => {
    $('#deleteForm').submit((e) => {
        const deleteById = $('#deleteId').val();
        e.preventDefault();
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `mutation { 
                    deleteDrink(id: "${deleteById}") { 
                        wasSuccessful
                     }
                 }`
            }),
            success: () => {
                alert(JSON.stringify({ success:true }));
                $('#status').html("Deleted!");
            },
            error: () => {
                alert('error');
            }

        });
    });
});

// Update Drink
$(document).ready(() => {
    $('#updateForm').submit((e) => {
        const updateById = $('#updateId').val();
        const drinkChange = $('#updateDrink').val();
        e.preventDefault();
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `mutation { 
                    updateDrink(drink: { 
                        id: "${updateById}"
                        drinks_name: "${drinkChange}"
                     }) { 
                        drinks_name
                      }
                 }`
            }),
            success: (data) => {
                alert(JSON.stringify({ success : true }));
                $('#status').html('Update: ' + data.data.updateDrink.drinks_name);
            },
            error: () => {
                alert('error');
            }

        });
    });
});


// Get drink reviews
$(document).ready(() => {
    $('#am').click(() => {
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{
                        drinks(id: 1) {
                            reviews_comment 
                        }
                 }`
            }),

            success: (data) => {
                alert(JSON.stringify(data));
            }

        });
    });
    $('#l').click(() => {
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{
                        drinks(id: 2) {
                            reviews_comment 
                        }
                 }`
            }),

            success: (data) => {
                alert(JSON.stringify(data));
            }

        });
    });
    $('#ch').click(() => {
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{
                        drinks(id: 3) {
                            reviews_comment 
                        }
                 }`
            }),

            success: (data) => {
                alert(JSON.stringify(data));
            }

        });
    });

});


// Open popup
const popUp = (e) => {
    e.preventDefault();
    document.querySelector('.bg-modal').style.display = 'flex';
};
// Close popup
const closePopup = () => {
    document.querySelector('.bg-modal').style.display = 'none';
};

// Popup event listeners
document.getElementById('top-button').addEventListener('click', popUp);
document.querySelector('.close').addEventListener('click', closePopup);
















