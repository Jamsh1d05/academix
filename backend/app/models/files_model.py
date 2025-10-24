import uuid
from sqlalchemy import Column, String, Integer, ForeignKey, DateTime, func, UniqueConstraint
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.db.base import Base


class File(Base):
    __tablename__ = "files"
    __table_args__ = (
        UniqueConstraint("submission_id", "filename", name="uix_submission_filename"),
    )

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    submission_id = Column(UUID(as_uuid=True), ForeignKey("submissions.id", ondelete="CASCADE"), nullable=False, index=True)

    filename = Column(String(255), nullable=False)
    file_path = Column(String(512), nullable=False)      
    content_type = Column(String(100), nullable=False)   
    size = Column(Integer, nullable=True)               
    uploaded_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationship
    submission = relationship("Submission", back_populates="files")
