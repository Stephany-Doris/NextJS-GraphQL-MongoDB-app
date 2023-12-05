import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query getUsers {
    users {
      id
      age
      email
      first_name
      last_name
      active
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($input: NewUserInput!) {
    createUser(input: $input) {
      active
      age
      email
      first_name
      id
      last_name
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      active
      age
      email
      id
      first_name
      last_name
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId)
  }
`;
