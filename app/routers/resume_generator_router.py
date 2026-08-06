from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import SessionLocal

from app.schemas.resume_generate_schema import ResumeGenerateRequest

from app.services.resume_service import get_resume_by_id
from app.services.resume_builder_service import build_resume
from app.services.ats_service import analyze_resume

from app.parser.job_parser import extract_job_skills
from app.generator.resume_generator import generate_resume

router = APIRouter(
    prefix="/generator",
    tags=["Resume Generator"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/resume")
def generate_resume_api(
    request: ResumeGenerateRequest,
    db: Session = Depends(get_db)
):

    resume = get_resume_by_id(db, request.resume_id)

    if not resume:
        return {"message": "Resume not found"}

    resume_skills = [
        skill.strip()
        for skill in resume.skills.split(",")
    ]

    job_skills = extract_job_skills(
        request.job_description
    )

    analysis = analyze_resume(
        resume_skills,
        job_skills
    )

    resume_data = build_resume(
        resume,
        analysis,
        {}
    )

    output_path = f"generated_resumes/resume_{resume.id}.docx"

    generate_resume(
        resume_data,
        output_path
    )

    return {
        "message": "Resume generated successfully",
        "analysis": analysis,
        "file": output_path
    }