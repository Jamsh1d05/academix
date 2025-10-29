import uuid
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.organiztions_model import Organization
from app.schemas.organization_shema import OrganizationCreate, OrganizationUpdate


class OrganizationService:
    @staticmethod
    async def create(db: AsyncSession, org_data: OrganizationCreate) -> Organization:
        org = Organization(id=uuid.uuid4(), **org_data.model_dump())
        db.add(org)
        await db.commit()
        await db.refresh(org)
        return org

    @staticmethod
    async def get_all(db: AsyncSession):
        result = await db.execute(select(Organization))
        return result.scalars().all()

    @staticmethod
    async def get_by_id(db: AsyncSession, org_id: uuid.UUID):
        result = await db.execute(select(Organization).where(Organization.id == org_id))
        return result.scalar_one_or_none()

    @staticmethod
    async def update(db: AsyncSession, org_id: uuid.UUID, org_data: OrganizationUpdate):
        org = await OrganizationService.get_by_id(db, org_id)
        if not org:
            return None
        for key, value in org_data.model_dump(exclude_unset=True).items():
            setattr(org, key, value)
        await db.commit()
        await db.refresh(org)
        return org

    @staticmethod
    async def delete(db: AsyncSession, org_id: uuid.UUID):
        org = await OrganizationService.get_by_id(db, org_id)
        if not org:
            return None
        await db.delete(org)
        await db.commit()
        return org
