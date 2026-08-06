import { Paper, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function QuickActions() {

  const navigate = useNavigate();

  return (

    <Paper
      sx={{
        p: 3,
        mt: 4,
      }}
    >

      <Typography
        variant="h6"
        mb={2}
      >
        Quick Actions
      </Typography>

      <Stack
        spacing={2}
        direction={{
          xs: "column",
          sm: "row",
        }}
      >

        <Button
          variant="contained"
          onClick={() => navigate("/resume")}
        >
          Upload Resume
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/ats")}
        >
          ATS Analyzer
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/generator")}
        >
          Resume Generator
        </Button>

        <Button
          variant="contained"
          color="warning"
          onClick={() => navigate("/tracker")}
        >
          Add Job
        </Button>

      </Stack>

    </Paper>

  );

}

export default QuickActions;