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
import { GET_ALL_STORE_VIEW } from "graphql/queries";

// Types
import { IStoresData } from "types/Queries.model";

interface IStoresContextData {
  storesData: IStoresData;
  loadingStoresData: boolean;
  retrieveStoresData: (fetchOptions: FetchMoreOptions) => void;
  updatedTime: Date;
  startPollingStoresData: (pollInterval: number) => void;
  stopPollingStoresData: () => void;
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
  const [updatedTime, setUpdatedTime] = useState<Date>(new Date());
  const {
    loading: loadingStoresData,
    data: storesData,
    fetchMore: retrieveStoresData,
    startPolling: startPollingStoresData,
    stopPolling: stopPollingStoresData,
  } = useQuery(GET_ALL_STORE_VIEW);

  useEffect(() => {
    setUpdatedTime(new Date());
  }, [storesData]);

  const value = useMemo(
    () => ({
      storesData,
      loadingStoresData,
      retrieveStoresData,
      updatedTime,
      startPollingStoresData,
      stopPollingStoresData,
    }),
    [
      storesData,
      loadingStoresData,
      retrieveStoresData,
      updatedTime,
      startPollingStoresData,
      stopPollingStoresData,
    ]
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
