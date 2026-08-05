import os
import shutil

from fastapi import UploadFile

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

    # Return result
    return {
        "file_path": file_path,
        **parsed_data
    }