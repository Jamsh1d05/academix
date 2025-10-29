from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.users_model import User
from app.schemas.user_schema import UserCreate, UserUpdate
from app.core.security import get_password_hash, verify_password
from uuid import UUID


class UserService:
    @staticmethod   
    async def get_user_by_email(db: AsyncSession, email: str):
        query = select(User).where(User.email == email)
        result = await db.execute(query)
        return result.scalars().first()
    
    @staticmethod
    async def get_user_by_id(db: AsyncSession, user_id = UUID):
        query = select(User).where(User.id == user_id)
        result = await db.execute(query)
        return result.scalars().first()
    
    @staticmethod
    async def create_user(db: AsyncSession, user_in: UserCreate) -> User:
        hashed_password = get_password_hash(user_in.password)
        user = User(
            username = user_in.username,
            email=user_in.email,
            full_name=user_in.full_name,
            hashed_password=hashed_password
        )
        db.add(user)
        await db.commit()
        await db.refresh(user)
        return user
    
    @staticmethod
    async def update_user(db: AsyncSession, user_id : UUID, user_in: UserUpdate) -> User:
        user = await UserService.get_user_by_id(db, user_id)
        if not user :
            return None
        for field, value in user_in.model_dump(exclude_unset=True).items():
            setattr(user, field, value)
        await db.commit()
        await db.refresh(user)
        return user

    @staticmethod
    async def delete_user(db: AsyncSession, user_id: UUID):
        user = await UserService.get_user_by_id(db, user_id)
        if user: 
            await db.delete(user)
            await db.commit()
            return True
        return False
    
    