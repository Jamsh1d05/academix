from fastapi import FastAPI
from app.api.v1 import users, courses, organizations, course_membership

app = FastAPI(title="Academix API")

app.include_router(users.router)
app.include_router(courses.router)
app.include_router(course_membership.router)
app.include_router(organizations.router)