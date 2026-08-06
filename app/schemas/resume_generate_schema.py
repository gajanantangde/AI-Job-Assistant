from pydantic import BaseModel


class ResumeGenerateRequest(BaseModel):
    resume_id: int
    job_description: str