// Libs
import { Theme } from "@mui/material";
import { Box, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";

// Icons
import { ChartBar as ChartBarIcon } from "icons/chart-bar";
import { ShoppingBag as ShoppingBagIcon } from "icons/shopping-bag";
import StoreIcon from "@mui/icons-material/Store";

// Components
import { NavItem } from "./NavItem";

const navbarItems = [
  {
    href: "/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/stores",
    icon: <StoreIcon fontSize="small" />,
    title: "Stores",
  },
  {
    href: "/models",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Models",
  },
];

export const ApplicationSidebar = ({ open, onClose }) => {
  const lgUp = useMediaQuery((theme: Theme) => theme?.breakpoints?.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          {/* <Box sx={{ p: 3 }}>
            <Logo
              sx={{
                height: 42,
                width: 42,
              }}
            />
          </Box> */}
          <Box sx={{ px: 2, mt: 2, textAlign: "center" }}>
            <Typography color="inherit" variant="subtitle1">
              Aldo Shoes
            </Typography>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {navbarItems.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#111827",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#111827",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
