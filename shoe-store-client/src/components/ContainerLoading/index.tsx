// Libs
import { Box, CircularProgress } from "@mui/material";

export const ContainerLoading = ({ show }) => {
  if (!show) return null;
  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
      <CircularProgress />
    </Box>
  );
};
