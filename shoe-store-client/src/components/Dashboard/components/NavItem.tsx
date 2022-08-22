// Components
import { Box, Button, ListItem, useTheme } from "@mui/material";

export const NavItem = ({ href, icon, title, ...others }) => {
  // const active = href ? router.pathname === href : false;
  const active = false;
  const theme = useTheme();

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
      <Button
        component="a"
        startIcon={icon}
        disableRipple
        sx={{
          backgroundColor: active ? "rgba(255,255,255, 0.08)" : "transparent",
          borderRadius: 1,
          color: active ? theme.palette.secondary.main : "#D1D5DB",
          fontWeight: active ? 700 : 400,
          justifyContent: "flex-start",
          px: 3,
          textAlign: "left",
          textTransform: "none",
          width: "100%",
          "& .MuiButton-startIcon": {
            color: active ? theme.palette.secondary.main : "#9CA3AF",
          },
          "&:hover": {
            backgroundColor: "rgba(255,255,255, 0.08)",
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
      </Button>
    </ListItem>
  );
};
