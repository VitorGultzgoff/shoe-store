// Libs
import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Components
import { ApplicationNavbar } from "layouts/ApplicationLayout/components/ApplicationNavbar";
import { ApplicationSidebar } from "layouts/ApplicationLayout/components/ApplicationSidebar";

const ApplicationLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

export const ApplicationLayout = (props) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ApplicationLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </ApplicationLayoutRoot>
      <ApplicationNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <ApplicationSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};
