import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";

import Topbar from "../components/layout/Topbar";
import DesktopSidebar from "../components/layout/DesktopSidebar";
import MobileSidebar from "../components/layout/MobileSidebar";
import { useSidebar } from "../context/SidebarContext";

function MainLayout() {

  const mobile = useMediaQuery("(max-width:900px)");
  const { collapsed } = useSidebar();

  const drawerWidth = collapsed ? 85 : 270;

  return (
    <Box sx={{ display: "flex" }}>

      {mobile ? <MobileSidebar /> : <DesktopSidebar />}

      <Topbar />

      <Box
        component="main"
        sx={{
            flexGrow: 1,
            ml: {
            xs: 0,
            md: `${drawerWidth}px`,
            },
            mt: "64px",
            width: {
            xs: "100%",
            md: `calc(100% - ${drawerWidth}px)`,
            },
            minHeight: "100vh",
            backgroundColor: "background.default",
            transition: "all .3s ease",
            overflow: "auto",
            p: 0,
        }}
        >
        <Outlet />
        </Box>
    
      </Box>
  );
}

export default MainLayout;