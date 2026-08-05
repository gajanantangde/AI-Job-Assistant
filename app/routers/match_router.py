from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.services.resume_service import get_resume_by_id
from app.services.job_service import get_all_jobs

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

    jobs = get_all_jobs(db)

    return {
        "resume": resume.full_name,
        "total_jobs": len(jobs)
    }