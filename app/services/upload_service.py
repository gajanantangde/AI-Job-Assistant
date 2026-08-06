import os
import shutil

from fastapi import UploadFile
from app.database.database import SessionLocal
from app.schemas.resume_schema import ResumeCreate
from app.services.resume_service import create_resume
from app.parser.resume_parser import extract_text, parse_resume

UPLOAD_FOLDER = "uploads"


def save_resume(file: UploadFile):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text from PDF
    text = extract_text(file_path)

    # Parse resume
    parsed_data = parse_resume(text)
    db = SessionLocal()
    resume = ResumeCreate(
    full_name=parsed_data.get("name", ""),
    email=parsed_data.get("email", ""),
    phone=parsed_data.get("phone", ""),

    linkedin="",
    github="",
    location="",
    summary="",

    skills=", ".join(parsed_data.get("skills", [])),
    education=parsed_data.get("education", ""),
    experience=parsed_data.get("experience", ""),
    projects=parsed_data.get("projects", ""),
    certifications="",

    # NEW
    resume_file=file.filename,
    )
    saved_resume = create_resume(db, resume)
    db.close()
    # Return result
    return {
    "message": "Resume uploaded and saved successfully",
    "resume_id": saved_resume.id,
    "file_path": file_path,
    **parsed_data
    }