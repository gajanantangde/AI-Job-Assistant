from app.optimizer.resume_optimizer import optimize_summary


def build_resume(
    resume,
    analysis,
    tailoring
):

    summary = optimize_summary(
        resume.summary or "",
        analysis
    )

    return {
        "full_name": resume.full_name,
        "email": resume.email,
        "phone": resume.phone,
        "summary": summary,
        "skills": resume.skills,
        "projects": resume.projects,
        "analysis": analysis,
        "tailoring": tailoring
    }