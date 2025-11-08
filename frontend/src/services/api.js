import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance
const apiClient = axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
apiClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Public API calls
export const noticesAPI = {
  getAll: () => apiClient.get('/notices'),
};

export const coursesAPI = {
  getAll: () => apiClient.get('/courses'),
  getById: (id) => apiClient.get(`/courses/${id}`),
};

export const facultyAPI = {
  getAll: () => apiClient.get('/faculty'),
};

export const galleryAPI = {
  getAll: () => apiClient.get('/gallery'),
};

export const enquiriesAPI = {
  create: (data) => apiClient.post('/enquiries', data),
};

export const statisticsAPI = {
  get: () => apiClient.get('/statistics'),
};

export const studyMaterialsAPI = {
  authenticate: (password) => apiClient.post('/study-materials/auth', { password }),
  getAll: () => apiClient.get('/study-materials'),
};

// Admin API calls
export const adminAPI = {
  login: (credentials) => apiClient.post('/admin/login', credentials),
  verify: () => apiClient.get('/admin/verify'),
  
  // Notices
  createNotice: (data) => apiClient.post('/admin/notices', data),
  updateNotice: (id, data) => apiClient.put(`/admin/notices/${id}`, data),
  deleteNotice: (id) => apiClient.delete(`/admin/notices/${id}`),
  
  // Courses
  createCourse: (data) => apiClient.post('/admin/courses', data),
  updateCourse: (id, data) => apiClient.put(`/admin/courses/${id}`, data),
  
  // Faculty
  createFaculty: (data) => apiClient.post('/admin/faculty', data),
  updateFaculty: (id, data) => apiClient.put(`/admin/faculty/${id}`, data),
  deleteFaculty: (id) => apiClient.delete(`/admin/faculty/${id}`),
  
  // Gallery
  createGalleryItem: (data) => apiClient.post('/admin/gallery', data),
  deleteGalleryItem: (id) => apiClient.delete(`/admin/gallery/${id}`),
  
  // Enquiries
  getAllEnquiries: () => apiClient.get('/admin/enquiries'),
  updateEnquiryStatus: (id, status) => apiClient.put(`/admin/enquiries/${id}/status`, { status }),
  
  // Study Materials
  createStudyMaterial: (data) => apiClient.post('/admin/study-materials', data),
  deleteStudyMaterial: (id) => apiClient.delete(`/admin/study-materials/${id}`),
};

export default apiClient;
