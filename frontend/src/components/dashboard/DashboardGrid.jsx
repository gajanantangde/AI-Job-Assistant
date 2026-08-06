import { Grid } from "@mui/material";

import DashboardCard from "./DashboardCard";

function DashboardGrid({ stats }) {

  return (

    <Grid container spacing={3}>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DashboardCard
          title="Resumes"
          value={stats.total_resumes}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DashboardCard
          title="Applications"
          value={stats.total_applications}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DashboardCard
          title="Interviews"
          value={stats.interview}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DashboardCard
          title="Offers"
          value={stats.offer}
        />
      </Grid>

    </Grid>

  );

}

export default DashboardGrid;