from datetime import datetime
from uuid import UUID
from pydantic import BaseModel

class ResourceBase(BaseModel):
    title: str | None = None
    type: str | None = None
    url: str | None = None
    metadata_json: str | None = None

class ResourceCreate(ResourceBase):
    lesson_id: UUID | None = None
    course_id: UUID | None = None

class ResourceOut(ResourceBase):
    id: UUID
    created_at: datetime

    class Config:
        from_attributes = True
