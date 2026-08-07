import { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Grid,
} from "@mui/material";

import { updateApplication } from "../../services/jobApplicationService";


function EditJobDialog({
  open,
  handleClose,
  application,
  onUpdated,
}) {

  const [formData, setFormData] = useState({
    company: "",
    job_title: "",
    status: "Applied",
    application_date: "",
    interview_date: "",
    source: "",
    apply_link: "",
    notes: "",
  });


  useEffect(() => {

    if (application) {

      setFormData({
        company: application.company || "",
        job_title: application.job_title || "",
        status: application.status || "Applied",
        application_date: application.application_date || "",
        interview_date: application.interview_date || "",
        source: application.source || "",
        apply_link: application.apply_link || "",
        notes: application.notes || "",
      });

    }

  }, [application]);


  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  };


  const handleSave = async () => {

    if (!application) {
      return;
    }

    try {

      const payload = {
        ...formData,
        interview_date:
          formData.interview_date || null,
        notes:
          formData.notes || null,
      };

      await updateApplication(
        application.id,
        payload
      );

      if (onUpdated) {
        await onUpdated();
      }

      handleClose();

    } catch (error) {

      console.error(
        "Failed to update application:",
        error
      );

    }

  };


  return (

    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >

      <DialogTitle>
        Edit Job Application
      </DialogTitle>


      <DialogContent>

        <Grid
          container
          spacing={2}
          sx={{ mt: 1 }}
        >

          {/* Company */}

          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />

          </Grid>


          {/* Job Title */}

          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Job Title"
              name="job_title"
              value={formData.job_title}
              onChange={handleChange}
            />

          </Grid>


          {/* Status */}

          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >

              <MenuItem value="Applied">
                Applied
              </MenuItem>

              <MenuItem value="Assessment">
                Assessment
              </MenuItem>

              <MenuItem value="Interview">
                Interview
              </MenuItem>

              <MenuItem value="HR Round">
                HR Round
              </MenuItem>

              <MenuItem value="Offer">
                Offer
              </MenuItem>

              <MenuItem value="Rejected">
                Rejected
              </MenuItem>

              <MenuItem value="Joined">
                Joined
              </MenuItem>

            </TextField>

          </Grid>


          {/* Application Date */}

          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="date"
              label="Application Date"
              name="application_date"
              value={formData.application_date}
              onChange={handleChange}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />

          </Grid>


          {/* Interview Date */}

          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="date"
              label="Interview Date"
              name="interview_date"
              value={formData.interview_date}
              onChange={handleChange}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />

          </Grid>


          {/* Source */}

          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Application Source"
              name="source"
              value={formData.source}
              onChange={handleChange}
            >

              <MenuItem value="LinkedIn">
                LinkedIn
              </MenuItem>

              <MenuItem value="Naukri">
                Naukri
              </MenuItem>

              <MenuItem value="Indeed">
                Indeed
              </MenuItem>

              <MenuItem value="Company Website">
                Company Website
              </MenuItem>

              <MenuItem value="Referral">
                Referral
              </MenuItem>

              <MenuItem value="Internshala">
                Internshala
              </MenuItem>

              <MenuItem value="Wellfound">
                Wellfound
              </MenuItem>

              <MenuItem value="Foundit">
                Foundit
              </MenuItem>

              <MenuItem value="Glassdoor">
                Glassdoor
              </MenuItem>

              <MenuItem value="Campus Placement">
                Campus Placement
              </MenuItem>

              <MenuItem value="Other">
                Other
              </MenuItem>

            </TextField>

          </Grid>


          {/* Apply Link */}

          <Grid size={{ xs: 12 }}>

            <TextField
              fullWidth
              label="Apply Link"
              name="apply_link"
              value={formData.apply_link}
              onChange={handleChange}
            />

          </Grid>


          {/* Notes */}

          <Grid size={{ xs: 12 }}>

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />

          </Grid>

        </Grid>

      </DialogContent>


      <DialogActions>

        <Button
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
        >
          Save
        </Button>

      </DialogActions>

    </Dialog>

  );

}


export default EditJobDialog;