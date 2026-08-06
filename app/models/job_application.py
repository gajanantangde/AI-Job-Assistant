from sqlalchemy import Column, Integer, String, Text, Date

from app.database.database import Base


class JobApplication(Base):

    __tablename__ = "job_applications"

    id = Column(Integer, primary_key=True, index=True)

    company = Column(String(150))

    job_title = Column(String(150))

    application_date = Column(Date)

    status = Column(String(50))

    source = Column(String(100))

    apply_link = Column(String(500))

    interview_date = Column(Date)

    notes = Column(Text)