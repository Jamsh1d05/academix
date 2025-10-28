from datetime import datetime
from uuid import UUID
from pydantic import BaseModel

class OrganizationBase(BaseModel):
    name: str
    slug: str
    is_active: bool = True

class OrganizationCreate(OrganizationBase):
    pass

class OrganizationUpdate(BaseModel):
    name: str | None = None
    is_active: bool | None = None

class OrganizationOut(OrganizationBase):
    id: UUID
    created_at: datetime

    class Config:
        from_attributes = True
