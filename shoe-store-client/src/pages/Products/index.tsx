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
import { useProducts } from "hooks/useProducts";

// Icons
import UpdateIcon from "@mui/icons-material/Update";

// Utils
import { formatDecimal, formatPercentage } from "utils/format";

export const Products = () => {
  const theme = useTheme();
  const {
    loadingProductsData,
    productsData,
    updatedTime,
    startPollingProductsData,
    stopPollingProductsData,
  } = useProducts();

  const navigate = useNavigate();

  useEffect(() => {
    startPollingProductsData(100);
    return function cleanup() {
      stopPollingProductsData();
    };
  }, [startPollingProductsData, stopPollingProductsData]);

  return (
    <Card>
      <CardHeader title="Models data" />

      <NoData
        show={
          !loadingProductsData &&
          (!productsData?.products || productsData?.products.length <= 0)
        }
      />
      <ContainerLoading show={loadingProductsData} />
      {productsData?.products && productsData?.products.length > 0 && (
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
                  <TableRow
                    hover
                    key={actualProduct.id}
                    onClick={() => navigate(`/models/${actualProduct.id}`)}
                  >
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
                      <FlagLabel
                        color="#fff"
                        bgColor={theme.palette.error.main}
                        otherStyles={{ marginRight: 8 }}
                      >
                        {actualProduct.totalOfStoresLowInventory}
                      </FlagLabel>
                      <FlagLabel
                        bgColor={theme.palette.grey.A400}
                        otherStyles={{ marginRight: 8 }}
                      >
                        {actualProduct.totalOfStoresMediumInventory}
                      </FlagLabel>
                      <FlagLabel bgColor={theme.palette.success.light}>
                        {actualProduct.totalOfStoresHighInventory}
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
