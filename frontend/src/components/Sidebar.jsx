import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  FileText,
  ScanSearch,
  FileOutput,
  Briefcase,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">AI Job Assistant</h2>

      <ul>

        <li>
          <NavLink to="/" className="nav-item">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/resume" className="nav-item">
            <FileText size={20} />
            <span>Resume</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/ats" className="nav-item">
            <ScanSearch size={20} />
            <span>ATS Analyzer</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/generator" className="nav-item">
            <FileOutput size={20} />
            <span>Resume Generator</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/tracker" className="nav-item">
            <Briefcase size={20} />
            <span>Job Tracker</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;