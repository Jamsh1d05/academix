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
    is_active: bool | None = None

class OrganizationOut(BaseModel):
    id: UUID
    name: str
    slug: str
    is_active: bool = True
    created_at: datetime

    class Config:
        from_attributes = True


