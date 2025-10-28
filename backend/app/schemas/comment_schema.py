from datetime import datetime
from uuid import UUID
from pydantic import BaseModel

class CommentBase(BaseModel):
    content: str

class CommentCreate(CommentBase):
    user_id: UUID | None = None
    lesson_id: UUID | None = None
    parent_id: UUID | None = None

class CommentOut(CommentBase):
    id: UUID
    created_at: datetime
    user_id: UUID | None = None
    parent_id: UUID | None = None

    class Config:
        from_attributes = True
