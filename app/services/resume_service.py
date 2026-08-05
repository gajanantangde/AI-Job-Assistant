from sqlalchemy.orm import Session

from app.models.resume import Resume
from app.schemas.resume_schema import ResumeCreate

def create_resume(db: Session, resume: ResumeCreate):
    new_resume = Resume(
        full_name=resume.full_name,
        email=resume.email,
        phone=resume.phone,

        linkedin=resume.linkedin,
        github=resume.github,
        location=resume.location,
        summary=resume.summary,

        skills=resume.skills,
        education=resume.education,
        experience=resume.experience,
        projects=resume.projects,
        certifications=resume.certifications
    )

    db.add(new_resume)
    db.commit()
    db.refresh(new_resume)

    return new_resume

def get_all_resumes(db: Session):
    return db.query(Resume).all()

def get_resume_by_id(db: Session, resume_id:int):
    return db.query(Resume).filter(Resume.id == resume_id).first()

def update_resume(db: Session, resume_id: int, resume: ResumeCreate):
    existing_resume = db.query(Resume).filter(
        Resume.id == resume_id
    ).first()

    if existing_resume:

        existing_resume.full_name = resume.full_name
        existing_resume.email = resume.email
        existing_resume.phone = resume.phone

        existing_resume.linkedin = resume.linkedin
        existing_resume.github = resume.github
        existing_resume.location = resume.location
        existing_resume.summary = resume.summary

        existing_resume.skills = resume.skills
        existing_resume.education = resume.education
        existing_resume.experience = resume.experience
        existing_resume.projects = resume.projects
        existing_resume.certifications = resume.certifications

        db.commit()
        db.refresh(existing_resume)

    return existing_resume

def delete_resume(db: Session, resume_id: int):
    resume = db.query(Resume).filter(Resume.id == resume_id).first()

    if resume:
        db.delete(resume)
        db.commit()

    return {"message": "Resume deleted successfully"}

def get_resume_by_id(db: Session, resume_id: int):
    return db.query(Resume).filter(
        Resume.id == resume_id
    ).first()