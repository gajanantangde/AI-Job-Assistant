from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.database import SessionLocal
from app.schemas.resume_schema import ResumeCreate
from app.services.resume_service import (
    create_resume,
    get_all_resumes,
    get_resume_by_id,
    update_resume,
    delete_resume
)

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
@router.post("/resume")
def create_resume_api(
    resume: ResumeCreate,
    db: Session = Depends(get_db)
):
    return create_resume(db, resume)

@router.get("/resume")
def get_resume_api(
    db: Session = Depends(get_db)
):
    return get_all_resumes(db)

@router.get("/resume/{resume_id}")
def get_resume_by_api(
    resume_id: int,
    db: Session = Depends(get_db)
):
    return get_resume_by_id(db, resume_id)

@router.put("/resume/{resume_id}")
def update_resume_api(
    resume_id: int,
    resume: ResumeCreate,
    db: Session=Depends(get_db)
):
    return update_resume(db, resume_id, resume)

@router.delete("/resume/{resume_id}")
def delete_resume_api(
    resume_id: int,
    db: Session = Depends(get_db)
):
    return delete_resume(db, resume_id)