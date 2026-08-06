import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

function EditJobDialog({

  open,

  handleClose,

  application,

}) {

  return (

    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
    >

      <DialogTitle>

        Edit Job Application

      </DialogTitle>

      <DialogContent>

        {/* Form goes here */}

      </DialogContent>

      <DialogActions>

        <Button
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
        >
          Save
        </Button>

      </DialogActions>

    </Dialog>

  );

}

export default EditJobDialog;