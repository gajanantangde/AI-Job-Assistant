from app.llm.factory import get_llm


def analyze_resume_with_ai(
    resume_skills,
    job_skills,
    score
):

    llm = get_llm()

    prompt = f"""
You are an expert ATS Resume Reviewer.

Resume Skills:
{resume_skills}

Job Skills:
{job_skills}

Current ATS Score:
{score}

Provide:

1. Explain the score.
2. Strengths of the resume.
3. Missing skills.
4. Resume improvement suggestions.
5. Learning roadmap.
6. Interview preparation topics.

Return a clean and professional response.
"""

    return llm.generate(prompt)