from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import SessionLocal

from app.schemas.resume_tailor_schema import ResumeTailorRequest

from app.services.resume_service import get_resume_by_id
from app.services.resume_tailor_service import tailor_resume

from app.parser.job_parser import extract_job_skills

router = APIRouter(
    prefix="/resume",
    tags=["Resume Tailoring"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/tailor")
def tailor_resume_api(
    request: ResumeTailorRequest,
    db: Session = Depends(get_db)
):

    resume = get_resume_by_id(
        db,
        request.resume_id
    )

    if not resume:
        return {
            "message": "Resume not found"
        }

    resume_skills = [
        skill.strip()
        for skill in resume.skills.split(",")
    ]

    job_skills = extract_job_skills(
        request.job_description
    )

    return tailor_resume(
        resume_skills,
        job_skills
    )