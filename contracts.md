# API Contracts - The Chanakya Guru Academy Website

## Overview
This document outlines the API contracts and integration plan for connecting the frontend with the backend.

## Mock Data Location
All mock data is currently stored in `/app/frontend/src/mock.js` and needs to be replaced with backend API calls.

---

## 1. Notices API

### Mock Data
```javascript
mockNotices - Array of notice objects
```

### Backend Endpoint
**GET** `/api/notices`
- Returns list of all active notices
- Response: `[{id, title, description, date, priority}]`

**POST** `/api/notices`
- Create new notice (Admin only)
- Request: `{title, description, priority}`
- Response: Created notice object

**DELETE** `/api/notices/:id`
- Delete notice by ID (Admin only)
- Response: Success message

---

## 2. Courses API

### Mock Data
```javascript
mockCourses - Array of course objects
```

### Backend Endpoint
**GET** `/api/courses`
- Returns list of all courses
- Response: `[{id, title, subtitle, description, durations, subjects, features, icon}]`

**GET** `/api/courses/:id`
- Get single course details
- Response: Course object

**POST** `/api/courses` (Admin only)
- Create new course
- Request: Course object
- Response: Created course

**PUT** `/api/courses/:id` (Admin only)
- Update course
- Request: Updated course object
- Response: Updated course

---

## 3. Faculty API

### Mock Data
```javascript
mockFaculty - Array of faculty member objects
```

### Backend Endpoint
**GET** `/api/faculty`
- Returns list of all faculty members
- Response: `[{id, name, qualification, subject, experience, image}]`

**POST** `/api/faculty` (Admin only)
- Add new faculty member
- Request: `{name, qualification, subject, experience, image}`
- Response: Created faculty member

**DELETE** `/api/faculty/:id` (Admin only)
- Remove faculty member
- Response: Success message

---

## 4. Gallery API

### Mock Data
```javascript
mockGallery - Array of gallery image objects
```

### Backend Endpoint
**GET** `/api/gallery`
- Returns all gallery images
- Response: `[{id, title, image, category}]`

**POST** `/api/gallery` (Admin only)
- Upload new image
- Request: FormData with image file
- Response: Created gallery item

**DELETE** `/api/gallery/:id` (Admin only)
- Delete image
- Response: Success message

---

## 5. Enquiries/Contact API

### Mock Data
```javascript
mockEnquiries - Array of enquiry objects
```

### Backend Endpoint
**POST** `/api/enquiries`
- Submit new enquiry (Public)
- Request: `{name, email, phone, course, class, previousScore, batchTiming, message}`
- Response: Success message

**GET** `/api/enquiries` (Admin only)
- Get all enquiries
- Response: `[{id, name, email, phone, course, class, message, date, status}]`

**PUT** `/api/enquiries/:id/status` (Admin only)
- Update enquiry status
- Request: `{status: 'pending' | 'contacted' | 'enrolled'}`
- Response: Updated enquiry

---

## 6. Study Materials API

### Mock Data
```javascript
mockStudyMaterials - Array of study material objects
```

### Backend Endpoint
**POST** `/api/study-materials/auth`
- Authenticate to access study materials
- Request: `{password}`
- Response: JWT token or session

**GET** `/api/study-materials` (Authenticated)
- Get all study materials
- Response: `[{id, title, course, chapters, downloadUrl}]`

**POST** `/api/study-materials` (Admin only)
- Upload new study material
- Request: FormData with PDF file and metadata
- Response: Created material

---

## 7. Admin Authentication API

### Backend Endpoint
**POST** `/api/admin/login`
- Admin login
- Request: `{username, password}`
- Response: JWT token + admin details

**POST** `/api/admin/logout`
- Admin logout
- Response: Success message

**GET** `/api/admin/verify`
- Verify admin token
- Response: Admin details or 401

---

## 8. Achievements/Statistics API

### Mock Data
```javascript
mockAchievements - Array of achievement stats
```

### Backend Endpoint
**GET** `/api/statistics`
- Get academy statistics
- Response: `{studentsTrained, successRate, neetSelections, jeeQualifiers}`

---

## MongoDB Collections

### 1. notices
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  date: Date,
  priority: String (enum: ['high', 'medium', 'low']),
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 2. courses
```javascript
{
  _id: ObjectId,
  id: String (slug),
  title: String,
  subtitle: String,
  description: String,
  durations: [String],
  subjects: [String],
  features: [String],
  icon: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 3. faculty
```javascript
{
  _id: ObjectId,
  name: String,
  qualification: String,
  subject: String,
  experience: String,
  image: String (URL),
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 4. gallery
```javascript
{
  _id: ObjectId,
  title: String,
  image: String (URL),
  category: String (enum: ['classes', 'events']),
  uploadedAt: Date
}
```

### 5. enquiries
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  course: String,
  class: String,
  previousScore: String,
  batchTiming: String,
  message: String,
  status: String (enum: ['pending', 'contacted', 'enrolled']),
  createdAt: Date,
  updatedAt: Date
}
```

### 6. studyMaterials
```javascript
{
  _id: ObjectId,
  title: String,
  course: String,
  chapters: [String],
  fileUrl: String,
  uploadedAt: Date
}
```

### 7. admins
```javascript
{
  _id: ObjectId,
  username: String (unique),
  password: String (hashed),
  email: String,
  role: String,
  createdAt: Date
}
```

### 8. settings
```javascript
{
  _id: ObjectId,
  studyMaterialPassword: String (hashed),
  contactEmail: String,
  contactPhone: String,
  address: String,
  socialLinks: {
    facebook: String,
    instagram: String,
    youtube: String,
    telegram: String
  }
}
```

---

## Frontend Integration Steps

### Phase 1: Setup
1. Create axios instance with base URL from env
2. Create API service files in `/app/frontend/src/services/`
3. Setup authentication context for admin

### Phase 2: Replace Mock Data
1. Update Home.jsx to fetch notices, courses, achievements from API
2. Update Courses.jsx and CourseDetail.jsx to use course API
3. Update Faculty.jsx to use faculty API
4. Update Gallery.jsx to use gallery API
5. Update Contact.jsx to POST enquiry to API
6. Update StudyMaterials.jsx to authenticate and fetch materials
7. Update Admin pages to use admin APIs

### Phase 3: Error Handling
1. Add error boundaries
2. Add loading states
3. Add toast notifications for success/error
4. Handle 401/403 errors for authentication

---

## Authentication Flow

### Admin Panel
1. User enters credentials on `/admin`
2. POST to `/api/admin/login`
3. Store JWT token in sessionStorage
4. Redirect to `/admin/dashboard`
5. Include token in all admin API requests
6. On logout, clear token and redirect

### Study Materials
1. User enters password on `/study-materials`
2. POST to `/api/study-materials/auth`
3. Store session/token
4. Fetch materials from API
5. Validate on each access

---

## Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=<existing>
```

### Backend (.env)
```
MONGO_URL=<existing>
DB_NAME=<existing>
JWT_SECRET=<to be added>
STUDY_MATERIAL_PASSWORD=chanakya2025
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=<to be generated>
```

---

## Next Steps for Backend Implementation

1. Create MongoDB models for all collections
2. Implement authentication middleware
3. Create CRUD endpoints for each resource
4. Implement file upload for gallery and study materials
5. Add input validation using Pydantic
6. Add error handling middleware
7. Test all endpoints
8. Update frontend to use real APIs
9. Remove mock.js dependencies

---

## Notes

- All admin endpoints require JWT authentication
- Study materials require password authentication
- Public endpoints: GET courses, faculty, gallery; POST enquiries
- File uploads should be handled with proper validation
- Implement rate limiting for public endpoints
- Add CORS configuration for frontend domain
