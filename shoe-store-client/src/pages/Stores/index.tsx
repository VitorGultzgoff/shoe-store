// Libs
import React, { useEffect } from "react";
import { format } from "date-fns";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Components
import { ContainerLoading } from "components/ContainerLoading";
import { FlagLabel } from "components/FlagLabel";
import { NoData } from "components/NoData";
import { TableCellStyled } from "components/TableCellStyled";

// Hooks
import { useStores } from "hooks/useStores";

// Icons
import UpdateIcon from "@mui/icons-material/Update";

// Utils
import { formatDecimal, formatPercentage } from "utils/format";

export const Stores = () => {
  const theme = useTheme();
  const {
    loadingStoresData,
    storesData,
    updatedTime,
    startPollingStoresData,
    stopPollingStoresData,
  } = useStores();

  const navigate = useNavigate();

  useEffect(() => {
    startPollingStoresData(1000);
    return function cleanup() {
      stopPollingStoresData();
    };
  }, [startPollingStoresData, stopPollingStoresData]);

  return (
    <Card>
      <CardHeader title="Stores data" />
      <NoData
        show={
          !loadingStoresData &&
          (!storesData?.stores || storesData?.stores.length <= 0)
        }
      />
      <ContainerLoading show={loadingStoresData} />
      {storesData?.stores && storesData?.stores.length > 0 && (
        <PerfectScrollbar>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              width: "100%",
              justifyContent: "center",
              my: 2,
            }}
          >
            <UpdateIcon
              fontSize="large"
              sx={{
                color: theme.palette.info.main,
                mr: 1,
              }}
            />
            <Typography color={theme.palette.text.primary}>
              Updated at {format(updatedTime, "dd/MM - HH:mm:ss")}
            </Typography>
          </Box>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCellStyled>Store</TableCellStyled>
                  <TableCellStyled>% of Inventory</TableCellStyled>
                  <TableCellStyled>% of Sales</TableCellStyled>
                  <TableCellStyled>Total Sales</TableCellStyled>
                  <TableCellStyled>Total Inventory</TableCellStyled>
                  <TableCellStyled>Total Models</TableCellStyled>
                  <TableCellStyled>Inventory (low/medium/high)</TableCellStyled>
                </TableRow>
              </TableHead>
              <TableBody>
                {storesData?.stores.map((actualStore) => (
                  <TableRow
                    hover
                    key={actualStore.id}
                    onClick={() => navigate(`/stores/${actualStore.id}`)}
                  >
                    <TableCellStyled>{actualStore.name}</TableCellStyled>
                    <TableCellStyled>
                      {formatPercentage(actualStore.percentageOfInventory || 0)}
                    </TableCellStyled>
                    <TableCellStyled>
                      {formatPercentage(actualStore.percentageOfSales || 0)}
                    </TableCellStyled>
                    <TableCellStyled>
                      {formatDecimal(actualStore.totalSales)}
                    </TableCellStyled>
                    <TableCellStyled>
                      {formatDecimal(actualStore.totalOfInventories || 0)}
                    </TableCellStyled>
                    <TableCellStyled>
                      {formatDecimal(actualStore.totalOfProducts || 0)}
                    </TableCellStyled>
                    <TableCellStyled>
                      <FlagLabel
                        color="#fff"
                        bgColor={theme.palette.error.main}
                        otherStyles={{ marginRight: 8 }}
                      >
                        {actualStore.totalOfProductsLowInventory}
                      </FlagLabel>
                      <FlagLabel
                        bgColor={theme.palette.grey.A400}
                        otherStyles={{ marginRight: 8 }}
                      >
                        {actualStore.totalOfProductsMediumInventory}
                      </FlagLabel>
                      <FlagLabel bgColor={theme.palette.success.light}>
                        {actualStore.totalOfProductsHighInventory}
                      </FlagLabel>
                    </TableCellStyled>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      )}
    </Card>
  );
};
