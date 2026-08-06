from pydantic import BaseModel


class ResumeTailorRequest(BaseModel):
    resume_id: int
    job_description: str