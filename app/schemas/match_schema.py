from pydantic import BaseModel


class JobDescriptionMatch(BaseModel):
    resume_id: int
    job_description: str