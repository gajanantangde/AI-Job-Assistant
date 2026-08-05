from pydantic import BaseModel


class ResumeCreate(BaseModel):
    full_name: str
    email: str
    phone: str

    linkedin: str | None = None
    github: str | None = None
    location: str | None = None
    summary: str | None = None

    skills: str | None = None
    education: str | None = None
    experience: str | None = None
    projects: str | None = None
    certifications: str | None = None