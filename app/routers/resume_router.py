from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.database import SessionLocal
from app.schemas.resume_schema import ResumeCreate
from app.services.resume_service import create_resume

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close
@router.post("/resume")
def create_resume_api(
    resume: ResumeCreate,
    db: Session = Depends(get_db)
):
    return create_resume(db, resume)