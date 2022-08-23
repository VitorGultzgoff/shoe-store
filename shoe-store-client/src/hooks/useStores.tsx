// Libs
import React, { createContext, useContext, useMemo } from "react";
import { FetchMoreOptions, useQuery } from "@apollo/client";

// GraphQL
import { GET_ALL_STORE_VIEW } from "graphql/queries";

// Types
import { IStoresData } from "types/Queries.model";

interface IStoresContextData {
  storesData: IStoresData;
  loadingStoresData: boolean;
  retrieveStoresData: (fetchOptions: FetchMoreOptions) => void;
}

// Context
const StoresContext = createContext<IStoresContextData>(
  {} as IStoresContextData
);

interface IUseStoresProviderProps {
  children?: React.ReactNode;
}

// Provider
const UseStoresProvider: React.FC<IUseStoresProviderProps> = ({ children }) => {
  // Context states
  const {
    loading: loadingStoresData,
    data: storesData,
    fetchMore: retrieveStoresData,
  } = useQuery(GET_ALL_STORE_VIEW);

  const value = useMemo(
    () => ({
      storesData,
      loadingStoresData,
      retrieveStoresData,
    }),
    [storesData, loadingStoresData, retrieveStoresData]
  );

  return (
    <StoresContext.Provider value={value}>{children}</StoresContext.Provider>
  );
};

// Hook
function useStores(): IStoresContextData {
  // Get data from context
  const context = useContext(StoresContext);

  // If user is not using context provider (DEV purposes only)
  if (!context)
    throw new Error("useStores must be used within a UseStoresProvider");

  return context;
}

export { UseStoresProvider, useStores };
