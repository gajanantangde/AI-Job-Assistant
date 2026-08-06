import { useEffect, useState } from "react";

import DashboardCard from "../components/DashboardCard";
import "../styles/Dashboard.css";

import {
  getResumes,
  getApplications,
  getJobs,
} from "../services/dashboardService";

function Dashboard() {
  const [resumeCount, setResumeCount] = useState(0);
  const [applicationCount, setApplicationCount] = useState(0);
  const [jobCount, setJobCount] = useState(0);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const resumes = await getResumes();
        const applications = await getApplications();
        const jobs = await getJobs();

        setResumeCount(resumes.length);
        setApplicationCount(applications.length);
        setJobCount(jobs.length);
      } catch (error) {
        console.log(error);
      }
    }

    loadDashboard();
  }, []);

  return (
    <div className="main-content">

      <h1 className="page-title">
        Dashboard
      </h1>

      <div className="dashboard-grid">

        <DashboardCard
          title="Total Resumes"
          value={resumeCount}
          color="#2563EB"
        />

        <DashboardCard
          title="Applications"
          value={applicationCount}
          color="#10B981"
        />

        <DashboardCard
          title="Jobs"
          value={jobCount}
          color="#F59E0B"
        />

        <DashboardCard
          title="ATS Score"
          value="82%"
          color="#8B5CF6"
        />

      </div>

    </div>
  );
}

export default Dashboard;