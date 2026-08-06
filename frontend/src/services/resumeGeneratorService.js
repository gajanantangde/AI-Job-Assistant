import api from "../api/axios";

export const generateResume = async (
  resume_id,
  job_description,
  format
) => {
  const response = await api.post(
    "/generator/resume",
    {
        resume_id,
        job_description,
        format,
    }
  );

  return response.data;

};

export const downloadGeneratedResume = (filename) => {

    window.open(
        `http://127.0.0.1:8000/generator/download/${filename}`,
        "_blank"
    );

};