// Libs
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

// Components
import { TableCellStyled } from "components/TableCellStyled";

// Types
import { ISaleData } from "types/Sale.model";

interface ILatestSalesProps {
  sales: ISaleData[];
}

export const LatestSales: React.FC<ILatestSalesProps> = ({ sales }) => {
  const theme = useTheme();
  return (
    <Card>
      <CardHeader title="Latest Sales" />
      {(!sales || sales.length <= 0) && (
        <Box sx={{ my: 2, width: "100%", textAlign: "center" }}>
          <Typography color={theme.palette.text.secondary}>
            There is not data to display
          </Typography>
        </Box>
      )}
      {sales && sales.length > 0 && (
        <PerfectScrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCellStyled>Store</TableCellStyled>
                  <TableCellStyled>Model</TableCellStyled>
                  <TableCellStyled>Inventory</TableCellStyled>
                  <TableCellStyled>Date</TableCellStyled>
                </TableRow>
              </TableHead>
              <TableBody>
                {sales.map((actualSale) => (
                  <TableRow hover key={actualSale.id}>
                    <TableCellStyled>{actualSale.store?.name}</TableCellStyled>
                    <TableCellStyled>
                      {actualSale.product?.name}
                    </TableCellStyled>
                    <TableCellStyled>{actualSale.amount}</TableCellStyled>
                    <TableCellStyled>
                      {format(new Date(actualSale.createdAt), "dd/MM HH:mm:ss")}
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
