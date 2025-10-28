from datetime import datetime
from uuid import UUID
from pydantic import BaseModel

class CourseMembershipBase(BaseModel):
    user_id: UUID
    course_id: UUID
    role: str = "student"

class CourseMembershipCreate(CourseMembershipBase):
    pass

class CourseMembershipOut(CourseMembershipBase):
    id: UUID
    enrolled_at: datetime
    is_active: bool

    class Config:
        from_attributes = True
