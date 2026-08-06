import {
  Sidebar,
  Menu,
  MenuItem,
} from "react-pro-sidebar";

import {
  FiHome,
  FiFileText,
  FiSearch,
  FiBriefcase,
  FiFilePlus,
  FiSettings,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";

function DesktopSidebar() {

  const { collapsed } = useSidebar();

  return (

    <Sidebar
      collapsed={collapsed}
      width="270px"
      collapsedWidth="85px"
      backgroundColor="#111827"
      rootStyles={{
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        borderRight: "1px solid #1f2937",
      }}
    >

      <div
        style={{
          padding: "24px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "20px",
          color: "white",
        }}
      >
        {collapsed ? "AI" : "AI Job Assistant"}
      </div>

      <Menu>

        <MenuItem
          icon={<FiHome />}
          component={<NavLink to="/" />}
        >
          Dashboard
        </MenuItem>

        <MenuItem
          icon={<FiFileText />}
          component={<NavLink to="/resume" />}
        >
          Resume
        </MenuItem>

        <MenuItem
          icon={<FiSearch />}
          component={<NavLink to="/ats" />}
        >
          ATS Analyzer
        </MenuItem>

        <MenuItem
          icon={<FiFilePlus />}
          component={<NavLink to="/generator" />}
        >
          Resume Generator
        </MenuItem>

        <MenuItem
          icon={<FiBriefcase />}
          component={<NavLink to="/tracker" />}
        >
          Job Tracker
        </MenuItem>

      </Menu>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
        }}
      >
        <Menu>
          <MenuItem
            icon={<FiSettings />}
          >
            Settings
          </MenuItem>
        </Menu>
      </div>

    </Sidebar>

  );

}

export default DesktopSidebar;