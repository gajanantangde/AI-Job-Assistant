import api from "../api/axios";

export const uploadResume = async (file) => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
        "/upload/resume",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};

export const getAllResumes = async () => {

    const response = await api.get("/resume");

    return response.data;

};

export const deleteResume = async (id) => {

    const response = await api.delete(`/resume/${id}`);

    return response.data;

};

export const updateResume = async (id, resume) => {

    const response = await api.put(
        `/resume/${id}`,
        resume
    );

    return response.data;

};