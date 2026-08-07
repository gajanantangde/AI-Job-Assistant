import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

function UpcomingInterviews({ interviews }) {

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
        Upcoming Interviews
      </Typography>

      {interviews.length === 0 ? (

        <Typography color="text.secondary">
          No upcoming interviews.
        </Typography>

      ) : (

        <List disablePadding>

          {interviews.map((interview, index) => (

            <div key={interview.id}>

              <ListItem
                disableGutters
              >

                <ListItemText
                  primary={
                    `${interview.company} — ${interview.job_title}`
                  }
                  secondary={
                    `Interview: ${interview.interview_date} • ${interview.status}`
                  }
                />

              </ListItem>

              {index < interviews.length - 1 && (
                <Divider />
              )}

            </div>

          ))}

        </List>

      )}

    </Paper>
  );
}

export default UpcomingInterviews;