from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.schemas.ats_schema import ATSRequest
from app.services.resume_service import get_resume_by_id
from app.parser.job_parser import extract_job_skills
from app.services.ats_service import analyze_resume

router = APIRouter(
    prefix="/ats",
    tags=["ATS Analyzer"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/analyze")
def analyze_resume_api(
    request: ATSRequest,
    db: Session = Depends(get_db)
):
    # Fetch resume
    resume = get_resume_by_id(db, request.resume_id)

    if not resume:
        return {
            "message": "Resume not found"
        }

    # Extract job skills
    job_skills = extract_job_skills(
        request.job_description
    )

    # Convert resume skills to list
    resume_skills = [
        skill.strip()
        for skill in resume.skills.split(",")
    ]

    # Perform ATS analysis
    analysis = analyze_resume(
        resume_skills,
        job_skills
    )

    return {
        "resume_name": resume.full_name,
        "analysis": analysis
    }