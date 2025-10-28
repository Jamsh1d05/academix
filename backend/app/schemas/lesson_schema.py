from datetime import datetime
from uuid import UUID
from pydantic import BaseModel

class LessonBase(BaseModel):
    title: str
    content: str | None = None
    order: int = 0

class LessonCreate(LessonBase):
    module_id: UUID

class LessonUpdate(BaseModel):
    title: str | None = None
    content: str | None = None
    order: int | None = None

class LessonOut(LessonBase):
    id: UUID
    created_at: datetime

    class Config:
        from_attributes = True
