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
import StoreIcon from "@mui/icons-material/Store";

// Utils
import { formatDecimal } from "utils/format";

export const TotalStores = ({ amount }) => {
  const {
    palette: { primary, success, text },
  } = useTheme();
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color={text.secondary} gutterBottom variant="overline">
              TOTAL STORES
            </Typography>
            <Typography color={text.primary} variant="h4">
              {formatDecimal(amount)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: primary.main,
                height: 56,
                width: 56,
              }}
            >
              <StoreIcon />
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
            0%
          </Typography>
          <Typography color={text.secondary} variant="caption">
            Since last minute
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
