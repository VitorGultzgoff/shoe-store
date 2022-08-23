// Libs
import { Box, Typography, useTheme } from "@mui/material";

export const NoData = ({ text = "There is not data to display", show }) => {
  const theme = useTheme();
  if (!show) return null;
  return (
    <Box sx={{ my: 2, width: "100%", textAlign: "center" }}>
      <Typography color={theme.palette.text.secondary}>{text}</Typography>
    </Box>
  );
};
