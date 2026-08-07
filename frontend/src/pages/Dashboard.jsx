import { useEffect, useState } from "react";

import DashboardGrid from "../components/dashboard/DashboardGrid";
import StatusPieChart from "../components/dashboard/StatusPieChart";
import SourceBarChart from "../components/dashboard/SourceBarChart";
import RecentApplications from "../components/dashboard/RecentApplications";
import QuickActions from "../components/dashboard/QuickActions";

import {
  getDashboardStats,
  getRecentApplications,
  getApplicationsBySource,
  getUpcomingInterviews,
} from "../services/dashboardService";

import UpcomingInterviews from "../components/dashboard/UpcomingInterviews";

import {
  CircularProgress,
  Box,
  Alert,
} from "@mui/material";



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

  const [sourceData, setSourceData] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {

    loadDashboard();

  }, []);


  const loadDashboard = async () => {

  try {

    setLoading(true);
    setError("");
    const statsData =
      await getDashboardStats();

    const recentData =
      await getRecentApplications();

    const sourceData =
      await getApplicationsBySource();

    const interviewData =
      await getUpcomingInterviews();

    setStats(statsData);

    setApplications(recentData);

    setSourceData(sourceData);

    setInterviews(interviewData);

  }  catch (error) {

        console.error(
          "Failed to load dashboard:",
          error
        );

        setError(
          "Unable to load dashboard data. Please try again."
        );

      } finally {

        setLoading(false);

      }

};

  return (

    <div className="main-content">

      <h1 className="page-title">
        Dashboard
      </h1>
      {error && (
        <Alert
          severity="error"
          sx={{ mb: 3 }}
        >
          {error}
        </Alert>
      )}
      {loading ? (

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "300px",
        }}
      >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <DashboardGrid
              stats={stats}
            />

            <StatusPieChart
              stats={stats}
            />

            <SourceBarChart
              data={sourceData}
            />

        <RecentApplications
          applications={applications}
        />

        <UpcomingInterviews
          interviews={interviews}
        />

        <QuickActions />
      </>

    )}

      {/* Dashboard Statistics */}

      <DashboardGrid
        stats={stats}
      />


      {/* Applications by Status */}

      <StatusPieChart
        stats={stats}
      />


      {/* Applications by Source */}

      <SourceBarChart
        data={sourceData}
      />


      {/* Recent Applications */}

      <RecentApplications
        applications={applications}
      />

      <UpcomingInterviews
        interviews={interviews}
      />
      {/* Quick Actions */}

      <QuickActions />

    </div>

  );

}


export default Dashboard;