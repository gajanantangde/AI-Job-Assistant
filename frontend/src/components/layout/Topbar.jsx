import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { useSidebar } from "../../context/SidebarContext";

function Topbar() {

  const { toggleSidebar } = useSidebar();

  return (

    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        zIndex: 1300,
        background: "#111827",
      }}
    >

      <Toolbar>

        <IconButton
          color="inherit"
          onClick={toggleSidebar}
          edge="start"
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1, ml: 2 }}>

          <Typography variant="h6">
            AI Job Assistant
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Smart Career Dashboard
          </Typography>

        </Box>

        <Avatar
          sx={{
            bgcolor: "primary.main",
          }}
        >
          G
        </Avatar>

      </Toolbar>

    </AppBar>

  );

}

export default Topbar;