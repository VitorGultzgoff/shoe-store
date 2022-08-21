import { gql } from "@apollo/client";

export const GET_ALL_STORES = gql`
  query {
    stores {
      name
      inventories {
        amount
        product {
          name
        }
      }
    }
  }
`;
