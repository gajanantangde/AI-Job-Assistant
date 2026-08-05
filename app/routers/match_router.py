from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.services.resume_service import get_resume_by_id
from app.services.job_service import get_all_jobs
from app.services.match_service import match_resume_with_jobs
from app.schemas.match_schema import JobDescriptionMatch

router = APIRouter(
    prefix="/match",
    tags=["Job Matching"]
)

def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()

@router.post("/resume/{resume_id}")
def match_resume(
    resume_id: int,
    db: Session = Depends(get_db)
):
    resume = get_resume_by_id(db, resume_id)

    if not resume:
        return {
            "message": "Resume not found"
        }

    resume_skills = [
        skill.strip()
        for skill in resume.skills.split(",")
    ]

    jobs = get_all_jobs(db)

    matched_jobs = match_resume_with_jobs(
    resume_skills,
    jobs
    )

    return {
    "resume_id": resume.id,
    "resume_name": resume.full_name,
    "matched_jobs": matched_jobs
    }

@router.post("/job-description")
def match_job_description(
    request: JobDescriptionMatch
):
    return {
        "resume_id": request.resume_id,
        "job_description": request.job_description
    }