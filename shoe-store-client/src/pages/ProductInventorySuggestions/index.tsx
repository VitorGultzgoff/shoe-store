// Libs
import React, { useEffect } from "react";
import { format } from "date-fns";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";

// Components
import { ContainerLoading } from "components/ContainerLoading";
import { FlagLabel } from "components/FlagLabel";
import { NoData } from "components/NoData";
import { TableCellStyled } from "components/TableCellStyled";

// Constants
import { TIMEOUTS } from "constants/data";
import { INVENTORY_LEVELS } from "constants/inventory";

// Hooks
import { useProducts } from "hooks/useProducts";

// Icons
import UpdateIcon from "@mui/icons-material/Update";

// Utils
import { formatDecimal } from "utils/format";

export const ProductInventorySuggestions = () => {
  const theme = useTheme();
  const {
    loadingProductInventorySuggestionsData,
    updatedTime,
    startPollingProductSuggestionsData,
    stopPollingProductSuggestionsData,
    productSuggestionsData,
  } = useProducts();

  useEffect(() => {
    startPollingProductSuggestionsData(TIMEOUTS.MEDIUM);
    return function cleanup() {
      stopPollingProductSuggestionsData();
    };
  }, [startPollingProductSuggestionsData, stopPollingProductSuggestionsData]);

  return (
    <Card sx={{ my: 4 }}>
      <NoData
        show={
          !loadingProductInventorySuggestionsData &&
          (!productSuggestionsData?.productSuggestions ||
            productSuggestionsData?.productSuggestions.length <= 0)
        }
      />
      <ContainerLoading show={loadingProductInventorySuggestionsData} />
      {productSuggestionsData?.productSuggestions &&
        productSuggestionsData?.productSuggestions.length > 0 && (
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
                    <TableCellStyled>Store source</TableCellStyled>
                    <TableCellStyled>Store target</TableCellStyled>
                    <TableCellStyled>Inventory source</TableCellStyled>
                    <TableCellStyled>Inventory target</TableCellStyled>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productSuggestionsData?.productSuggestions.map(
                    (actualProductInventorySuggestion) => (
                      <TableRow hover key={actualProductInventorySuggestion.id}>
                        <TableCellStyled>
                          {
                            actualProductInventorySuggestion.suggestionSource
                              ?.product?.name
                          }
                        </TableCellStyled>
                        <TableCellStyled>
                          {
                            actualProductInventorySuggestion.suggestionSource
                              ?.store?.name
                          }
                        </TableCellStyled>
                        <TableCellStyled>
                          {
                            actualProductInventorySuggestion.suggestionTarget
                              ?.store?.name
                          }
                        </TableCellStyled>
                        <TableCellStyled>
                          <FlagLabel
                            {...INVENTORY_LEVELS.getStylesByInventoryAmount(
                              actualProductInventorySuggestion.suggestionSource
                                ?.amount,
                              theme
                            )}
                          >
                            {formatDecimal(
                              actualProductInventorySuggestion.suggestionSource
                                ?.amount
                            ) || 0}
                          </FlagLabel>
                        </TableCellStyled>
                        <TableCellStyled>
                          <FlagLabel
                            {...INVENTORY_LEVELS.getStylesByInventoryAmount(
                              actualProductInventorySuggestion.suggestionTarget
                                ?.amount,
                              theme
                            )}
                          >
                            {formatDecimal(
                              actualProductInventorySuggestion.suggestionTarget
                                ?.amount
                            ) || 0}
                          </FlagLabel>
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
