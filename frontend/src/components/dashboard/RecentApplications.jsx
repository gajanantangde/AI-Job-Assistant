import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import StatusChip from "../common/StatusChip";

function RecentApplications({ applications }) {

  return (

    <Paper sx={{ p:3, mt:4 }}>

      <Typography
        variant="h6"
        mb={2}
      >
        Recent Applications
      </Typography>

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>Company</TableCell>

            <TableCell>Job Title</TableCell>

            <TableCell>Status</TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {applications.map((job) => (

            <TableRow key={job.id}>

              <TableCell>

                {job.company}

              </TableCell>

              <TableCell>

                {job.job_title}

              </TableCell>

              <TableCell>

                <StatusChip
                  status={job.status}
                />

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </Paper>

  );

}

export default RecentApplications;