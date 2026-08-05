import fitz

def extract_text(file_path: str):
    doc = fitz.open(file_path)

    text = ""

    for page in doc:
        text += page.get_text()

    doc.close()

    return text

from app.parser.information_extractor import(
    extract_name,
    extract_email,
    extract_phone,
    extract_skills,
    extract_section
)

def parse_resume(text: str):
    return {
        "name": extract_name(text),
        "email": extract_email(text),
        "phone": extract_phone(text),
        "skills": extract_skills(text),

        "education": extract_section(
            text,
            "Education",
            ["Projects", "Skills", "Experience", "Languages"]
        ),

        "experience": extract_section(
            text,
            "Experience",
            ["Projects", "Education", "Skills"]
        ),

        "projects": extract_section(
            text,
            "Projects",
            ["Education", "Languages", "Skills"]
        )
    }