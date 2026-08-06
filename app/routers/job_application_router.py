from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.schemas.job_application_schema import JobApplicationCreate
from app.services.job_application_service import (
    create_application,
    get_all_applications,
    get_application_by_id,
    update_application,
    delete_application
)

router = APIRouter(
    prefix="/applications",
    tags=["Job Applications"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/")
def create_job_application(
    application: JobApplicationCreate,
    db: Session = Depends(get_db)
):
    return create_application(db, application)


@router.get("/")
def get_job_applications(
    db: Session = Depends(get_db)
):
    return get_all_applications(db)


@router.get("/{application_id}")
def get_job_application(
    application_id: int,
    db: Session = Depends(get_db)
):
    return get_application_by_id(
        db,
        application_id
    )

@router.put("/{application_id}")
def update_job_application(
    application_id: int,
    application: JobApplicationCreate,
    db: Session = Depends(get_db)
):
    return update_application(
        db,
        application_id,
        application
    )

@router.delete("/{application_id}")
def delete_job_application(
    application_id: int,
    db: Session = Depends(get_db)
):
    return delete_application(
        db,
        application_id
    )