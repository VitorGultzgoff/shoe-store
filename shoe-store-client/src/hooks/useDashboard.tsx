// Libs
import React, { createContext, useContext, useMemo } from "react";
import { useQuery } from "@apollo/client";

// GraphQL
import { DASHBOARD_DATA } from "graphql/queries";

// Types
import { IDashboardData } from "types/Queries.model";

interface IDashboardContextData {
  dashboardData: IDashboardData;
  loadingDashboardData: boolean;
  startPollingDashboardData: (pollInterval: number) => void;
  stopPollingDashboardData: () => void;
}

// Context
const DashboardContext = createContext<IDashboardContextData>(
  {} as IDashboardContextData
);

interface IUseDashboardProviderProps {
  children?: React.ReactNode;
}

// Provider
const UseDashboardProvider: React.FC<IUseDashboardProviderProps> = ({
  children,
}) => {
  // Context states
  const {
    loading: loadingDashboardData,
    data: dashboardData,
    startPolling: startPollingDashboardData,
    stopPolling: stopPollingDashboardData,
  } = useQuery(DASHBOARD_DATA);

  const value = useMemo(
    () => ({
      dashboardData,
      loadingDashboardData,
      startPollingDashboardData,
      stopPollingDashboardData,
    }),
    [
      dashboardData,
      loadingDashboardData,
      startPollingDashboardData,
      stopPollingDashboardData,
    ]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

// Hook
function useDashboard(): IDashboardContextData {
  // Get data from context
  const context = useContext(DashboardContext);

  // If user is not using context provider (DEV purposes only)
  if (!context)
    throw new Error("useDashboard must be used within a UseDashboardProvider");

  return context;
}

export { UseDashboardProvider, useDashboard };
