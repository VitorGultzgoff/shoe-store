import { gql } from "@apollo/client";

export const DASHBOARD_DATA = gql`
  query {
    totalSales
    totalStores
    totalProducts
    totalAmountInventory
    latestSales {
      id
      amount
      createdAt
      store {
        id
        name
      }
      product {
        id
        name
      }
    }
    stores {
      id
      name
      percentageOfSales
      percentageOfInventory
    }
  }
`;

export const GET_ALL_STORE_VIEW = gql`
  query {
    stores {
      id
      percentageOfInventory
      percentageOfSales
      totalOfInventories
      totalSales
      totalOfProducts
      totalOfProductsLowInventory
      totalOfProductsMediumInventory
      totalOfProductsHighInventory
      name
      inventories {
        id
        amount
        product {
          id
          name
        }
      }
    }
  }
`;

export const GET_STORE_DATA_BY_ID = gql`
  query ($store_id: ID!) {
    store(id: $store_id) {
      id
      name
      inventories {
        id
        amount
        product {
          id
          name
        }
      }
    }
  }
`;

export const GET_PRODUCT_DATA_BY_ID = gql`
  query ($product_id: ID!) {
    product(id: $product_id) {
      id
      name
      inventories {
        id
        amount
        store {
          id
          name
        }
      }
    }
  }
`;

export const GET_ALL_PRODUCT_VIEW = gql`
  query {
    products {
      id
      name
      percentageOfSales
      percentageOfInventory
      totalOfInventories
      totalSales
      totalOfStores
      totalOfStoresLowInventory
      totalOfStoresHighInventory
      totalOfStoresMediumInventory
      inventories {
        id
        store {
          id
          name
        }
      }
    }
  }
`;
