import { useState } from "react";

import {
  Paper,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { uploadResume } from "../services/resumeService";

function ResumeUpload() {

  const [file, setFile] = useState(null);

  const handleUpload = async () => {

    if (!file) {

      alert("Select a resume.");

      return;

    }

    try {

      await uploadResume(file);

      alert("Resume uploaded successfully.");

    }

    catch (error) {

      console.log(error);

      alert("Upload failed.");

    }

  };

  return (

    <Paper
      elevation={4}
      sx={{
        p:4,
        borderRadius:4,
      }}
    >

      <Typography
        variant="h5"
        mb={3}
      >
        Upload Resume
      </Typography>

        <Stack
        direction={{
            xs: "column",
            sm: "row",
        }}
        spacing={2}
        sx={{
            alignItems: "center",
        }}
        >
        <input
          type="file"
          accept=".pdf"
          onChange={(e)=>setFile(e.target.files[0])}
        />

        <Button

          variant="contained"

          startIcon={<CloudUploadIcon />}

          onClick={handleUpload}

        >

          Upload

        </Button>

      </Stack>

    </Paper>

  );

}

export default ResumeUpload;