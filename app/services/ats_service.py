from app.services.matcher_service import calculate_match_score


def analyze_resume(resume_skills, job_skills):

    score = calculate_match_score(
        resume_skills,
        job_skills
    )

    matched = []

    missing = []

    resume_set = {
        skill.strip().lower()
        for skill in resume_skills
    }

    for skill in job_skills:

        if skill.strip().lower() in resume_set:
            matched.append(skill)

        else:
            missing.append(skill)

    if score >= 80:
        recommendation = "Excellent Match"
    elif score >= 60:
        recommendation = "Good Match"
    elif score >= 40:
        recommendation = "Average Match"
    else:
        recommendation = "Needs Improvement"

    return {
        "score": score,
        "matched_skills": matched,
        "missing_skills": missing,
        "recommendation": recommendation
    }