from fastapi import FastAPI

from app.database.database import Base, engine
from app.models.resume import Resume
from app.routers.resume_router import router as resume_router
from app.routers.upload_router import router as upload_router
from app.routers.job_router import router as job_router
from app.models.job import Job
from app.routers.match_router import router as match_router



# Create all database tables
Base.metadata.create_all(bind=engine)

app=FastAPI(
    title="AI Jon Assistant API",
    version="1.0.0"
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