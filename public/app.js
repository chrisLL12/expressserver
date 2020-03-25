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

// Add question
$(document).ready(() => {
    $('#addQuestionForm').submit((e) => {
        const newQuestion = $('#addQuestion').val();
        e.preventDefault();
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `mutation { 
                    addQuestion(question:{ 
                        question_title: "${newQuestion}"
                     }) {
                        question_title
                     }
                 }`
            }),
            success: (data) => {
                $('#newQuestion-info').html('New question asked: ' + JSON.stringify(data.data.addQuestion.question_title));
            },
            error: () => {
                alert('error');
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
                        drinks_name: "${newDrink}"
                     }) {
                        drinks_name
                     }
                 }`
            }),
            success: (data) => {
                $('#newDrink-info').html('New drink added: ' + JSON.stringify(data.data.addNewDrink.drinks_name));
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
                $('#deleteDrink-info').html("Deleted!");
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
                $('#updateDrink-info').html('Updated to: ' + data.data.updateDrink.drinks_name);
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
                $('#drink-info1').html(data.data.drinks.reviews_comment);
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
                $('#drink-info2').html(data.data.drinks.reviews_comment);
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
                $('#drink-info3').html(data.data.drinks.reviews_comment);
            }

        });
    });

});

// Get drink descriptions
$(document).ready(() => {
    $('#am_bio').click(() => {
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{
                        drink_description(id: 1) {
                             drink_title
                             drink_bio
                        }
                 }`
            }),

            success: (data) => {
                $('#drink-info1').html(data.data.drink_description.drink_bio);
            }

        });
    });
    $('#l_bio').click(() => {
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{
                        drink_description(id: 2) {
                             drink_title
                             drink_bio
                        }
                 }`
            }),

            success: (data) => {
                $('#drink-info2').html(data.data.drink_description.drink_bio);
            }

        });
    });
    $('#ch_bio').click(() => {
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{
                        drink_description(id: 3) {
                             drink_title
                             drink_bio
                        }
                 }`
            }),

            success: (data) => {
                $('#drink-info3').html(data.data.drink_description.drink_bio);
            }

        });
    });

});

// Get questions
$(document).ready(() => {
    $('#am_fav').click(() => {
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{
                          questions(id:1) { 
                            question_title
                           } 
                 }`
            }),

            success: (data) => {
                $('#drink-info1').html(data.data.questions.question_title);
            }

        });
    });
    $('#l_fav').click(() => {
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{
                        questions(id:2) { 
                            question_title
                           } 
                 }`
            }),

            success: (data) => {
                $('#drink-info2').html(data.data.questions.question_title);
            }

        });
    });
    $('#ch_fav').click(() => {
        $.ajax({
            url: '/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{
                        questions(id:3) { 
                            question_title
                           } 
                 }`
            }),

            success: (data) => {
                $('#drink-info3').html(data.data.questions.question_title);
            }

        });
    });

});

// Google maps
let map;
document.addEventListener("DOMContentLoaded", () => {
    let s = document.createElement("script");
    document.head.appendChild(s);
    s.addEventListener("load", () => {
        console.log("script loaded");
        map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 33.713612,
                lng: -117.757224
            },
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    });
    s.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCKXIWTg0j2DByENAlir_kbZijHoLer2vk`;
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
















