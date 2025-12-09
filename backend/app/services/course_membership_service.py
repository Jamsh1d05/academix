import uuid
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, delete
from fastapi import HTTPException, status

from app.models.courses_model import Course
from app.models.course_memberships_model import CourseMembership
from app.models.users_model import User


class CourseMembershipService:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def enroll_user(
        self,
        user_id: uuid.UUID,
        course_id: uuid.UUID,
        role: str = "student",
    ) -> CourseMembership:

        stmt = select(CourseMembership).where(
            CourseMembership.user_id == user_id,
            CourseMembership.course_id == course_id,
        )
        result = await self.db.execute(stmt)
        existing = result.scalars().first()

        if existing:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User is already enrolled in this course.",
            )

        user = await self.db.get(User, user_id)
        course = await self.db.get(Course, course_id)
        if not user or not course:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User or course not found.",
            )

        membership = CourseMembership(
            user_id=user_id,
            course_id=course_id,
            role=role,
        )
        self.db.add(membership)
        await self.db.commit()
        await self.db.refresh(membership)
        return membership

    async def get_members_by_course(self, course_id: uuid.UUID):
        stmt = (
            select(CourseMembership)
            .where(CourseMembership.course_id == course_id)
            .order_by(CourseMembership.enrolled_at.desc())
        )
        result = await self.db.execute(stmt)
        return result.scalars().all()


    async def get_user_courses(self, user_id: uuid.UUID):
        stmt = (
            select(CourseMembership)
            .where(CourseMembership.user_id == user_id)
            .order_by(CourseMembership.enrolled_at.desc())
        )
        result = await self.db.execute(stmt)
        return result.scalars().all()

    async def change_role(self, membership_id: uuid.UUID, new_role: str):
        membership = await self.db.get(CourseMembership, membership_id)
        if not membership:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Membership not found.",
            )
        membership.role = new_role
        await self.db.commit()
        await self.db.refresh(membership)
        return membership

    async def remove_member(self, user_id: uuid.UUID, course_id: uuid.UUID):
        stmt = delete(CourseMembership).where(
            CourseMembership.user_id == user_id,
            CourseMembership.course_id == course_id,
        ).returning(CourseMembership.id)
        result = await self.db.execute(stmt)
        deleted = result.first()
        if not deleted:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Membership not found.",
            )
        await self.db.commit()
        return {"status": "success", "message": "User removed from course."}
