from datetime import datetime
from uuid import UUID
from pydantic import BaseModel, EmailStr, Field
from collections import OrderedDict

class UserBase(BaseModel):
    username: str
    email: EmailStr
    full_name: str | None = None
    is_active: bool = True
    is_superuser: bool = False

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)

class UserUpdate(BaseModel):
    username: str | None = None
    full_name: str | None = None
    password: str | None = Field(None, min_length=8)
    is_active: bool | None = None
    is_superuser: bool | None = None

class UserOut(BaseModel):
    id: UUID
    username: str
    email: EmailStr
    full_name: str | None = None
    is_active: bool = True
    is_superuser: bool = False
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
