const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
  _id: ID!
  authors: [STRING]
  description: STRING!
  bookID: STRING!
  image: STRING
  link: STRING
  title: STRING!
  }
  
  type User {
  _id: ID!
  username: TRING!
  email: STRING!
  password: STRING!
  bookCount: INT
  savedBooks: [Book]
  }

  type Auth {
    token: ID
    user: User
  }

  type query {
  me: User
  }

  type mutation {
  addUser(username: Srting! email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  saveBook(Book: { authors: [STRING]
  description: STRING!
  bookID: STRING!
  image: STRING
  link: STRING
  title: STRING! }): User
  removeBook(bookId: String!): User
  }

`;

module.exports = typeDefs;