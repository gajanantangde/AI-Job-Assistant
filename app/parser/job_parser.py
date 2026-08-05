import re

def extract_job_title(text: str):
    lines = text.split("\n")
    for line in lines:
        line = line.strip()

        if len(line) > 5:
            return line
    return ""

def extract_location(text: str):
    pattern = r"Location:\s*(.*)"
    match = re.search(pattern, text, re.IGNORECASE)
    if match:
        return match.group(1).strip()
    return ""

def extract_experience(text: str):
    pattern = r"(\d+\s*-\s*\d+\s*Years?)"
    match = re.search(pattern, text, re.IGNORECASE)
    if match:
        return match.group(1)
    return "Freshers"

def extract_job_skills(text: str):

    skills_db = [
        "Python",
        "SQL",
        "Power BI",
        "Excel",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Git",
        "GitHub",
        "MySQL",
        "Docker",
        "AWS",
        "Azure",
        "Linux",
        "ServiceNow",
        "IT Service Management",
        "Incident Management",
        "Monitoring",
        "Operations Support",
        "SLA",
        "Networking",
        "Java",
        "C++",
        "FastAPI",
        "Flask",
        "Django"
    ]

    found_skills = []

    text_lower = text.lower()

    for skill in skills_db:

        if skill.lower() in text_lower:
            found_skills.append(skill)

    return found_skills