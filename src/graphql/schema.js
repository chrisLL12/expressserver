import { buildSchema } from "graphql";

export default buildSchema(`
    type Query {
        drinks(id: ID!): Review
        reviews(id: ID!): Drink
        drink_description(id: ID!): Description
        questions(id: ID!): Question
        currentUser: User  
    }  
    
    type Drink {
        drinks_name: String!
    }  
    
    type Review {
        id: ID!
        reviews_comment: String!
        submitter: ID!
    }
    
    type Description {
        id: ID!
        drink_title: String!
        drink_bio: String!
    }
    
    type Question { 
        question_title: String!
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
        addQuestion (question: QuestionInput!): Question
        login(loginInput: LoginInput!): User
        logout: SuccessResponse
        requestPasswordReset(username: String!): SuccessResponse
        resetPassword(resetInput: PasswordResetInput!): SuccessResponse
        signup(user: UserInput!): User
    }
    
    input QuestionInput { 
        question_title: String!
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
        drinks_name: String!
    }
    
    
`);