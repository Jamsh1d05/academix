from datetime import datetime
from uuid import UUID
from pydantic import BaseModel
from enum import Enum

class SubmissionStatus(str, Enum):
    pending = "pending"
    graded = "graded"
    requires_review = "requires_review"

class SubmissionBase(BaseModel):
    assignment_id: UUID
    student_id: UUID

class SubmissionCreate(SubmissionBase):
    pass

class SubmissionOut(SubmissionBase):
    id: UUID
    submitted_at: datetime
    grade: float | None = None
    feedback: str | None = None
    status: SubmissionStatus

    class Config:
        from_attributes = True
