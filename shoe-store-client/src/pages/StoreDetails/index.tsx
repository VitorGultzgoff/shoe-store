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
import { useStores } from "hooks/useStores";

// Icons
import UpdateIcon from "@mui/icons-material/Update";

// Utils
import { formatDecimal } from "utils/format";

export const StoreDetails = () => {
  const theme = useTheme();
  const {
    loadingStoreDetailsData,
    updatedTime,
    setActualStoreId,
    startPollingStoreDetailsData,
    stopPollingStoreDetailsData,
    storeDetailsData,
  } = useStores();

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    setActualStoreId(id);
  }, [id, setActualStoreId]);

  useEffect(() => {
    startPollingStoreDetailsData(100);
    return function cleanup() {
      stopPollingStoreDetailsData();
    };
  }, [startPollingStoreDetailsData, stopPollingStoreDetailsData]);

  return (
    <>
      <Card>
        <Box sx={{ ml: 2, my: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/stores">
              Stores
            </Link>
            <Typography color="text.primary">
              Shoes Inventory of {storeDetailsData?.store?.name} store
            </Typography>
          </Breadcrumbs>
        </Box>
        <NoData
          show={
            !loadingStoreDetailsData &&
            (!storeDetailsData?.store?.inventories ||
              storeDetailsData?.store?.inventories.length <= 0)
          }
        />
        <ContainerLoading show={loadingStoreDetailsData} />
        {storeDetailsData?.store?.inventories &&
          storeDetailsData?.store?.inventories.length > 0 && (
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
                    {storeDetailsData?.store?.inventories.map(
                      (actualInventory) => (
                        <TableRow hover key={actualInventory.id}>
                          <TableCellStyled>
                            {actualInventory.product?.name}
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
    </>
  );
};
