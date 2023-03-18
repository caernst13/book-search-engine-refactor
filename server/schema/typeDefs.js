const { sql } = require('apollo-server-express');

const typeDefs = gql`
  type bookSchema {
  _id: ID!
  authors: STRING
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
  savedBooks: [bookSchema]
  }
`;

module.exports = typeDefs;