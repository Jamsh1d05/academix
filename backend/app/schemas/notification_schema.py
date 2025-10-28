from datetime import datetime
from uuid import UUID
from pydantic import BaseModel, Field


#Base 
class NotificationBase(BaseModel):
    user_id: UUID = Field(..., description="ID of the user who receives the notification")
    title: str = Field(..., max_length=255, description="Short title of the notification")
    message: str = Field(..., description="Detailed notification message")
    is_read: bool = Field(default=False, description="Whether the notification has been read")


#Create
class NotificationCreate(NotificationBase):
    """Used when creating a new notification"""
    pass


#Update
class NotificationUpdate(BaseModel):
    """Used for updating notification status (e.g., marking as read)"""
    is_read: bool | None = None


#Output
class NotificationOut(NotificationBase):
    id: UUID
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
