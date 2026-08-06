import { useEffect, useState } from "react";

import DashboardGrid from "../components/dashboard/DashboardGrid";
import StatusPieChart from "../components/dashboard/StatusPieChart";
import RecentApplications from "../components/dashboard/RecentApplications";

import {
  getDashboardStats,
  getRecentApplications,
} from "../services/dashboardService";

import QuickActions from "../components/dashboard/QuickActions";


function Dashboard() {

  const [stats, setStats] = useState({
    total_resumes: 0,
    total_applications: 0,
    applied: 0,
    assessment: 0,
    interview: 0,
    hr_round: 0,
    offer: 0,
    rejected: 0,
    joined: 0,
  });

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {

      const statsData = await getDashboardStats();
      const recentData = await getRecentApplications();

      setStats(statsData);
      setApplications(recentData);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main-content">

      <h1 className="page-title">
        Dashboard
      </h1>

      <DashboardGrid
        stats={stats}
      />

      <StatusPieChart
        stats={stats}
      />

      <RecentApplications
        applications={applications}
      />
      <QuickActions />
    </div>
  );
}

export default Dashboard;