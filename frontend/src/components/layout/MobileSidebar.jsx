import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  Home,
  Description,
  Analytics,
  Article,
  Work,
} from "@mui/icons-material";

import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";

function MobileSidebar() {

  const { collapsed, toggleSidebar } = useSidebar();

  return (
    <Drawer
      anchor="left"
      open={collapsed}
      onClose={toggleSidebar}
    >
      <List sx={{ width: 260 }}>

        <ListItemButton component={NavLink} to="/" onClick={toggleSidebar}>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/resume" onClick={toggleSidebar}>
          <ListItemIcon><Description /></ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/ats" onClick={toggleSidebar}>
          <ListItemIcon><Analytics /></ListItemIcon>
          <ListItemText primary="ATS Analyzer" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/generator" onClick={toggleSidebar}>
          <ListItemIcon><Article /></ListItemIcon>
          <ListItemText primary="Resume Generator" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/tracker" onClick={toggleSidebar}>
          <ListItemIcon><Work /></ListItemIcon>
          <ListItemText primary="Job Tracker" />
        </ListItemButton>

      </List>
    </Drawer>
  );
}

export default MobileSidebar;