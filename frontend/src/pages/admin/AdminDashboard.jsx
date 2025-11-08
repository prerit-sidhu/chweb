import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, BookOpen, Users, Mail, Image, LogOut, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { mockNotices, mockCourses, mockFaculty, mockEnquiries, mockGallery } from '../../mock';
import { useToast } from '../../hooks/use-toast';

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('notices');
  const [notices, setNotices] = useState([]);
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    // Check if admin is authenticated
    const auth = sessionStorage.getItem('adminAuth');
    if (auth !== 'true') {
      navigate('/admin');
      return;
    }

    // Load mock data
    setNotices(mockNotices);
    setEnquiries(mockEnquiries);
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
    navigate('/admin');
  };

  const handleDeleteNotice = (id) => {
    setNotices(notices.filter(n => n.id !== id));
    toast({
      title: "Notice Deleted",
      description: "Notice has been removed successfully.",
    });
  };

  const renderNoticesTab = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: '#124170' }}>Manage Notices</h2>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span>Add New Notice</span>
        </button>
      </div>
      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="course-card">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg" style={{ color: '#124170' }}>
                    {notice.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    notice.priority === 'high' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {notice.priority}
                  </span>
                </div>
                <p className="text-sm mb-2" style={{ color: '#26667F' }}>
                  {notice.description}
                </p>
                <p className="text-xs" style={{ color: '#67C090' }}>
                  {new Date(notice.date).toLocaleDateString('en-IN')}
                </p>
              </div>
              <div className="flex gap-2 ml-4">
                <button className="p-2 rounded-lg transition-smooth hover:bg-primary/10">
                  <Edit className="w-4 h-4" style={{ color: '#124170' }} />
                </button>
                <button 
                  onClick={() => handleDeleteNotice(notice.id)}
                  className="p-2 rounded-lg transition-smooth hover:bg-red-100"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEnquiriesTab = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: '#124170' }}>Student Enquiries</h2>
      </div>
      <div className="space-y-4">
        {enquiries.map((enquiry) => (
          <div key={enquiry.id} className="course-card">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: '#124170' }}>Name:</p>
                <p className="text-sm mb-3" style={{ color: '#26667F' }}>{enquiry.name}</p>
                
                <p className="text-sm font-semibold mb-1" style={{ color: '#124170' }}>Course Interest:</p>
                <p className="text-sm mb-3" style={{ color: '#26667F' }}>{enquiry.course}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: '#124170' }}>Contact:</p>
                <p className="text-sm mb-1" style={{ color: '#26667F' }}>{enquiry.email}</p>
                <p className="text-sm mb-3" style={{ color: '#26667F' }}>{enquiry.phone}</p>
                
                <p className="text-sm font-semibold mb-1" style={{ color: '#124170' }}>Status:</p>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  enquiry.status === 'pending' 
                    ? 'bg-yellow-100 text-yellow-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {enquiry.status}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold mb-1" style={{ color: '#124170' }}>Message:</p>
              <p className="text-sm" style={{ color: '#26667F' }}>{enquiry.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCoursesTab = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: '#124170' }}>Manage Courses</h2>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span>Add New Course</span>
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {mockCourses.map((course) => (
          <div key={course.id} className="course-card">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#124170' }}>
              {course.title}
            </h3>
            <p className="text-sm mb-4" style={{ color: '#26667F' }}>
              {course.subtitle}
            </p>
            <div className="flex gap-2">
              <button className="btn-secondary flex-1">
                <Edit className="w-4 h-4 inline mr-2" />
                Edit
              </button>
              <button className="btn-secondary">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFacultyTab = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: '#124170' }}>Manage Faculty</h2>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span>Add Faculty Member</span>
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {mockFaculty.map((member) => (
          <div key={member.id} className="course-card text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2"
              style={{ borderColor: '#DDF4E7' }}
            />
            <h3 className="font-bold mb-1" style={{ color: '#124170' }}>
              {member.name}
            </h3>
            <p className="text-sm mb-2" style={{ color: '#67C090' }}>
              {member.qualification}
            </p>
            <div className="flex gap-2">
              <button className="btn-secondary flex-1 text-sm py-2">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGalleryTab = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: '#124170' }}>Manage Gallery</h2>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span>Upload Image</span>
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {mockGallery.map((item) => (
          <div key={item.id} className="course-card">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold mb-2" style={{ color: '#124170' }}>
              {item.title}
            </h3>
            <div className="flex gap-2">
              <button className="btn-secondary flex-1 text-sm py-2">
                <Trash2 className="w-3 h-3 inline mr-1" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 'notices', label: 'Notices', icon: Bell },
    { id: 'enquiries', label: 'Enquiries', icon: Mail },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'faculty', label: 'Faculty', icon: Users },
    { id: 'gallery', label: 'Gallery', icon: Image },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FFFE' }}>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold" style={{ color: '#124170' }}>
              Admin Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="btn-secondary flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container-custom py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-smooth whitespace-nowrap ${
                  activeTab === tab.id ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'notices' && renderNoticesTab()}
          {activeTab === 'enquiries' && renderEnquiriesTab()}
          {activeTab === 'courses' && renderCoursesTab()}
          {activeTab === 'faculty' && renderFacultyTab()}
          {activeTab === 'gallery' && renderGalleryTab()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
