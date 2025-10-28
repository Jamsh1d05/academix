from datetime import datetime
from uuid import UUID
from pydantic import BaseModel

class AuditLogBase(BaseModel):
    action: str
    object_type: str | None = None
    object_id: str | None = None
    details: str | None = None

class AuditLogCreate(AuditLogBase):
    user_id: UUID | None = None

class AuditLogOut(AuditLogBase):
    id: UUID
    created_at: datetime
    user_id: UUID | None = None

    class Config:
        from_attributes = True
