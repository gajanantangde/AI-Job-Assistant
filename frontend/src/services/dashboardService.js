import api from "../api/axios";

export const getResumes = async () => {
    const response = await api.get("/resume/");
    return response.data;
};

export const getApplications = async () => {
    const response = await api.get("/applications/");
    return response.data;
};

export const getJobs = async () => {
    const response = await api.get("/jobs/");
    return response.data;
};