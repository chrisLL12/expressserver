import { buildSchema } from "graphql";

export default buildSchema(`
    type Query {
        drinks(id: ID!): Review
        reviews(id: ID!): Drink
        currentUser: User  
    }  
    
    type Drink {
        id: ID!
        drinks_name: String!
    }  
    
    type Review {
        id: ID!
        reviews_comment: String!
        submitter: ID!
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
        addNewDrink (drink: DrinksInput!): Drink
        deleteDrink (id: ID!): SuccessResponse
        updateDrink (drink: DrinksUpdate!): Drink
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
        id: ID!
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