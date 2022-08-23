// Libs
import { useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";

// Components
import { SalesAmount } from "./components/SalesAmount";
import { LatestSales } from "./components/LatestSales";
import { TotalStores } from "./components/TotalStores";
import { TotalModels } from "./components/TotalProducts";
import { TotalInventory } from "./components/TotalInventory";

// Hooks
import { useDashboard } from "hooks/useDashboard";

const Dashboard = () => {
  const { dashboardData, startPollingDashboardData, stopPollingDashboardData } =
    useDashboard();

  useEffect(() => {
    startPollingDashboardData(100);
    return function cleanup() {
      stopPollingDashboardData();
    };
  }, [startPollingDashboardData, stopPollingDashboardData]);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
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
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestSales sales={dashboardData?.latestSales} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
