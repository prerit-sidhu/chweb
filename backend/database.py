from motor.motor_asyncio import AsyncIOMotorClient
import os
from datetime import datetime
import uuid

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Collections
notices_collection = db.notices
courses_collection = db.courses
faculty_collection = db.faculty
gallery_collection = db.gallery
enquiries_collection = db.enquiries
study_materials_collection = db.study_materials
admins_collection = db.admins
settings_collection = db.settings

def generate_id() -> str:
    """Generate a unique ID"""
    return str(uuid.uuid4())

def get_current_date() -> str:
    """Get current date in ISO format"""
    return datetime.utcnow().isoformat()

async def init_db():
    """Initialize database with default data if collections are empty"""
    from auth import get_password_hash
    
    # Create admin if doesn't exist
    admin_exists = await admins_collection.find_one({"username": "admin"})
    if not admin_exists:
        admin_doc = {
            "_id": generate_id(),
            "username": "admin",
            "password": get_password_hash("admin123"),
            "email": "admin@chanakyaguruacademy.in",
            "role": "admin",
            "createdAt": get_current_date()
        }
        await admins_collection.insert_one(admin_doc)
        print("✓ Admin user created")
    
    # Initialize courses if empty
    courses_count = await courses_collection.count_documents({})
    if courses_count == 0:
        courses = [
            {
                "_id": "neet",
                "id": "neet",
                "title": "NEET",
                "subtitle": "Medical Entrance Coaching",
                "description": "Comprehensive NEET preparation with in-depth Physics, Chemistry, and Biology coverage, regular tests, and doubt-solving sessions.",
                "durations": ["1 Year", "2 Years", "4 Years"],
                "subjects": ["Physics", "Chemistry", "Biology"],
                "features": [
                    "Concept-based learning approach",
                    "Regular mock tests and assessments",
                    "Dedicated doubt-solving sessions",
                    "Study materials and practice papers",
                    "Expert faculty guidance",
                    "Previous year question analysis"
                ],
                "icon": "activity"
            },
            {
                "_id": "jee",
                "id": "jee",
                "title": "JEE",
                "subtitle": "Engineering Entrance Coaching",
                "description": "Rigorous preparation for JEE Main & Advanced with concept-based lectures, problem-solving practice, and test series.",
                "durations": ["1 Year", "2 Years", "4 Years"],
                "subjects": ["Physics", "Chemistry", "Mathematics"],
                "features": [
                    "JEE Main & Advanced focused curriculum",
                    "Problem-solving workshops",
                    "Weekly test series",
                    "Comprehensive study modules",
                    "IIT alumni mentorship",
                    "Performance tracking system"
                ],
                "icon": "rocket"
            },
            {
                "_id": "foundation",
                "id": "foundation",
                "title": "Foundation",
                "subtitle": "Class 9th to 10th",
                "description": "Concept-building for school curriculum and early preparation for NEET/JEE/NTSE/Olympiads.",
                "durations": ["Annual Program"],
                "subjects": ["Science", "Mathematics"],
                "features": [
                    "Strong conceptual foundation",
                    "School board exam preparation",
                    "Early NEET/JEE exposure",
                    "NTSE & Olympiad training",
                    "Regular parent-teacher meetings",
                    "Personality development sessions"
                ],
                "icon": "book-open"
            },
            {
                "_id": "upsc",
                "id": "upsc",
                "title": "UPSC",
                "subtitle": "Civil Services Coaching",
                "description": "Complete foundation course covering GS, CSAT, Essay, and optional subjects with guidance for Prelims and Mains.",
                "durations": ["1 Year", "Integrated Batches"],
                "subjects": ["General Studies", "CSAT", "Essay", "Optional Subjects"],
                "features": [
                    "Comprehensive GS coverage",
                    "Current affairs analysis",
                    "Answer writing practice",
                    "Prelims & Mains guidance",
                    "Interview preparation",
                    "Study material and notes"
                ],
                "icon": "landmark"
            }
        ]
        await courses_collection.insert_many(courses)
        print("✓ Courses initialized")
    
    # Initialize faculty if empty
    faculty_count = await faculty_collection.count_documents({})
    if faculty_count == 0:
        faculty = [
            {
                "_id": generate_id(),
                "name": "Mr. Gajraj Singh",
                "qualification": "M.Tech IIT Madras",
                "subject": "Physics",
                "experience": "12+ years",
                "image": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
                "isActive": True
            },
            {
                "_id": generate_id(),
                "name": "Mr. Rajkumar Rastogi",
                "qualification": "M.E. DU",
                "subject": "Chemistry",
                "experience": "10+ years",
                "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
                "isActive": True
            },
            {
                "_id": generate_id(),
                "name": "Mr. Bhupendra Singh",
                "qualification": "M.Sc. IIT Indore",
                "subject": "Mathematics",
                "experience": "8+ years",
                "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
                "isActive": True
            },
            {
                "_id": generate_id(),
                "name": "Mr. Rajan Pal",
                "qualification": "M.Sc. IIT Patna",
                "subject": "Biology",
                "experience": "9+ years",
                "image": "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
                "isActive": True
            },
            {
                "_id": generate_id(),
                "name": "Miss Akankesha",
                "qualification": "M.Sc. MJPU",
                "subject": "Chemistry",
                "experience": "7+ years",
                "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
                "isActive": True
            }
        ]
        await faculty_collection.insert_many(faculty)
        print("✓ Faculty initialized")
    
    # Initialize sample notices
    notices_count = await notices_collection.count_documents({})
    if notices_count == 0:
        notices = [
            {
                "_id": generate_id(),
                "title": "NEET 2026 Batch Admissions Open",
                "description": "Limited seats available for 2-year integrated NEET program. Early bird discount till 31st March.",
                "date": "2025-03-15",
                "priority": "high",
                "isActive": True
            },
            {
                "_id": generate_id(),
                "title": "JEE Foundation Course Starting Soon",
                "description": "Class 9th & 10th foundation batches commence from April 1st, 2025.",
                "date": "2025-03-10",
                "priority": "medium",
                "isActive": True
            }
        ]
        await notices_collection.insert_many(notices)
        print("✓ Notices initialized")
    
    # Initialize sample gallery
    gallery_count = await gallery_collection.count_documents({})
    if gallery_count == 0:
        gallery = [
            {
                "_id": generate_id(),
                "title": "Classroom Learning",
                "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
                "category": "classes"
            },
            {
                "_id": generate_id(),
                "title": "Rank Holders Celebration",
                "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
                "category": "events"
            },
            {
                "_id": generate_id(),
                "title": "Lab Sessions",
                "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
                "category": "classes"
            }
        ]
        await gallery_collection.insert_many(gallery)
        print("✓ Gallery initialized")
    
    print("✓ Database initialization complete")
