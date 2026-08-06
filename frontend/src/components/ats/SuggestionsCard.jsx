import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import LightbulbIcon from "@mui/icons-material/Lightbulb";

function SuggestionsCard({ suggestions }) {

  return (

    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 3,
        mt: 3,
      }}
    >

      <Typography
        variant="h6"
        fontWeight={700}
        mb={2}
      >
        Resume Suggestions
      </Typography>

      <List>

        {suggestions.length > 0 ? (

          suggestions.map((item, index) => (

            <ListItem key={index}>

              <ListItemIcon>
                <LightbulbIcon color="warning" />
              </ListItemIcon>

              <ListItemText primary={item} />

            </ListItem>

          ))

        ) : (

          <Typography color="text.secondary">
            No suggestions available
          </Typography>

        )}

      </List>

    </Paper>

  );

}

export default SuggestionsCard;