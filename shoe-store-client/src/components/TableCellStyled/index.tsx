import { TableCell } from "@mui/material";

interface ITableCellStyledProps {
  children: React.ReactNode;
}

export const TableCellStyled: React.FC<ITableCellStyledProps> = ({
  children,
}) => {
  return <TableCell sx={{ textAlign: "center" }}>{children}</TableCell>;
};
