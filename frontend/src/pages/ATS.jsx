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
import {
  Grid,
} from "@mui/material";

import ATSScoreCard from "../components/ats/ATSScoreCard";
import SkillsCard from "../components/ats/SkillsCard";
import SuggestionsCard from "../components/ats/SuggestionsCard";


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

              <ATSScoreCard
                score={analysis.score}
                recommendation={analysis.recommendation}
              />

              <Grid
                container
                spacing={3}
                sx={{ mt: 1 }}
              >

                <Grid size={{ xs: 12, md: 6 }}>

                  <SkillsCard
                    title="Matched Skills"
                    skills={analysis.matched_skills}
                    color="success"
                  />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                  <SkillsCard
                    title="Missing Skills"
                    skills={analysis.missing_skills}
                    color="error"
                  />

                </Grid>

              </Grid>

              <SuggestionsCard
                suggestions={analysis.resume_suggestions}
              />

            </>

            )}
    </Container>

  );

}

export default ATS;