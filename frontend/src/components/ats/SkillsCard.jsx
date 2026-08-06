import {
  Paper,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

function SkillsCard({
  title,
  skills,
  color,
}) {

  return (

    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 3,
        height: "100%",
      }}
    >

      <Typography
        variant="h6"
        fontWeight={700}
        mb={2}
      >
        {title}
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        flexWrap="wrap"
      >

        {skills.length > 0 ? (

          skills.map((skill, index) => (

            <Chip
              key={index}
              label={skill}
              color={color}
              sx={{ mb: 1 }}
            />

          ))

        ) : (

          <Typography color="text.secondary">
            No skills found
          </Typography>

        )}

      </Stack>

    </Paper>

  );

}

export default SkillsCard;