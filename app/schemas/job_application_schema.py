from datetime import date
from pydantic import BaseModel


class JobApplicationCreate(BaseModel):
    company: str
    job_title: str
    application_date: date
    status: str
    source: str
    apply_link: str
    interview_date: date | None = None
    notes: str | None = None