from sqlalchemy import Column, Integer, String, Text

from app.database.database import Base


class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String)
    company = Column(String)
    location = Column(String)
    experience = Column(String)
    skills = Column(Text)
    description = Column(Text)
    source = Column(String)
    apply_link = Column(String)
    status = Column(String, default="New")