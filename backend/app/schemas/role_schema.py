from datetime import datetime
from uuid import UUID
from pydantic import BaseModel

class RoleBase(BaseModel):
    role: str
    description: str | None = None

class RoleCreate(RoleBase):
    pass

class RoleOut(RoleBase):
    id: UUID
    created_at: datetime

    class Config:
        from_attributes = True
