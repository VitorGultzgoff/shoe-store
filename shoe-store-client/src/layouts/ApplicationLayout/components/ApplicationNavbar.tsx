// Libs
import styled from "@emotion/styled";
import { AppBar, IconButton, Toolbar, useTheme } from "@mui/material";

// Icons
import MenuIcon from "@mui/icons-material/Menu";

export const ApplicationNavbar = ({ onSidebarOpen }) => {
  const theme = useTheme();
  const ApplicationNavbarRoot = styled(AppBar)(() => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
  }));

  return (
    <>
      <ApplicationNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </ApplicationNavbarRoot>
    </>
  );
};
