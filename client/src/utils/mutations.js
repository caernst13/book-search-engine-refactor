import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
        _id
        }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
        token
        user {
            _id
        }
    }
    }
  }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: saveBook!) {
        saveBook($input: $input) {
            _id
            username
            email
            bookCount
            savedBooks {
                _id
                description
                title
                bookID
                image
                link
                authors
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookID: ID!) {
        removeBook(bookID: $bookID) {
            _id
            username
            email
            bookCount
            savedBooks {
                _id
                description
                title
                bookID
                image
                link
                authors
            }
        }
    }
`