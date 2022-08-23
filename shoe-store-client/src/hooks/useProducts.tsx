// Libs
import React, { createContext, useContext, useMemo } from "react";
import { FetchMoreOptions, useQuery } from "@apollo/client";

// GraphQL
import { GET_ALL_PRODUCT_VIEW } from "graphql/queries";

// Types
import { IProductsData } from "types/Queries.model";

interface IProductsContextData {
  productsData: IProductsData;
  loadingProductsData: boolean;
  retrieveProductsData: (fetchOptions: FetchMoreOptions) => void;
}

// Context
const ProductsContext = createContext<IProductsContextData>(
  {} as IProductsContextData
);

interface IUseProductsProviderProps {
  children?: React.ReactNode;
}

// Provider
const UseProductsProvider: React.FC<IUseProductsProviderProps> = ({
  children,
}) => {
  // Context states
  const {
    loading: loadingProductsData,
    data: productsData,
    fetchMore: retrieveProductsData,
  } = useQuery(GET_ALL_PRODUCT_VIEW);

  const value = useMemo(
    () => ({
      productsData,
      loadingProductsData,
      retrieveProductsData,
    }),
    [productsData, loadingProductsData, retrieveProductsData]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

// Hook
function useProducts(): IProductsContextData {
  // Get data from context
  const context = useContext(ProductsContext);

  // If user is not using context provider (DEV purposes only)
  if (!context)
    throw new Error("useProducts must be used within a UseProductsProvider");

  return context;
}

export { UseProductsProvider, useProducts };
