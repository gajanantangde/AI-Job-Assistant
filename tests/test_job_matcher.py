from app.services.job_matcher import find_best_jobs

resume = [
    "Python",
    "SQL",
    "Power BI",
    "Git"
]

jobs = [
    {
        "title": "Data Analyst",
        "company": "ABC",
        "skills": ["Python", "SQL", "Excel"]
    },
    {
        "title": "ML Engineer",
        "company": "XYZ",
        "skills": ["Python", "TensorFlow", "AWS"]
    },
    {
        "title": "Backend Developer",
        "company": "Tech",
        "skills": ["Java", "Spring", "Docker"]
    }
]

result = find_best_jobs(resume, jobs)

for job in result:
    print(job)