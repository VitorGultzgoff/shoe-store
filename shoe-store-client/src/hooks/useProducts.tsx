// Libs
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FetchMoreOptions, useQuery } from "@apollo/client";

// GraphQL
import { GET_ALL_PRODUCT_VIEW } from "graphql/queries";

// Types
import { IProductsData } from "types/Queries.model";

interface IProductsContextData {
  productsData: IProductsData;
  loadingProductsData: boolean;
  retrieveProductsData: (fetchOptions: FetchMoreOptions) => void;
  updatedTime: Date;
  startPollingProductsData: (pollInterval: number) => void;
  stopPollingProductsData: () => void;
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
  const [updatedTime, setUpdatedTime] = useState<Date>(new Date());
  const {
    loading: loadingProductsData,
    data: productsData,
    fetchMore: retrieveProductsData,
    startPolling: startPollingProductsData,
    stopPolling: stopPollingProductsData,
  } = useQuery(GET_ALL_PRODUCT_VIEW);

  useEffect(() => {
    setUpdatedTime(new Date());
  }, [productsData]);

  const value = useMemo(
    () => ({
      productsData,
      loadingProductsData,
      retrieveProductsData,
      updatedTime,
      startPollingProductsData,
      stopPollingProductsData,
    }),
    [
      productsData,
      loadingProductsData,
      retrieveProductsData,
      updatedTime,
      startPollingProductsData,
      stopPollingProductsData,
    ]
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
