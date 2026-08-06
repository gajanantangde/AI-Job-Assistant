import { useState } from "react";

import {
  Paper,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

import { createApplication } from "../../services/jobApplicationService";
import AppSnackbar from "../common/AppSnackbar";

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    company: "",
    job_title: "",
    status: "Applied",
    application_date: "",
    interview_date: "",
    source: "LinkedIn",
    apply_link: "",
    notes: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.company ||
      !formData.job_title ||
      !formData.application_date
    ) {
      setSnackbar({
        open: true,
        message: "Please fill all required fields.",
        severity: "warning",
      });

      return;
    }

    try {
      const payload = {
        ...formData,
        interview_date: formData.interview_date || null,
        notes: formData.notes || null,
      };

      await createApplication(payload);

      setSnackbar({
        open: true,
        message: "Application saved successfully!",
        severity: "success",
      });

      setFormData({
        company: "",
        job_title: "",
        status: "Applied",
        application_date: "",
        interview_date: "",
        source: "LinkedIn",
        apply_link: "",
        notes: "",
      });
    } catch (error) {
      console.error(error);

      setSnackbar({
        open: true,
        message: "Failed to save application.",
        severity: "error",
      });
    }
  };

  return (
    <>
      <Paper
        sx={{
          p: 3,
          mb: 4,
        }}
      >
        <Typography variant="h5" mb={3}>
          Add Job Application
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Job Title"
              name="job_title"
              value={formData.job_title}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <MenuItem value="Applied">Applied</MenuItem>
              <MenuItem value="Assessment">Assessment</MenuItem>
              <MenuItem value="Interview">Interview</MenuItem>
              <MenuItem value="HR Round">HR Round</MenuItem>
              <MenuItem value="Offer">Offer</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
              <MenuItem value="Joined">Joined</MenuItem>
            </TextField>
          </Grid>

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

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Application Source"
              name="source"
              value={formData.source}
              onChange={handleChange}
            >
              <MenuItem value="LinkedIn">LinkedIn</MenuItem>
              <MenuItem value="Naukri">Naukri</MenuItem>
              <MenuItem value="Indeed">Indeed</MenuItem>
              <MenuItem value="Company Website">
                Company Website
              </MenuItem>
              <MenuItem value="Referral">Referral</MenuItem>
              <MenuItem value="Internshala">Internshala</MenuItem>
              <MenuItem value="Wellfound">Wellfound</MenuItem>
              <MenuItem value="Foundit">Foundit</MenuItem>
              <MenuItem value="Glassdoor">Glassdoor</MenuItem>
              <MenuItem value="Campus Placement">
                Campus Placement
              </MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Apply Link"
              name="apply_link"
              value={formData.apply_link}
              onChange={handleChange}
            />
          </Grid>

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

          <Grid size={{ xs: 12 }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
            >
              Save Application
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <AppSnackbar
        open={snackbar.open}
        handleClose={handleSnackbarClose}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </>
  );
}

export default JobApplicationForm;