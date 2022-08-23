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
import { useProducts } from "hooks/useProducts";

// Utils
import { formatDecimal, formatPercentage } from "utils/format";

export const Products = () => {
  const theme = useTheme();
  const { productsData } = useProducts();
  console.log("productsData = ", productsData);
  return (
    <Card>
      <CardHeader title="Products data" />
      {(!productsData?.products || productsData?.products.length <= 0) && (
        <Box sx={{ my: 2, width: "100%", textAlign: "center" }}>
          <Typography color={theme.palette.text.secondary}>
            There is not data to display
          </Typography>
        </Box>
      )}
      {productsData?.products && productsData?.products.length > 0 && (
        <PerfectScrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCellStyled>Product</TableCellStyled>
                  <TableCellStyled>% of Inventory</TableCellStyled>
                  <TableCellStyled>% of Sales</TableCellStyled>
                  <TableCellStyled>Total Sales</TableCellStyled>
                  <TableCellStyled>Total Inventory</TableCellStyled>
                  <TableCellStyled>Total Stores</TableCellStyled>
                  <TableCellStyled>Inventory (low/medium/high)</TableCellStyled>
                </TableRow>
              </TableHead>
              <TableBody>
                {productsData?.products.map((actualProduct) => (
                  <TableRow hover key={actualProduct.id}>
                    <TableCellStyled>{actualProduct.name}</TableCellStyled>
                    <TableCellStyled>
                      {formatPercentage(
                        actualProduct.percentageOfInventory || 0
                      )}
                    </TableCellStyled>
                    <TableCellStyled>
                      {formatPercentage(actualProduct.percentageOfSales || 0)}
                    </TableCellStyled>
                    <TableCellStyled>
                      {formatDecimal(actualProduct.totalSales)}
                    </TableCellStyled>
                    <TableCellStyled>
                      {formatDecimal(actualProduct.totalOfInventories || 0)}
                    </TableCellStyled>
                    <TableCellStyled>
                      {formatDecimal(actualProduct.totalOfStores || 0)}
                    </TableCellStyled>
                    <TableCellStyled>
                      {actualProduct.totalOfStoresLowInventory}/
                      {actualProduct.totalOfStoresMediumInventory}/
                      {actualProduct.totalOfStoresHighInventory}
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
