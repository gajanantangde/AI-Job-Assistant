from fastapi import APIRouter

from app.services.ai_service import analyze_resume_with_ai

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.get("/test")
def test_ai():

    response = analyze_resume_with_ai(
        resume_skills=["Python", "SQL", "Power BI"],
        job_skills=["Python", "SQL", "Docker"],
        score=66.67
    )

    return {
        "response": response
    }