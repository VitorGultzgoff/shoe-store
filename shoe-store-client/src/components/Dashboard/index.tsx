// Libs
import { Box, Container, Grid } from "@mui/material";

// Components
import { SalesAmount } from "./components/SalesAmount";
import { LatestSales } from "./components/LatestSales";
import { TotalStores } from "./components/TotalStores";
import { DashboardLayout } from "./components/DashboardLayout";
import { TotalModels } from "./components/TotalProducts";
import { TotalInventory } from "./components/TotalInventory";

const Dashboard = () => (
  <DashboardLayout>
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
            <SalesAmount />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalStores />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalModels />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalInventory />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestSales />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </DashboardLayout>
);

export default Dashboard;
