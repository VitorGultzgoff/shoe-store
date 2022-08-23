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
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

// Utils
import { formatDecimal } from "utils/format";

export const TotalModels = ({ amount }) => {
  const {
    palette: { secondary, text },
  } = useTheme();
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color={text.secondary} gutterBottom variant="overline">
              TOTAL MODELS
            </Typography>
            <Typography color={text.primary} variant="h4">
              {formatDecimal(amount)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: secondary.light,
                height: 56,
                width: 56,
              }}
            >
              <ShoppingBagIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
