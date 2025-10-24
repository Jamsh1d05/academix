import enum
import uuid
from datetime import datetime
from sqlalchemy import (
    Column,
    String,
    ForeignKey,
    DateTime,
    Float,
    Enum,
    Text,
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.base import Base


class SubmissionStatus(enum.Enum):
    PENDING = "pending"
    GRADED = "graded"
    REQUIRES_REVIEW = "requires_review"


class Submission(Base):
    __tablename__ = "submissions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)

    assignment_id = Column(
        UUID(as_uuid=True),
        ForeignKey("assignments.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    student_id = Column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    submitted_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    # --- grading system ---
    graded_by_id = Column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )
    grade = Column(Float, nullable=True)
    feedback = Column(Text, nullable=True)
    status = Column(Enum(SubmissionStatus, name="submission_status_enum"), default=SubmissionStatus.PENDING, nullable=False)

    # --- relationships ---
    student = relationship("User", foreign_keys=[student_id], backref="submissions_made")
    graded_by = relationship("User", foreign_keys=[graded_by_id], backref="submissions_graded")
    assignment = relationship("Assignment", back_populates="submissions")
    files = relationship("File", back_populates="submission", cascade="all, delete-orphan")
