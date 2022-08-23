// Libs
import { useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

// Components
import { ContainerLoading } from "components/ContainerLoading";
import { NoData } from "components/NoData";
import { SalesAmount } from "./components/SalesAmount";
import { LatestSales } from "./components/LatestSales";
import { TotalStores } from "./components/TotalStores";
import { TotalModels } from "./components/TotalProducts";
import { TotalInventory } from "./components/TotalInventory";

// Hooks
import { useDashboard } from "hooks/useDashboard";

// Local imports
import { getChartOptions } from "./chartOptions";
import { theme } from "theme";

const Dashboard = () => {
  const {
    dashboardData,
    loadingDashboardData,
    startPollingDashboardData,
    stopPollingDashboardData,
  } = useDashboard();

  ChartJS.register(...registerables);

  useEffect(() => {
    startPollingDashboardData(1000);
    return function cleanup() {
      stopPollingDashboardData();
    };
  }, [startPollingDashboardData, stopPollingDashboardData]);

  const storesLabels = dashboardData?.stores?.map(
    (actualStore) => actualStore.name
  );
  const storeTotalPercentageSalesData = dashboardData?.stores.map(
    (actualStore) => actualStore.percentageOfSales
  );
  const storeTotalPercentageInventoryData = dashboardData?.stores.map(
    (actualStore) => actualStore.percentageOfInventory
  );

  const percentageOfSalesData = {
    labels: storesLabels || [],
    datasets: [
      {
        label: "Sales",
        data: storeTotalPercentageSalesData || [],
        backgroundColor: theme.palette.success.main,
      },
    ],
  };

  const percentageOfInventoryData = {
    labels: storesLabels || [],
    datasets: [
      {
        label: "Inventory",
        data: storeTotalPercentageInventoryData || [],
        backgroundColor: theme.palette.info.main,
      },
    ],
  };

  return (
    <>
      <NoData show={!loadingDashboardData && !dashboardData} />
      <ContainerLoading show={loadingDashboardData} />
      {!loadingDashboardData && dashboardData && (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 2,
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <SalesAmount amount={dashboardData?.totalSales} />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <TotalStores amount={dashboardData?.totalStores} />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <TotalModels amount={dashboardData?.totalProducts} />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <TotalInventory amount={dashboardData?.totalAmountInventory} />
              </Grid>
              {storesLabels && storeTotalPercentageInventoryData && (
                <Grid item xl={6} xs={12}>
                  <Bar
                    options={getChartOptions({
                      title: "Percentage of Inventory per store",
                    })}
                    data={percentageOfInventoryData}
                  />
                </Grid>
              )}
              {storesLabels && storeTotalPercentageSalesData && (
                <Grid item xl={6} xs={12}>
                  <Bar
                    options={getChartOptions({
                      title: "Percentage of Sales per store",
                    })}
                    data={percentageOfSalesData}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <LatestSales sales={dashboardData?.latestSales} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};

export default Dashboard;
