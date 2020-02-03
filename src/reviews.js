//Reviews data array
const reviews = [
    {
        id: 1,
        name: "Hot Americano with Hazelnut",
        rating: 5,
        featuredComment: "Really delicious! Would recommend!"
    },
    {
        id: 2,
        name: "Iced Latte",
        rating: 2,
        featuredComment: "Really great latte! A little too much foam though."
    },
    {
        id: 3,
        name: "Iced Chocolate Coffee",
        rating: 4,
        featuredComment: "Such a good drink! Just wish there was a little less chocolate."
    },
    {
        id: 4,
        name: "Double Espresso",
        rating: 5,
        featuredComment: "This espresso is really light and smooth! It's my regular drink."
    }

];

export const getReviewById = id =>
    reviews.find(review => review.id === id);




