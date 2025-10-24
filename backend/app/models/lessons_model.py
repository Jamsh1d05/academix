import uuid
from datetime import datetime
from sqlalchemy import Column, String, Text, ForeignKey, DateTime, SmallInteger
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.base import Base


class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)

    module_id = Column(
        UUID(as_uuid=True),
        ForeignKey("modules.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    title = Column(String(255), nullable=False)
    content = Column(Text, nullable=True)
    order = Column(SmallInteger, nullable=False, default=0, index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    # --- relationships ---
    module = relationship("Module", back_populates="lessons")
    resources = relationship(
        "Resource",
        back_populates="lesson",
        cascade="all, delete-orphan",
        passive_deletes=True,
    )
    comments = relationship(
        "Comment",
        back_populates="lesson",
        cascade="all, delete-orphan",
        passive_deletes=True,
    )
