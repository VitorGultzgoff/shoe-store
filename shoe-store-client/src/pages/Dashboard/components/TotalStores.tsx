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
import StoreIcon from "@mui/icons-material/Store";

// Utils
import { formatDecimal } from "utils/format";

export const TotalStores = ({ amount }) => {
  const {
    palette: { primary, text },
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
      </CardContent>
    </Card>
  );
};
