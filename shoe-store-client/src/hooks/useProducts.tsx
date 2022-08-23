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
import { GET_ALL_PRODUCT_VIEW, GET_PRODUCT_DATA_BY_ID } from "graphql/queries";

// Types
import { IProductDetailData, IProductsData } from "types/Queries.model";

interface IProductsContextData {
  productsData: IProductsData;
  loadingProductsData: boolean;
  updatedTime: Date;
  startPollingProductsData: (pollInterval: number) => void;
  stopPollingProductsData: () => void;

  actualProductId: string;
  setActualProductId: (productId: string) => void;
  loadingProductDetailsData: boolean;
  productDetailsData: IProductDetailData;
  startPollingProductDetailsData: (pollInterval: number) => void;
  stopPollingProductDetailsData: () => void;
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
  const [actualProductId, setActualProductId] = useState<string>("1");
  const [updatedTime, setUpdatedTime] = useState<Date>(new Date());
  const {
    loading: loadingProductsData,
    data: productsData,
    startPolling: startPollingProductsData,
    stopPolling: stopPollingProductsData,
  } = useQuery(GET_ALL_PRODUCT_VIEW);

  const {
    loading: loadingProductDetailsData,
    data: productDetailsData,
    startPolling: startPollingProductDetailsData,
    stopPolling: stopPollingProductDetailsData,
  } = useQuery(GET_PRODUCT_DATA_BY_ID, {
    variables: { product_id: actualProductId },
  });

  useEffect(() => {
    setUpdatedTime(new Date());
  }, [productsData, productDetailsData]);

  const value = useMemo(
    () => ({
      productsData,
      loadingProductsData,
      updatedTime,
      startPollingProductsData,
      stopPollingProductsData,

      actualProductId,
      setActualProductId,
      loadingProductDetailsData,
      productDetailsData,
      startPollingProductDetailsData,
      stopPollingProductDetailsData,
    }),
    [
      productsData,
      loadingProductsData,
      updatedTime,
      startPollingProductsData,
      stopPollingProductsData,

      actualProductId,
      setActualProductId,
      loadingProductDetailsData,
      productDetailsData,
      startPollingProductDetailsData,
      stopPollingProductDetailsData,
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
