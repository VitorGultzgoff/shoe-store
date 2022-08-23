// Libs
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useQuery } from "@apollo/client";

// GraphQL
import { GET_ALL_STORE_VIEW, GET_STORE_DATA_BY_ID } from "graphql/queries";

// Types
import { IStoreDetailData, IStoresData } from "types/Queries.model";

interface IStoresContextData {
  storesData: IStoresData;
  loadingStoresData: boolean;
  updatedTime: Date;
  startPollingStoresData: (pollInterval: number) => void;
  stopPollingStoresData: () => void;

  actualStoreId: string;
  setActualStoreId: (storeId: string) => void;
  loadingStoreDetailsData: boolean;
  storeDetailsData: IStoreDetailData;
  startPollingStoreDetailsData: (pollInterval: number) => void;
  stopPollingStoreDetailsData: () => void;
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
  const [actualStoreId, setActualStoreId] = useState<string>("1");
  const {
    loading: loadingStoresData,
    data: storesData,
    startPolling: startPollingStoresData,
    stopPolling: stopPollingStoresData,
  } = useQuery(GET_ALL_STORE_VIEW);

  const {
    loading: loadingStoreDetailsData,
    data: storeDetailsData,
    startPolling: startPollingStoreDetailsData,
    stopPolling: stopPollingStoreDetailsData,
  } = useQuery(GET_STORE_DATA_BY_ID, {
    variables: { store_id: actualStoreId },
  });

  useEffect(() => {
    setUpdatedTime(new Date());
  }, [storesData, storeDetailsData]);

  const value = useMemo(
    () => ({
      storesData,
      loadingStoresData,
      updatedTime,
      startPollingStoresData,
      stopPollingStoresData,

      actualStoreId,
      setActualStoreId,
      loadingStoreDetailsData,
      storeDetailsData,
      startPollingStoreDetailsData,
      stopPollingStoreDetailsData,
    }),
    [
      storesData,
      loadingStoresData,
      updatedTime,
      startPollingStoresData,
      stopPollingStoresData,

      actualStoreId,
      setActualStoreId,
      loadingStoreDetailsData,
      storeDetailsData,
      startPollingStoreDetailsData,
      stopPollingStoreDetailsData,
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
