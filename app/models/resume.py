from sqlalchemy import Column, Integer, String, Text
from app.database.database import Base

class Resume(Base):
    __tablename__ = "resumes"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String)
    email = Column(String)
    phone = Column(String)

    linkedin = Column(String(255))
    github = Column(String(255))
    location = Column(String(100))

    summary = Column(Text)
    skills = Column(Text)
    education = Column(Text)
    experience = Column(Text)
    projects = Column(Text)
    certifications = Column(Text)

    # NEW
    resume_file = Column(String(255))