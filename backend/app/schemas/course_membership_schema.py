import uuid
from datetime import datetime
from pydantic import BaseModel, Field


class CourseMembershipBase(BaseModel):
    role: str = Field(default="student", example="student")
    is_active: bool = True


class CourseMembershipCreate(CourseMembershipBase):
    user_id: uuid.UUID
    course_id: uuid.UUID


class CourseMembershipUpdate(BaseModel):
    role: str = Field(..., example="instructor")


class CourseMembershipResponse(BaseModel):
    id: uuid.UUID
    user_id: uuid.UUID
    course_id: uuid.UUID
    role: str
    is_active: bool
    enrolled_at: datetime

    class Config:
        from_attributes = True
