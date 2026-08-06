import {
  Container,
  Typography,
  Stack,
} from "@mui/material";

import ResumeUpload from "../components/ResumeUpload";
import ResumeTable from "../components/ResumeTable";

function Resume() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
        }}
      >
        Resume Management
      </Typography>

      <Stack spacing={4}>

        <ResumeUpload />

        <ResumeTable />

      </Stack>

    </Container>
  );
}

export default Resume;