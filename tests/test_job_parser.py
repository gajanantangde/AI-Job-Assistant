from app.parser.job_parser import (
    extract_job_title,
    extract_location,
    extract_experience,
    extract_job_skills
)

job_description = """
Associate Analyst | Cloud Infrastructure | Bengaluru | Engineering | Hybrid Cloud Engineering

Location: Bengaluru

Freshers or candidates with up to 1 year of experience in BPO, Service Desk,
Monitoring or Operations Support.

Key skills required:

Python
SQL
ServiceNow
Monitoring
Operations Support
IT Service Management
SLA
"""

print("Title:")
print(extract_job_title(job_description))

print("\nLocation:")
print(extract_location(job_description))

print("\nExperience:")
print(extract_experience(job_description))

print("\nSkills:")
print(extract_job_skills(job_description))