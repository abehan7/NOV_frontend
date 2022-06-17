import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser($wallet_address: String!) {
    createUser(wallet_address: $wallet_address) {
      _id
      createdAt
    }
  }
`;
// mutation Mutation($wallet_address: String!) {
//   createUser(wallet_address: $walletAddress) {
//     wallet_address
//     _id
//     createdAt
//   }
// }
