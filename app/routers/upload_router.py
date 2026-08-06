from fastapi import APIRouter, UploadFile, File
from app.services.upload_service import save_resume

router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)

@router.post("/resume")
def upload_resume(file: UploadFile = File(...)):
    result = save_resume(file)
    return result