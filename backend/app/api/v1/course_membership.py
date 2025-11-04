# app/api/v1/course_membership_router.py
from uuid import UUID
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.services.course_membership_service import CourseMembershipService
from app.schemas.course_membership_schema import (
    CourseMembershipCreate,
    CourseMembershipUpdate,
    CourseMembershipResponse,
)

router = APIRouter(prefix="/memberships", tags=["Course Memberships"])


@router.post(
    "/",
    response_model=CourseMembershipResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Enroll user in a course",
    description="Creates a new course membership linking a user to a course with a specific role.",
)
async def create_membership(
    payload: CourseMembershipCreate,
    db: AsyncSession = Depends(get_db),
):
    service = CourseMembershipService(db)
    return await service.enroll_user(payload.user_id, payload.course_id, payload.role)


@router.get(
    "/",
    response_model=List[CourseMembershipResponse],
    summary="List all memberships (optional filters)",
    description="Returns all course memberships. Supports filtering by course_id or user_id.",
)
async def list_memberships(user_id: UUID | None = None, course_id: UUID | None = None, db: AsyncSession = Depends(get_db),):
    service = CourseMembershipService(db)
    if course_id:
        return await service.get_members_by_course(course_id)
    elif user_id:
        return await service.get_user_courses(user_id)
    raise HTTPException(status_code=400, detail="Provide either course_id or user_id")


@router.patch(
    "/{membership_id}/role",
    response_model=CourseMembershipResponse,
    summary="Change member role",
    description="Updates a member's role (student → instructor) in a specific course.",
)
async def update_membership_role(membership_id: UUID, payload: CourseMembershipUpdate, db: AsyncSession = Depends(get_db),):
    service = CourseMembershipService(db)
    return await service.change_role(membership_id, payload.role)


@router.delete("/", status_code=status.HTTP_200_OK, summary="Remove user from course", description="Deletes a user's membership from a specific course.",)
async def delete_membership(user_id: UUID, course_id: UUID, db: AsyncSession = Depends(get_db),):
    service = CourseMembershipService(db)
    return await service.remove_member(user_id, course_id)
