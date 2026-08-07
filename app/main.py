from fastapi import FastAPI

from app.database.database import Base, engine
from app.models.resume import Resume
from app.routers.resume_router import router as resume_router
from app.routers.upload_router import router as upload_router
from app.routers.job_router import router as job_router
from app.models.job import Job
from app.routers.match_router import router as match_router
from app.routers.ats_router import router as ats_router
from app.routers.ai_router import router as ai_router
from app.models.job_application import JobApplication
from app.routers.job_application_router import router as job_application_router
from app.routers.resume_tailor_router import router as resume_tailor_router
from app.routers.resume_generator_router import router as resume_generator_router
from fastapi.middleware.cors import CORSMiddleware
from app.routers.dashboard_router import router as dashboard_router

# Create all database tables
Base.metadata.create_all(bind=engine)

app=FastAPI(
    title="AI Jon Assistant API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Router
app.include_router(resume_router)

@app.get("/")
def home():
    return{
        "message":"Hello Gaju!"
    }

app.include_router(upload_router)
app.include_router(job_router)
app.include_router(match_router)
app.include_router(ats_router)
app.include_router(ai_router)
app.include_router(job_application_router)
app.include_router(resume_tailor_router)
app.include_router(resume_generator_router)
app.include_router(dashboard_router)
