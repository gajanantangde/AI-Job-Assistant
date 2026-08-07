from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import SessionLocal

from app.services.dashboard_service import (
    get_dashboard_stats,
    get_recent_applications,
    get_applications_by_source,
    get_upcoming_interviews,
)
router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/stats")
def dashboard_stats(
    db: Session = Depends(get_db)
):
    return get_dashboard_stats(db)


@router.get("/recent-applications")
def recent_applications(
    db: Session = Depends(get_db)
):
    return get_recent_applications(db)

@router.get("/applications-by-source")
def applications_by_source(
    db: Session = Depends(get_db)
):
    return get_applications_by_source(db)

@router.get("/upcoming-interviews")
def upcoming_interviews(
    db: Session = Depends(get_db)
):
    return get_upcoming_interviews(db)

