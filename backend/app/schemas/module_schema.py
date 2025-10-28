from datetime import datetime
from uuid import UUID
from pydantic import BaseModel

class ModuleBase(BaseModel):
    title: str
    description: str | None = None
    order: int = 0

class ModuleCreate(ModuleBase):
    course_id: UUID

class ModuleUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    order: int | None = None

class ModuleOut(ModuleBase):
    id: UUID
    created_at: datetime

    class Config:
        from_attributes = True
