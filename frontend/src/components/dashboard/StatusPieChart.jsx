import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Paper, Typography } from "@mui/material";

const COLORS = [
  "#1976d2", // Applied
  "#9c27b0", // Assessment
  "#ed6c02", // Interview
  "#0288d1", // HR Round
  "#2e7d32", // Offer
  "#d32f2f", // Rejected
  "#1b5e20", // Joined
];

function StatusPieChart({ stats }) {

  const data = [
    { name: "Applied", value: stats.applied },
    { name: "Assessment", value: stats.assessment },
    { name: "Interview", value: stats.interview },
    { name: "HR Round", value: stats.hr_round },
    { name: "Offer", value: stats.offer },
    { name: "Rejected", value: stats.rejected },
    { name: "Joined", value: stats.joined },
  ].filter(item => item.value > 0);

  return (
    <Paper
      sx={{
        p: 3,
        mt: 4,
        height: 420,
      }}
    >
      <Typography
        variant="h6"
        mb={2}
      >
        Applications by Status
      </Typography>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={130}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </Paper>
  );

}

export default StatusPieChart;