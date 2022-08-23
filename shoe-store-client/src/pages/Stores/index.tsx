// Libs
import React from "react";
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

// Components
import { TableCellStyled } from "components/TableCellStyled";

// Hooks
import { useStores } from "hooks/useStores";

// Utils
import { formatDecimal, formatPercentage } from "utils/format";

export const Stores = () => {
  const theme = useTheme();
  const { storesData } = useStores();
  return (
    <Card>
      <CardHeader title="Stores data" />
      {(!storesData?.stores || storesData?.stores.length <= 0) && (
        <Box sx={{ my: 2, width: "100%", textAlign: "center" }}>
          <Typography color={theme.palette.text.secondary}>
            There is not data to display
          </Typography>
        </Box>
      )}
      {storesData?.stores && storesData?.stores.length > 0 && (
        <PerfectScrollbar>
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
                  <TableRow hover key={actualStore.id}>
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
                      {actualStore.totalOfProductsLowInventory}/
                      {actualStore.totalOfProductsMediumInventory}/
                      {actualStore.totalOfProductsHighInventory}
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
