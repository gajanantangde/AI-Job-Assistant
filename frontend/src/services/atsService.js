import api from "../api/axios";

export const analyzeResume = async (resume_id, job_description) => {

    const response = await api.post("/ats/analyze", {
        resume_id,
        job_description,
    });

    return response.data;

};