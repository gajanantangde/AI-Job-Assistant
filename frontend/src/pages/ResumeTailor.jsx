import { useEffect, useState } from "react";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

import { getAllResumes } from "../services/resumeService";
import { tailorResume } from "../services/resumeTailorService";

function ResumeTailor() {

  const [resumes, setResumes] = useState([]);
  const [resumeId, setResumeId] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    loadResumes();
  }, []);

  const loadResumes = async () => {
    const data = await getAllResumes();
    setResumes(data);
  };

  const handleTailor = async () => {

    if (!resumeId || !jobDescription) {
      alert("Please select a resume and enter a job description.");
      return;
    }

    const response = await tailorResume(
      resumeId,
      jobDescription
    );

    setResult(response);

  };

  return (

    <Container maxWidth="md" sx={{ py: 4 }}>

      <Typography
        variant="h4"
        mb={4}
        fontWeight={700}
      >
        Resume Tailoring
      </Typography>

      <Paper sx={{ p: 4 }}>

        <TextField
          select
          fullWidth
          label="Select Resume"
          margin="normal"
          value={resumeId}
          onChange={(e)=>setResumeId(e.target.value)}
        >

          {resumes.map((resume)=>(

            <MenuItem
              key={resume.id}
              value={resume.id}
            >
              {resume.full_name}
            </MenuItem>

          ))}

        </TextField>

        <TextField
          fullWidth
          multiline
          rows={10}
          margin="normal"
          label="Job Description"
          value={jobDescription}
          onChange={(e)=>setJobDescription(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt:3 }}
          onClick={handleTailor}
        >
          Tailor Resume
        </Button>

        {result && (

          <Paper
            elevation={3}
            sx={{
              mt:4,
              p:3,
            }}
          >

            <Typography
              variant="h5"
              mb={2}
            >
              ATS Score: {result.analysis.score}%
            </Typography>

            <Typography
              variant="h6"
            >
              Tailoring Suggestions
            </Typography>

            <ul>

              {result.tailoring_suggestions.map((item,index)=>(

                <li key={index}>{item}</li>

              ))}

            </ul>

          </Paper>

        )}

      </Paper>

    </Container>

  );

}

export default ResumeTailor;