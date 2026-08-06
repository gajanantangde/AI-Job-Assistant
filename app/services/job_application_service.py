from sqlalchemy.orm import Session

from app.models.job_application import JobApplication
from app.schemas.job_application_schema import JobApplicationCreate


def create_application(
    db: Session,
    application: JobApplicationCreate
):

    new_application = JobApplication(
        company=application.company,
        job_title=application.job_title,
        application_date=application.application_date,
        status=application.status,
        source=application.source,
        apply_link=application.apply_link,
        interview_date=application.interview_date,
        notes=application.notes
    )

    db.add(new_application)
    db.commit()
    db.refresh(new_application)

    return new_application


def get_all_applications(db: Session):

    return db.query(JobApplication).all()


def get_application_by_id(
    db: Session,
    application_id: int
):

    return db.query(JobApplication).filter(
        JobApplication.id == application_id
    ).first()

def update_application(
    db: Session,
    application_id: int,
    application: JobApplicationCreate
):
    existing = db.query(JobApplication).filter(
        JobApplication.id == application_id
    ).first()

    if not existing:
        return {"message": "Application not found"}

    existing.company = application.company
    existing.job_title = application.job_title
    existing.application_date = application.application_date
    existing.status = application.status
    existing.source = application.source
    existing.apply_link = application.apply_link
    existing.interview_date = application.interview_date
    existing.notes = application.notes

    db.commit()
    db.refresh(existing)

    return existing

def delete_application(
    db: Session,
    application_id: int
):
    application = db.query(JobApplication).filter(
        JobApplication.id == application_id
    ).first()

    if not application:
        return {"message": "Application not found"}

    db.delete(application)
    db.commit()

    return {"message": "Application deleted successfully"}