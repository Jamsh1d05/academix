from datetime import datetime
from uuid import UUID
from pydantic import BaseModel

class AssignmentBase(BaseModel):
    title: str
    description: str | None = None
    max_score: int = 100
    due_date: datetime | None = None

class AssignmentCreate(AssignmentBase):
    course_id: UUID

class AssignmentOut(AssignmentBase):
    id: UUID
    created_at: datetime

    class Config:
        from_attributes = True
