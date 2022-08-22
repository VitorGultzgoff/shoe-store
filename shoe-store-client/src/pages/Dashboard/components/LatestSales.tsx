// Libs
import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const sales = [
  {
    id: uuid(),
    store: "ALDO Centre Eaton",
    inventory: 30,
    model: "ELOILLAN",
    createdAt: 1555016400000,
  },
  {
    id: uuid(),
    store: "ALDO Destiny USA Mall",
    inventory: 25,
    model: "CADEVEN",
    createdAt: 1555016400000,
  },
  {
    id: uuid(),
    store: "ALDO Holyoke Mall",
    inventory: 10,
    model: "WUMA",
    createdAt: 1554930000000,
  },
  {
    id: uuid(),
    store: "ALDO Crossgates Mall",
    inventory: 96,
    model: "SODANO",
    createdAt: 1554757200000,
  },
  {
    id: uuid(),
    store: "ALDO Solomon Pond Mall",
    inventory: 32,
    model: "ADERI",
    createdAt: 1554670800000,
  },
  {
    id: uuid(),
    store: "ALDO Destiny USA Mall",
    inventory: 16,
    model: "MIRIRA",
    createdAt: 1554670800000,
  },
];

export const LatestSales = (props) => (
  <Card {...props}>
    <CardHeader title="Latest Sales" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Store</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Inventory</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales.map((actualSale) => (
              <TableRow hover key={actualSale.id}>
                <TableCell>{actualSale.store}</TableCell>
                <TableCell>{actualSale.model}</TableCell>
                <TableCell>{actualSale.inventory}</TableCell>
                <TableCell>
                  {format(actualSale.createdAt, "dd/MM hh:mm:ss")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
  </Card>
);
