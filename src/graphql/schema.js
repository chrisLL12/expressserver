import { buildSchema } from "graphql";

export default buildSchema(`
    type Query {
        drinks(id: ID!): Drink
        reviews(id: ID!): Review
        currentUser: User  
    }  
    
    type Drink {
        id: ID!
        drinksName: String!
        submitter: User!
    }  
    
    type Review {
        id: ID!
        reviewsComment: String!
        submitter: User!
    }
    
    type User {
        id: ID!
        displayName: String!
        username: String!
    }
    
    type SuccessResponse {
        wasSuccessful: Boolean!
    }
    
    type Mutation {
        addDrink (drinks: DrinksInput!): Drink
        deleteDrink (id: ID!): SuccessResponse
        updateDrink (update: DrinksUpdate!): Drink
        addReview (review: ReviewsInput!): Review
        login(loginInput: LoginInput!): User
        requestPasswordReset(username: String!): SuccessResponse
        resetPassword(resetInput: PasswordResetInput!): SuccessResponse
        signup(user: UserInput!): User
    }
    
    input UserInput { 
        displayName: String!
        email: String!
        password: String!
        username: String!
    }
    
    input LoginInput { 
        username: String!
        password: String!
    } 
    
    input PasswordResetInput { 
        username: String!
        password: String!
        key: String!
    }
    
    input DrinksInput {
        drinks_name: String!
    }
    
    input ReviewsInput {
        reviews_comment: String!
    }
    
    input DrinksUpdate {
        id: ID!
        drinks_name: String
    }
`);