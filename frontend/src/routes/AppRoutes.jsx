import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Resume from "../pages/Resume";
import ATS from "../pages/ATS";
import ResumeGenerator from "../pages/ResumeGenerator";
import JobTracker from "../pages/JobTracker";
import ResumeTailor from "../pages/ResumeTailor";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/resume" element={<Resume />} />

          <Route path="/ats" element={<ATS />} />

          <Route
            path="/generator"
            element={<ResumeGenerator />}
          />

          <Route
            path="/tracker"
            element={<JobTracker />}
          />
          <Route
              path="/tailor"
              element={<ResumeTailor />}
          />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;