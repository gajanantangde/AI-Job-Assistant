import api from "../api/axios";

export const tailorResume = async (
    resume_id,
    job_description
) => {

    const response = await api.post(
        "/resume/tailor",
        {
            resume_id,
            job_description,
        }
    );

    return response.data;

};