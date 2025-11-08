from fastapi import FastAPI, APIRouter, HTTPException, Depends
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from typing import List
from datetime import timedelta

# Import models and utilities
from models import (
    Notice, NoticeCreate, NoticeUpdate,
    Course, CourseCreate, CourseUpdate,
    Faculty, FacultyCreate, FacultyUpdate,
    Gallery, GalleryCreate,
    Enquiry, EnquiryCreate, EnquiryStatusUpdate,
    StudyMaterial, StudyMaterialCreate,
    AdminLogin, TokenResponse, AdminResponse,
    StudyMaterialAuth, Statistics
)
from auth import (
    verify_password, get_password_hash, create_access_token,
    get_current_admin, verify_study_material_password
)
from database import (
    db, notices_collection, courses_collection, faculty_collection,
    gallery_collection, enquiries_collection, study_materials_collection,
    admins_collection, generate_id, get_current_date, init_db
)
from utils import serialize_doc, serialize_docs

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI(title="Chanakya Guru Academy API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# ==================== PUBLIC ENDPOINTS ====================

@api_router.get("/")
async def root():
    return {"message": "Chanakya Guru Academy API", "status": "active"}

# Notices Endpoints
@api_router.get("/notices", response_model=List[Notice])
async def get_notices():
    """Get all active notices"""
    notices = await notices_collection.find({"isActive": True}).sort("date", -1).to_list(100)
    return serialize_docs(notices)

# Courses Endpoints
@api_router.get("/courses", response_model=List[Course])
async def get_courses():
    """Get all courses"""
    courses = await courses_collection.find().to_list(100)
    return serialize_docs(courses)

@api_router.get("/courses/{course_id}", response_model=Course)
async def get_course(course_id: str):
    """Get single course by ID"""
    course = await courses_collection.find_one({"_id": course_id})
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return serialize_doc(course)

# Faculty Endpoints
@api_router.get("/faculty", response_model=List[Faculty])
async def get_faculty():
    """Get all active faculty members"""
    faculty = await faculty_collection.find({"isActive": True}).to_list(100)
    return serialize_docs(faculty)

# Gallery Endpoints
@api_router.get("/gallery", response_model=List[Gallery])
async def get_gallery():
    """Get all gallery images"""
    gallery = await gallery_collection.find().to_list(100)
    return serialize_docs(gallery)

# Enquiries Endpoint
@api_router.post("/enquiries")
async def create_enquiry(enquiry: EnquiryCreate):
    """Create new enquiry (public)"""
    enquiry_dict = enquiry.dict(by_alias=True)
    enquiry_dict["_id"] = generate_id()
    enquiry_dict["date"] = get_current_date()
    enquiry_dict["status"] = "pending"
    
    await enquiries_collection.insert_one(enquiry_dict)
    return {"message": "Enquiry submitted successfully", "id": enquiry_dict["_id"]}

# Statistics Endpoint
@api_router.get("/statistics", response_model=Statistics)
async def get_statistics():
    """Get academy statistics"""
    return Statistics()

# Study Materials Auth
@api_router.post("/study-materials/auth")
async def authenticate_study_materials(auth: StudyMaterialAuth):
    """Authenticate for study materials access"""
    if verify_study_material_password(auth.password):
        # In production, return a JWT token instead
        return {"message": "Authentication successful", "access": "granted"}
    raise HTTPException(status_code=401, detail="Invalid password")

@api_router.get("/study-materials", response_model=List[StudyMaterial])
async def get_study_materials():
    """Get all study materials (authentication checked on frontend)"""
    materials = await study_materials_collection.find().to_list(100)
    return serialize_docs(materials)

# ==================== ADMIN ENDPOINTS ====================

# Admin Authentication
@api_router.post("/admin/login", response_model=TokenResponse)
async def admin_login(credentials: AdminLogin):
    """Admin login"""
    admin = await admins_collection.find_one({"username": credentials.username})
    if not admin or not verify_password(credentials.password, admin["password"]):
        raise HTTPException(status_code=401, detail="Invalid username or password")
    
    # Create access token
    access_token = create_access_token(
        data={"sub": admin["username"], "role": admin.get("role", "admin")}
    )
    
    return TokenResponse(
        access_token=access_token,
        admin=AdminResponse(
            username=admin["username"],
            email=admin.get("email"),
            role=admin.get("role", "admin")
        )
    )

@api_router.get("/admin/verify")
async def verify_admin(current_admin: dict = Depends(get_current_admin)):
    """Verify admin token"""
    return {"username": current_admin.get("sub"), "role": current_admin.get("role")}

# Admin - Notices
@api_router.post("/admin/notices", response_model=Notice)
async def create_notice(notice: NoticeCreate, current_admin: dict = Depends(get_current_admin)):
    """Create new notice (admin only)"""
    notice_dict = notice.dict()
    notice_dict["_id"] = generate_id()
    notice_dict["date"] = get_current_date()
    notice_dict["isActive"] = True
    
    await notices_collection.insert_one(notice_dict)
    return serialize_doc(notice_dict)

@api_router.put("/admin/notices/{notice_id}", response_model=Notice)
async def update_notice(notice_id: str, notice: NoticeUpdate, current_admin: dict = Depends(get_current_admin)):
    """Update notice (admin only)"""
    update_data = {k: v for k, v in notice.dict().items() if v is not None}
    if not update_data:
        raise HTTPException(status_code=400, detail="No data to update")
    
    result = await notices_collection.update_one({"_id": notice_id}, {"$set": update_data})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Notice not found")
    
    updated_notice = await notices_collection.find_one({"_id": notice_id})
    return serialize_doc(updated_notice)

@api_router.delete("/admin/notices/{notice_id}")
async def delete_notice(notice_id: str, current_admin: dict = Depends(get_current_admin)):
    """Delete notice (admin only)"""
    result = await notices_collection.delete_one({"_id": notice_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Notice not found")
    return {"message": "Notice deleted successfully"}

# Admin - Courses
@api_router.post("/admin/courses", response_model=Course)
async def create_course(course: CourseCreate, current_admin: dict = Depends(get_current_admin)):
    """Create new course (admin only)"""
    course_dict = course.dict()
    course_dict["_id"] = course_dict["id"]
    
    await courses_collection.insert_one(course_dict)
    return serialize_doc(course_dict)

@api_router.put("/admin/courses/{course_id}", response_model=Course)
async def update_course(course_id: str, course: CourseUpdate, current_admin: dict = Depends(get_current_admin)):
    """Update course (admin only)"""
    update_data = {k: v for k, v in course.dict().items() if v is not None}
    if not update_data:
        raise HTTPException(status_code=400, detail="No data to update")
    
    result = await courses_collection.update_one({"_id": course_id}, {"$set": update_data})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Course not found")
    
    updated_course = await courses_collection.find_one({"_id": course_id})
    return serialize_doc(updated_course)

# Admin - Faculty
@api_router.post("/admin/faculty", response_model=Faculty)
async def create_faculty(faculty: FacultyCreate, current_admin: dict = Depends(get_current_admin)):
    """Create new faculty member (admin only)"""
    faculty_dict = faculty.dict()
    faculty_dict["_id"] = generate_id()
    faculty_dict["isActive"] = True
    
    await faculty_collection.insert_one(faculty_dict)
    return serialize_doc(faculty_dict)

@api_router.put("/admin/faculty/{faculty_id}", response_model=Faculty)
async def update_faculty(faculty_id: str, faculty: FacultyUpdate, current_admin: dict = Depends(get_current_admin)):
    """Update faculty member (admin only)"""
    update_data = {k: v for k, v in faculty.dict().items() if v is not None}
    if not update_data:
        raise HTTPException(status_code=400, detail="No data to update")
    
    result = await faculty_collection.update_one({"_id": faculty_id}, {"$set": update_data})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Faculty not found")
    
    updated_faculty = await faculty_collection.find_one({"_id": faculty_id})
    return serialize_doc(updated_faculty)

@api_router.delete("/admin/faculty/{faculty_id}")
async def delete_faculty(faculty_id: str, current_admin: dict = Depends(get_current_admin)):
    """Delete faculty member (admin only)"""
    result = await faculty_collection.delete_one({"_id": faculty_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Faculty not found")
    return {"message": "Faculty deleted successfully"}

# Admin - Gallery
@api_router.post("/admin/gallery", response_model=Gallery)
async def create_gallery_item(gallery: GalleryCreate, current_admin: dict = Depends(get_current_admin)):
    """Create new gallery item (admin only)"""
    gallery_dict = gallery.dict()
    gallery_dict["_id"] = generate_id()
    
    await gallery_collection.insert_one(gallery_dict)
    return serialize_doc(gallery_dict)

@api_router.delete("/admin/gallery/{gallery_id}")
async def delete_gallery_item(gallery_id: str, current_admin: dict = Depends(get_current_admin)):
    """Delete gallery item (admin only)"""
    result = await gallery_collection.delete_one({"_id": gallery_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Gallery item not found")
    return {"message": "Gallery item deleted successfully"}

# Admin - Enquiries
@api_router.get("/admin/enquiries", response_model=List[Enquiry])
async def get_all_enquiries(current_admin: dict = Depends(get_current_admin)):
    """Get all enquiries (admin only)"""
    enquiries = await enquiries_collection.find().sort("date", -1).to_list(1000)
    return serialize_docs(enquiries)

@api_router.put("/admin/enquiries/{enquiry_id}/status")
async def update_enquiry_status(
    enquiry_id: str,
    status_update: EnquiryStatusUpdate,
    current_admin: dict = Depends(get_current_admin)
):
    """Update enquiry status (admin only)"""
    result = await enquiries_collection.update_one(
        {"_id": enquiry_id},
        {"$set": {"status": status_update.status}}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Enquiry not found")
    return {"message": "Status updated successfully"}

# Admin - Study Materials
@api_router.post("/admin/study-materials", response_model=StudyMaterial)
async def create_study_material(material: StudyMaterialCreate, current_admin: dict = Depends(get_current_admin)):
    """Create new study material (admin only)"""
    material_dict = material.dict()
    material_dict["_id"] = generate_id()
    
    await study_materials_collection.insert_one(material_dict)
    return serialize_doc(material_dict)

@api_router.delete("/admin/study-materials/{material_id}")
async def delete_study_material(material_id: str, current_admin: dict = Depends(get_current_admin)):
    """Delete study material (admin only)"""
    result = await study_materials_collection.delete_one({"_id": material_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Study material not found")
    return {"message": "Study material deleted successfully"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    """Initialize database on startup"""
    logger.info("Initializing database...")
    await init_db()
    logger.info("Server started successfully")

@app.on_event("shutdown")
async def shutdown_db_client():
    """Close database connection on shutdown"""
    logger.info("Closing database connection...")
    from database import client
    client.close()