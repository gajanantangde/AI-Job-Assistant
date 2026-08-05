from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.schemas.job_schema import JobCreate, JobUpdate
from app.services.job_service import (
    create_job,
    get_all_jobs,
    get_job_by_id,
    update_job,
    delete_job
)

router = APIRouter(
    prefix="/jobs",
    tags=["Jobs"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/")
def create_job_api(
    job: JobCreate,
    db: Session = Depends(get_db)
):
    return create_job(db, job)


@router.get("/")
def get_jobs_api(
    db: Session = Depends(get_db)
):
    return get_all_jobs(db)

@router.get("/{job_id}")
def get_job(
    job_id: int,
    db: Session = Depends(get_db)
):
    return get_job_by_id(db, job_id)

@router.put("/{job_id}")
def update_job_api(
    job_id: int,
    job: JobUpdate,
    db: Session = Depends(get_db)
):
    return update_job(db, job_id, job)

@router.delete("/{job_id}")
def delete_job_api(
    job_id: int,
    db: Session = Depends(get_db)
):
    return delete_job(db, job_id)