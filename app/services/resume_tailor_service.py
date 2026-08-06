from app.services.ats_service import analyze_resume


def tailor_resume(
    resume_skills,
    job_skills
):

    analysis = analyze_resume(
        resume_skills,
        job_skills
    )

    suggestions = []

    if analysis["score"] < 80:

        suggestions.append(
            "Update your Skills section to include relevant technologies you already know."
        )

        suggestions.append(
            "Move the most relevant projects to the top of your resume."
        )

        suggestions.append(
            "Update your Professional Summary based on the job description."
        )

        suggestions.append(
            "Quantify your project achievements with numbers."
        )

    return {
        "analysis": analysis,
        "tailoring_suggestions": suggestions
    }