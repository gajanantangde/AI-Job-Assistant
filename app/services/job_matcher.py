from app.services.matcher_service import calculate_match_score


def find_best_jobs(resume_skills, jobs):

    matched_jobs = []

    for job in jobs:

        score = calculate_match_score(
            resume_skills,
            job["skills"]
        )

        job["match_score"] = score

        matched_jobs.append(job)

    matched_jobs.sort(
        key=lambda x: x["match_score"],
        reverse=True
    )

    return matched_jobs