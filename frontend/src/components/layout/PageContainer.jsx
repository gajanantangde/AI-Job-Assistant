import { Box } from "@mui/material";

function PageContainer({ title, children }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1400px",
        mx: "auto",
        p: {
          xs: 2,
          sm: 3,
          md: 4,
        },
      }}
    >
      {title && (
        <Box
          component="h1"
          sx={{
            fontSize: {
              xs: "1.8rem",
              md: "2.2rem",
            },
            fontWeight: 700,
            mb: 3,
          }}
        >
          {title}
        </Box>
      )}

      {children}
    </Box>
  );
}

export default PageContainer;