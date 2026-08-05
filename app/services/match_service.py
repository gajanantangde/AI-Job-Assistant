from app.services.matcher_service import calculate_match_score


def match_resume_with_jobs(resume_skills, jobs):

    matched_jobs = []

    for job in jobs:

        job_skills = job.skills.split(",")

        score = calculate_match_score(
            resume_skills,
            job_skills
        )

        matched_jobs.append({
            "title": job.title,
            "company": job.company,
            "score": score
        })

    matched_jobs.sort(
        key=lambda x: x["score"],
        reverse=True
    )

    return matched_jobs