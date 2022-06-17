import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllUsers {
      _id
      wallet_address
      createdAt
    }
  }
`;
