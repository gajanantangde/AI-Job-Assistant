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
from fastapi.responses import FileResponse
import os

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

@router.get("/resume/view/{resume_id}")
def view_resume(
    resume_id: int,
    db: Session = Depends(get_db)
):
    resume = get_resume_by_id(db, resume_id)

    if not resume:
        return {"message": "Resume not found"}

    file_path = os.path.join("uploads", resume.resume_file)

    if not os.path.exists(file_path):
        return {"message": "Resume file not found"}

    response = FileResponse(
    path=file_path,
    media_type="application/pdf",
    )

    response.headers["Content-Disposition"] = "inline"

    return response

@router.get("/resume/download/{resume_id}")
def download_resume(
    resume_id: int,
    db: Session = Depends(get_db)
):
    resume = get_resume_by_id(db, resume_id)

    if not resume:
        return {"message": "Resume not found"}

    file_path = os.path.join("uploads", resume.resume_file)

    if not os.path.exists(file_path):
        return {"message": "Resume file not found"}

    return FileResponse(
        path=file_path,
        filename=resume.resume_file,
        media_type="application/pdf",
    )