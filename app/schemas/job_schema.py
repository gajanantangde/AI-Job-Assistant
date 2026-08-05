from pydantic import BaseModel


class JobCreate(BaseModel):
    title: str
    company: str
    location: str
    experience: str
    skills: str
    description: str
    source: str
    apply_link: str


class JobUpdate(BaseModel):
    title: str
    company: str
    location: str
    experience: str
    skills: str
    description: str
    source: str
    apply_link: str
    status: str