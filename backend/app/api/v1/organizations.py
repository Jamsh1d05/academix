from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List
from app.db.session import get_db
from app.schemas.organization_shema import OrganizationCreate, OrganizationOut, OrganizationUpdate
from app.services.organization_service import OrganizationService

router = APIRouter(prefix="/organizations", tags=["Organizations"])


@router.post("/", response_model=OrganizationOut, status_code=status.HTTP_201_CREATED)
async def create_organization(org_data: OrganizationCreate, db: AsyncSession = Depends(get_db)):
    return await OrganizationService.create(db, org_data)


@router.get("/", response_model=List[OrganizationOut])
async def list_organizations(db: AsyncSession = Depends(get_db)):
    return await OrganizationService.get_all(db)


@router.get("/{org_id}", response_model=OrganizationOut)
async def get_organization(org_id: str, db: AsyncSession = Depends(get_db)):
    org = await OrganizationService.get_by_id(db, org_id)
    if not org:
        raise HTTPException(status_code=404, detail="Organization not found")
    return org


@router.put("/{org_id}", response_model=OrganizationOut)
async def update_organization(org_id: str, org_data: OrganizationUpdate, db: AsyncSession = Depends(get_db)):
    org = await OrganizationService.update(db, org_id, org_data)
    if not org:
        raise HTTPException(status_code=404, detail="Organization not found")
    return org


@router.delete("/{org_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_organization(org_id: str, db: AsyncSession = Depends(get_db)):
    org = await OrganizationService.delete(db, org_id)
    if not org:
        raise HTTPException(status_code=404, detail="Organization not found")
    return None
