import api from "../api/axios";

export const getAllApplications = async () => {

    const response = await api.get("/applications/");

    return response.data;

};

export const createApplication = async (application) => {

    const response = await api.post(
        "/applications/",
        application
    );

    return response.data;

};

export const updateApplication = async (
    id,
    application
) => {

    const response = await api.put(
        `/applications/${id}`,
        application
    );

    return response.data;

};

export const deleteApplication = async (id) => {

    const response = await api.delete(
        `/applications/${id}`
    );

    return response.data;

};