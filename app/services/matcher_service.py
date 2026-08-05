def calculate_match_score(resume_skills, job_skills):

    resume_set = set(skill.strip().lower() for skill in resume_skills)
    job_set = set(skill.strip().lower() for skill in job_skills)

    print("Resume Skills:", resume_set)
    print("Job Skills:", job_set)

    matched = resume_set.intersection(job_set)

    print("Matched Skills:", matched)

    if len(job_set) == 0:
        return 0

    score = (len(matched) / len(job_set)) * 100

    print("Score:", score)

    return round(score, 2)

if __name__ == "__main__":

    resume = [
        "Python",
        "SQL",
        "Power BI",
        "Git"
    ]

    job = [
        "Python",
        "SQL",
        "Docker",
        "AWS"
    ]

    print(calculate_match_score(resume, job))