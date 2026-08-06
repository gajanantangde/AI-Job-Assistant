import { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

function EditResumeDialog({
  open,
  handleClose,
  resume,
  onSave,
}) {

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    skills: "",
  });

  useEffect(() => {

    if (resume) {

      setFormData({
        full_name: resume.full_name || "",
        email: resume.email || "",
        phone: resume.phone || "",
        skills: resume.skills || "",
      });

    }

  }, [resume]);

  return (

    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >

      <DialogTitle>Edit Resume</DialogTitle>

      <DialogContent>

        <TextField
          fullWidth
          margin="normal"
          label="Full Name"
          value={formData.full_name}
          onChange={(e)=>
            setFormData({
              ...formData,
              full_name:e.target.value
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          value={formData.email}
          onChange={(e)=>
            setFormData({
              ...formData,
              email:e.target.value
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="Phone"
          value={formData.phone}
          onChange={(e)=>
            setFormData({
              ...formData,
              phone:e.target.value
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          multiline
          rows={3}
          label="Skills"
          value={formData.skills}
          onChange={(e)=>
            setFormData({
              ...formData,
              skills:e.target.value
            })
          }
        />

      </DialogContent>

      <DialogActions>

        <Button onClick={handleClose}>
          Cancel
        </Button>

        <Button
            variant="contained"
            onClick={() => onSave(formData)}
        >
            Save
        </Button>

      </DialogActions>

    </Dialog>

  );

}

export default EditResumeDialog;