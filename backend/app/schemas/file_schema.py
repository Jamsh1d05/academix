from datetime import datetime
from uuid import UUID
from pydantic import BaseModel

class FileBase(BaseModel):
    filename: str
    file_path: str
    content_type: str
    size: str | None = None

class FileCreate(FileBase):
    submission_id: UUID

class FileUpdate(FileBase):
    pass

class FileOut(FileBase):
    id: UUID
    uploaded_at: datetime

    class Config:
        from_attributes = True

