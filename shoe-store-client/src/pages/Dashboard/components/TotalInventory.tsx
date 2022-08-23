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
import InventoryIcon from "@mui/icons-material/Inventory";

// Utils
import { formatDecimal } from "utils/format";

export const TotalInventory = ({ amount }) => {
  const {
    palette: { text, warning },
  } = useTheme();
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color={text.secondary} gutterBottom variant="overline">
              TOTAL INVENTORY
            </Typography>
            <Typography color={text.primary} variant="h4">
              {formatDecimal(amount)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: warning.light,
                height: 56,
                width: 56,
              }}
            >
              <InventoryIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
