from datetime import datetime
from uuid import UUID
from pydantic import BaseModel

class CourseBase(BaseModel):
    title: str
    summary: str | None = None
    description: str | None = None
    is_published: bool = False

class CourseCreate(CourseBase):
    organization_id: UUID | None = None

class CourseUpdate(BaseModel):
    title: str | None = None
    summary: str | None = None
    description: str | None = None
    is_published: bool | None = None

class CourseOut(CourseBase):
    id: UUID
    public_id: UUID
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
