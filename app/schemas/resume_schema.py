from pydantic import BaseModel

class ResumeCreate(BaseModel):
    full_name: str
    email: str
    phone: str
    