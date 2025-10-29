# app/services/course_service.py
from typing import Optional, List, Tuple
from uuid import UUID
from sqlalchemy import select, update, delete
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import NoResultFound

from app.models.courses_model import Course
from app.models.course_memberships_model import CourseMembership
from app.schemas.course_schema import CourseCreate, CourseUpdate
from app.schemas.course_membership_schema import CourseMembershipCreate

class CourseService:
    @staticmethod
    async def create_course(db: AsyncSession, payload: CourseCreate) -> Course:
        course = Course(
            title=payload.title,
            summary=payload.summary,
            description=payload.description,
            is_published=payload.is_published,
            organization_id=payload.organization_id,
            created_by=getattr(payload, "created_by", None),
        )
        db.add(course)
        await db.commit()
        await db.refresh(course)
        return course

    @staticmethod
    async def get_course(db: AsyncSession, course_id: UUID) -> Optional[Course]:
        q = select(Course).where(Course.id == course_id)
        result = await db.execute(q)
        return result.scalars().first()

    @staticmethod
    async def list_courses(
        db: AsyncSession,
        *,
        limit: int = 25,
        offset: int = 0,
        organization_id: Optional[UUID] = None,
        only_published: bool = False,
    ) -> List[Course]:
        q = select(Course)
        if organization_id:
            q = q.where(Course.organization_id == organization_id)
        if only_published:
            q = q.where(Course.is_published.is_(True))
        q = q.offset(offset).limit(limit)
        result = await db.execute(q)
        return result.scalars().all()

    @staticmethod
    async def update_course(db: AsyncSession, course_id: UUID, payload: CourseUpdate) -> Optional[Course]:
        course = await CourseService.get_course(db, course_id)
        if not course:
            return None
        # patch-style updates only for provided fields
        data = payload.model_dump(exclude_unset=True)
        for k, v in data.items():
            setattr(course, k, v)
        await db.commit()
        await db.refresh(course)
        return course

    @staticmethod
    async def delete_course(db: AsyncSession, course_id: UUID) -> bool:
        course = await CourseService.get_course(db, course_id)
        if not course:
            return False
        await db.delete(course)
        await db.commit()
        return True

    # -----------------------------
    # Membership helpers
    # -----------------------------
    @staticmethod
    async def add_membership(db: AsyncSession, payload: CourseMembershipCreate) -> CourseMembership:
        # Prevent duplicates
        q = select(CourseMembership).where(
            CourseMembership.user_id == payload.user_id,
            CourseMembership.course_id == payload.course_id,
        )
        existing = (await db.execute(q)).scalars().first()
        if existing:
            return existing

        membership = CourseMembership(
            user_id=payload.user_id,
            course_id=payload.course_id,
            role=getattr(payload, "role", "student"),
        )
        db.add(membership)
        await db.commit()
        await db.refresh(membership)
        return membership

    @staticmethod
    async def remove_membership(db: AsyncSession, membership_id: UUID) -> bool:
        q = select(CourseMembership).where(CourseMembership.id == membership_id)
        membership = (await db.execute(q)).scalars().first()
        if not membership:
            return False
        await db.delete(membership)
        await db.commit()
        return True

    @staticmethod
    async def list_members(db: AsyncSession, course_id: UUID) -> List[CourseMembership]:
        q = select(CourseMembership).where(CourseMembership.course_id == course_id)
        result = await db.execute(q)
        return result.scalars().all()
