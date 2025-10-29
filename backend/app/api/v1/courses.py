# app/api/v1/courses.py
from typing import List
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.ext.asyncio import AsyncSession
from app.services.course_service import CourseService
from app.db.session import get_db
from app.schemas.course_schema import (
    CourseCreate,
    CourseOut,
    CourseUpdate
)
from app.schemas.course_membership_schema import(    
    CourseMembershipCreate,
    CourseMembershipOut
)
 

router = APIRouter(prefix="/courses", tags=["Courses"])


@router.post("/", response_model=CourseOut, status_code=status.HTTP_201_CREATED)
async def create_course(payload: CourseCreate, db: AsyncSession = Depends(get_db)):
    course = await CourseService.create_course(db, payload)
    return course


@router.get("/", response_model=List[CourseOut])
async def list_courses(
    db: AsyncSession = Depends(get_db),
    limit: int = Query(25, ge=1, le=200),
    offset: int = Query(0, ge=0),
    organization_id: UUID | None = None,
    only_published: bool = Query(False),
):
    courses = await CourseService.list_courses(
        db, limit=limit, offset=offset, organization_id=organization_id, only_published=only_published
    )
    return courses


@router.get("/{course_id}", response_model=CourseOut)
async def get_course(course_id: UUID, db: AsyncSession = Depends(get_db)):
    course = await CourseService.get_course(db, course_id)
    if not course:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Course not found")
    return course


@router.patch("/{course_id}", response_model=CourseOut)
async def update_course(course_id: UUID, payload: CourseUpdate, db: AsyncSession = Depends(get_db)):
    course = await CourseService.update_course(db, course_id, payload)
    if not course:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Course not found")
    return course


@router.delete("/{course_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_course(course_id: UUID, db: AsyncSession = Depends(get_db)):
    deleted = await CourseService.delete_course(db, course_id)
    if not deleted:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Course not found")


# -----------------------------
# Membership endpoints
# -----------------------------
@router.post("/{course_id}/members", response_model=CourseMembershipOut, status_code=status.HTTP_201_CREATED)
async def add_member_to_course(course_id: UUID, payload: CourseMembershipCreate, db: AsyncSession = Depends(get_db)):
    if payload.course_id != course_id:
        raise HTTPException(status_code=400, detail="course_id mismatch")
    membership = await CourseService.add_membership(db, payload)
    return membership


@router.get("/{course_id}/members", response_model=List[CourseMembershipOut])
async def list_course_members(course_id: UUID, db: AsyncSession = Depends(get_db)):
    members = await CourseService.list_members(db, course_id)
    return members


@router.delete("/members/{membership_id}", status_code=status.HTTP_204_NO_CONTENT)
async def remove_membership(membership_id: UUID, db: AsyncSession = Depends(get_db)):
    ok = await CourseService.remove_membership(db, membership_id)
    if not ok:
        raise HTTPException(status_code=404, detail="Membership not found")
