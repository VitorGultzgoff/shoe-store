// Libs
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

// Icons
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

// Utils
import { formatDecimal } from "utils/format";

export const SalesAmount = ({ amount }) => {
  const {
    palette: { success, text },
  } = useTheme();

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color={text.secondary} gutterBottom variant="overline">
              SALES AMOUNT
            </Typography>
            <Typography color={text.primary} variant="h4">
              {formatDecimal(amount)}
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
      </CardContent>
    </Card>
  );
};
