from sqlalchemy.orm import Session

from app.models.resume import Resume
from app.schemas.resume_schema import ResumeCreate

def create_resume(db: Session, resume: ResumeCreate):
    new_resume = Resume(
        full_name=resume.full_name,
        email=resume.email,
        phone=resume.phone 
    )
    db.add(new_resume)
    db.commit()
    db.refresh(new_resume)

    return new_resume