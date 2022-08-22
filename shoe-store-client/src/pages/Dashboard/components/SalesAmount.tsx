// Libs
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

// Icons
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

export const SalesAmount = (props) => {
  const {
    palette: { success, text },
  } = useTheme();

  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color={text.secondary} gutterBottom variant="overline">
              SALES AMOUNT
            </Typography>
            <Typography color={text.primary} variant="h4">
              6.849
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: success.main,
                height: 56,
                width: 56,
              }}
            >
              <RequestQuoteIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            pt: 2,
          }}
        >
          <ArrowUpwardIcon sx={{ color: success.main }} />
          <Typography
            variant="body2"
            sx={{
              mr: 1,
            }}
          >
            7%
          </Typography>
          <Typography color={text.secondary} variant="caption">
            Since last minute
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
