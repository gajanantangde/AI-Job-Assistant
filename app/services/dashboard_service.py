from sqlalchemy.orm import Session

from app.models.resume import Resume
from app.models.job_application import JobApplication


def get_dashboard_stats(db: Session):

    resumes = db.query(Resume).count()

    applications = db.query(JobApplication).count()

    applied = db.query(JobApplication).filter(
        JobApplication.status == "Applied"
    ).count()

    assessment = db.query(JobApplication).filter(
        JobApplication.status == "Assessment"
    ).count()

    interview = db.query(JobApplication).filter(
        JobApplication.status == "Interview"
    ).count()

    hr_round = db.query(JobApplication).filter(
        JobApplication.status == "HR Round"
    ).count()

    offer = db.query(JobApplication).filter(
        JobApplication.status == "Offer"
    ).count()

    rejected = db.query(JobApplication).filter(
        JobApplication.status == "Rejected"
    ).count()

    joined = db.query(JobApplication).filter(
        JobApplication.status == "Joined"
    ).count()

    return {

        "total_resumes": resumes,

        "total_applications": applications,

        "applied": applied,

        "assessment": assessment,

        "interview": interview,

        "hr_round": hr_round,

        "offer": offer,

        "rejected": rejected,

        "joined": joined,

    }

def get_recent_applications(db: Session):

    applications = (
        db.query(JobApplication)
        .order_by(JobApplication.id.desc())
        .limit(5)
        .all()
    )

    return applications

def get_applications_by_source(db: Session):

    applications = db.query(JobApplication).all()

    source_counts = {}

    for application in applications:

        source = application.source or "Other"

        if source not in source_counts:
            source_counts[source] = 0

        source_counts[source] += 1

    return [
        {
            "source": source,
            "count": count
        }
        for source, count in source_counts.items()
    ]

def get_upcoming_interviews(db: Session):

    applications = (
        db.query(JobApplication)
        .filter(
            JobApplication.interview_date.isnot(None)
        )
        .order_by(
            JobApplication.interview_date.asc()
        )
        .limit(5)
        .all()
    )

    return [
        {
            "id": application.id,
            "company": application.company,
            "job_title": application.job_title,
            "interview_date": application.interview_date,
            "status": application.status,
        }
        for application in applications
    ]