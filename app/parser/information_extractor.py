import re
from app.parser.skill_dictionary import SKILLS

def extract_email(text: str):
    pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    match = re.search(pattern, text)

    if match:
        return match.group()

    return None

def extract_phone(text:str):
    pattern=r"(\+91[- ]?)?[6-9]\d{9}"
    match =re.search(pattern, text)

    if match:
        return match.group()
    return None

def extract_name(text: str):
    lines = text.split("\n")

    for line in lines:
        line = line.strip()
        if line:
            return line

    return None

def extract_skills(text: str):
    found_skills = []
    text = text.lower()

    for skill in SKILLS:
        if skill.lower() in text:
            found_skills.append(skill)

    return found_skills

def extract_section(text: str, start_keyword:str, end_keyword: list):
    text_lower = text.lower()
    start = text_lower.find(start_keyword.lower())

    if start == -1:
        return ""

    end = len(text)

    for keyword in end_keyword:
        index = text_lower.find(keyword.lower(), start + len(start_keyword))

        if index != -1 and index <end:
            end = index
    return text[start:end].strip()
