import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Paper,
  Typography,
} from "@mui/material";

function SourceBarChart({ data }) {

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
        Applications by Source
      </Typography>

      {data.length === 0 ? (

        <Typography color="text.secondary">
          No application source data available.
        </Typography>

      ) : (

        <ResponsiveContainer
          width="100%"
          height="90%"
        >

          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 60,
            }}
          >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="source"
              angle={-30}
              textAnchor="end"
              interval={0}
            />

            <YAxis
              allowDecimals={false}
            />

            <Tooltip />

            <Bar
              dataKey="count"
              name="Applications"
              fill="#1976d2"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      )}

    </Paper>
  );
}

export default SourceBarChart;