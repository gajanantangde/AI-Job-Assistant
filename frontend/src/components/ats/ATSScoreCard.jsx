import {
  Paper,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";

function ATSScoreCard({ score, recommendation }) {

  return (

    <Paper
      elevation={4}
      sx={{
        p: 3,
        mt: 4,
        borderRadius: 3,
      }}
    >

      <Typography
        variant="h5"
        fontWeight={700}
      >
        ATS Score
      </Typography>

      <Typography
        variant="h2"
        color="primary"
        mt={2}
      >
        {score}%
      </Typography>

      <Box mt={2}>

        <LinearProgress
          variant="determinate"
          value={score}
          sx={{
            height: 12,
            borderRadius: 10,
          }}
        />

      </Box>

      <Typography
        mt={2}
        color="text.secondary"
      >
        {recommendation}
      </Typography>

    </Paper>

  );

}

export default ATSScoreCard;