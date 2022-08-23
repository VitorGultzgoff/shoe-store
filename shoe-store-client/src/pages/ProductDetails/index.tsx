// Libs
import React, { useEffect } from "react";
import { format } from "date-fns";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Breadcrumbs,
  Card,
  Link,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";

// Components
import { ContainerLoading } from "components/ContainerLoading";
import { NoData } from "components/NoData";
import { TableCellStyled } from "components/TableCellStyled";

// Hooks
import { useProducts } from "hooks/useProducts";

// Icons
import UpdateIcon from "@mui/icons-material/Update";

// Utils
import { formatDecimal } from "utils/format";

export const ProductDetails = () => {
  const theme = useTheme();
  const {
    loadingProductDetailsData,
    updatedTime,
    setActualProductId,
    startPollingProductDetailsData,
    stopPollingProductDetailsData,
    productDetailsData,
  } = useProducts();

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    setActualProductId(id);
  }, [id, setActualProductId]);

  useEffect(() => {
    startPollingProductDetailsData(100);
    return function cleanup() {
      stopPollingProductDetailsData();
    };
  }, [startPollingProductDetailsData, stopPollingProductDetailsData]);

  return (
    <Card>
      <Box sx={{ ml: 2, my: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/models">
            Models
          </Link>
          <Typography color="text.primary">
            Shoes Inventory of {productDetailsData?.product?.name} model
          </Typography>
        </Breadcrumbs>
      </Box>
      <NoData
        show={
          !loadingProductDetailsData &&
          (!productDetailsData?.product?.inventories ||
            productDetailsData?.product?.inventories.length <= 0)
        }
      />
      <ContainerLoading show={loadingProductDetailsData} />
      {productDetailsData?.product?.inventories &&
        productDetailsData?.product?.inventories.length > 0 && (
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
                    <TableCellStyled>Model</TableCellStyled>
                    <TableCellStyled>Inventory</TableCellStyled>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productDetailsData?.product?.inventories.map(
                    (actualInventory) => (
                      <TableRow hover key={actualInventory.id}>
                        <TableCellStyled>
                          {actualInventory.store?.name}
                        </TableCellStyled>
                        <TableCellStyled>
                          {formatDecimal(actualInventory.amount) || 0}
                        </TableCellStyled>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </Box>
          </PerfectScrollbar>
        )}
    </Card>
  );
};
