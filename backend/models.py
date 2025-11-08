from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
from enum import Enum

# Enums
class PriorityEnum(str, Enum):
    high = "high"
    medium = "medium"
    low = "low"

class StatusEnum(str, Enum):
    pending = "pending"
    contacted = "contacted"
    enrolled = "enrolled"

class CategoryEnum(str, Enum):
    classes = "classes"
    events = "events"

# Notice Models
class NoticeCreate(BaseModel):
    title: str
    description: str
    priority: PriorityEnum = PriorityEnum.medium

class NoticeUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    priority: Optional[PriorityEnum] = None
    isActive: Optional[bool] = None

class Notice(BaseModel):
    id: str
    title: str
    description: str
    date: str
    priority: str
    isActive: bool = True

# Course Models
class CourseCreate(BaseModel):
    id: str
    title: str
    subtitle: str
    description: str
    durations: List[str]
    subjects: List[str]
    features: List[str]
    icon: str

class CourseUpdate(BaseModel):
    title: Optional[str] = None
    subtitle: Optional[str] = None
    description: Optional[str] = None
    durations: Optional[List[str]] = None
    subjects: Optional[List[str]] = None
    features: Optional[List[str]] = None
    icon: Optional[str] = None

class Course(BaseModel):
    id: str
    title: str
    subtitle: str
    description: str
    durations: List[str]
    subjects: List[str]
    features: List[str]
    icon: str

# Faculty Models
class FacultyCreate(BaseModel):
    name: str
    qualification: str
    subject: str
    experience: str
    image: str

class FacultyUpdate(BaseModel):
    name: Optional[str] = None
    qualification: Optional[str] = None
    subject: Optional[str] = None
    experience: Optional[str] = None
    image: Optional[str] = None
    isActive: Optional[bool] = None

class Faculty(BaseModel):
    id: str
    name: str
    qualification: str
    subject: str
    experience: str
    image: str
    isActive: bool = True

# Gallery Models
class GalleryCreate(BaseModel):
    title: str
    image: str
    category: CategoryEnum

class Gallery(BaseModel):
    id: str
    title: str
    image: str
    category: str

# Enquiry Models
class EnquiryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    course: str
    class_field: str = Field(alias="class")
    previousScore: Optional[str] = None
    batchTiming: Optional[str] = None
    message: Optional[str] = None

class EnquiryStatusUpdate(BaseModel):
    status: StatusEnum

class Enquiry(BaseModel):
    id: str
    name: str
    email: str
    phone: str
    course: str
    class_field: str = Field(alias="class")
    previousScore: Optional[str] = None
    batchTiming: Optional[str] = None
    message: Optional[str] = None
    status: str = "pending"
    date: str

# Study Material Models
class StudyMaterialCreate(BaseModel):
    title: str
    course: str
    chapters: List[str]
    fileUrl: str

class StudyMaterial(BaseModel):
    id: str
    title: str
    course: str
    chapters: List[str]
    downloadUrl: str

# Admin Models
class AdminLogin(BaseModel):
    username: str
    password: str

class AdminResponse(BaseModel):
    username: str
    email: Optional[str] = None
    role: str = "admin"

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    admin: AdminResponse

# Study Material Auth
class StudyMaterialAuth(BaseModel):
    password: str

# Statistics
class Statistics(BaseModel):
    studentsTrained: str = "500+"
    successRate: str = "95%"
    neetSelections: str = "50+"
    jeeQualifiers: str = "30+"
