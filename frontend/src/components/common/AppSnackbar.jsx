import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function AppSnackbar({
  open,
  handleClose,
  message,
  severity = "success",
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert
        severity={severity}
        variant="filled"
        onClose={handleClose}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AppSnackbar;