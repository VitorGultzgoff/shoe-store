// Libs
import { useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { format } from "date-fns";

// Components
import { ContainerLoading } from "components/ContainerLoading";
import { NoData } from "components/NoData";
import { SalesAmount } from "./components/SalesAmount";
import { LatestSales } from "./components/LatestSales";
import { TotalStores } from "./components/TotalStores";
import { TotalModels } from "./components/TotalProducts";
import { TotalInventory } from "./components/TotalInventory";

// Constants
import { TIMEOUTS } from "constants/data";

// Hooks
import { useDashboard } from "hooks/useDashboard";

// Local imports
import { getBarChartOptions, getLineChartOptions } from "./chartOptions";
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
    startPollingDashboardData(TIMEOUTS.GENERAL);
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

  const latestSalesChartData = {
    labels: dashboardData?.latestSalesPerTime
      ? Object.keys(dashboardData?.latestSalesPerTime)?.map((actualSaleDate) =>
          format(new Date(actualSaleDate), "mm:ss")
        )
      : [],
    datasets: [
      {
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgb(53, 162, 235)",
        label: "Quantity of Sales",
        data: dashboardData?.latestSalesPerTime
          ? Object.values(dashboardData?.latestSalesPerTime)?.map(
              (actualSaleQuantity) => actualSaleQuantity
            )
          : [],
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
              {latestSalesChartData &&
                latestSalesChartData?.datasets &&
                latestSalesChartData?.labels &&
                latestSalesChartData?.labels.length > 0 &&
                latestSalesChartData?.datasets.length > 0 && (
                  <Grid item xs={12}>
                    <Line
                      data={latestSalesChartData}
                      options={getLineChartOptions({
                        title: "Latest Sales(10 minutes)",
                      })}
                      style={{ maxHeight: 400 }}
                    />
                  </Grid>
                )}
              {storesLabels && storeTotalPercentageInventoryData && (
                <Grid item xl={6} xs={12}>
                  <Bar
                    options={getBarChartOptions({
                      title: "Percentage of Inventory per store",
                    })}
                    data={percentageOfInventoryData}
                  />
                </Grid>
              )}
              {storesLabels && storeTotalPercentageSalesData && (
                <Grid item xl={6} xs={12}>
                  <Bar
                    options={getBarChartOptions({
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
