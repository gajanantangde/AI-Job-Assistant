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
import { analyzeResume } from "../services/atsService";

function ATS() {

  const [resumes, setResumes] = useState([]);
  const [resumeId, setResumeId] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [analysis, setAnalysis] = useState(null);
  useEffect(() => {

    loadResumes();

  }, []);

  const loadResumes = async () => {

    const data = await getAllResumes();

    setResumes(data);

  };

  const handleAnalyze = async () => {

    if (!resumeId || !jobDescription) {

      alert("Please select a resume and enter a job description.");

      return;

    }

    const result = await analyzeResume(
    resumeId,
    jobDescription
    );

    setAnalysis(result.analysis);

  };

  return (

    <Container maxWidth="md" sx={{ py: 4 }}>

      <Typography
        variant="h4"
        mb={4}
        fontWeight={700}
      >
        ATS Analyzer
      </Typography>

      <Paper sx={{ p: 4 }}>

        <TextField
          select
          fullWidth
          label="Select Resume"
          value={resumeId}
          onChange={(e) => setResumeId(e.target.value)}
          margin="normal"
        >

          {resumes.map((resume) => (

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
          onChange={(e) =>
            setJobDescription(e.target.value)
          }
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleAnalyze}
        >
          Analyze Resume
        </Button>

      </Paper>
          {analysis && (

            <>
                <Typography
                    variant="h5"
                    mt={4}
                    mb={2}
                >
                    ATS Result
                </Typography>

                <Typography>
                    <strong>Score:</strong> {analysis.score}%
                </Typography>

                <Typography sx={{ mt: 1 }}>
                    <strong>Recommendation:</strong>{" "}
                    {analysis.recommendation}
                </Typography>

                <Typography sx={{ mt: 2 }}>
                    <strong>Matched Skills:</strong>
                </Typography>

                <ul>
                    {analysis.matched_skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>

                <Typography>
                    <strong>Missing Skills:</strong>
                </Typography>

                <ul>
                    {analysis.missing_skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>

                <Typography>
                    <strong>Suggestions:</strong>
                </Typography>

                <ul>
                    {analysis.resume_suggestions.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            </>

            )}
    </Container>

  );

}

export default ATS;