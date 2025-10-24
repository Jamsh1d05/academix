import uuid
from sqlalchemy import Column, String, Text, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
from app.db.base import Base


class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"), nullable=True, index=True)

    action = Column(String(255), nullable=False)
    object_type = Column(String(128))  
    object_id = Column(UUID(as_uuid=True), nullable=True)
    details = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
