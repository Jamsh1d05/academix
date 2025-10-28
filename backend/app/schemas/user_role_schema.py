from uuid import UUID
from pydantic import BaseModel

class UserRoleBase(BaseModel):
    user_id: UUID
    role_id: UUID

class UserRoleCreate(UserRoleBase):
    pass

class UserRoleOut(UserRoleBase):
    id: UUID

    class Config:
        from_attributes = True
