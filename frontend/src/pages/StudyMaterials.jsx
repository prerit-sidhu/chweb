import React, { useState, useEffect } from 'react';
import { Lock, Download, BookOpen, CheckCircle } from 'lucide-react';
import { mockStudyMaterials } from '../mock';
import { useToast } from '../hooks/use-toast';

const StudyMaterials = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [materials, setMaterials] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('all');

  useEffect(() => {
    // Check if user is already authenticated
    const auth = sessionStorage.getItem('studyMaterialsAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      setMaterials(mockStudyMaterials);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock password check - will be replaced with API
    if (password === 'chanakya2025') {
      setIsAuthenticated(true);
      sessionStorage.setItem('studyMaterialsAuth', 'true');
      setMaterials(mockStudyMaterials);
      toast({
        title: "Access Granted!",
        description: "Welcome to study materials section.",
      });
    } else {
      toast({
        title: "Invalid Password",
        description: "Please enter the correct password.",
        variant: "destructive"
      });
    }
  };

  const filteredMaterials = selectedCourse === 'all' 
    ? materials 
    : materials.filter(m => m.course.includes(selectedCourse.toUpperCase()));

  const handleDownload = (material) => {
    toast({
      title: "Download Started",
      description: `Downloading ${material.title}...`,
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F8FFFE' }}>
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <div className="course-card text-center animate-fadeInUp">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#DDF4E7' }}>
                <Lock className="w-10 h-10" style={{ color: '#67C090' }} />
              </div>
              <h1 className="text-3xl font-bold mb-4" style={{ color: '#124170' }}>
                Study Materials
              </h1>
              <p className="mb-6" style={{ color: '#26667F' }}>
                This section is password protected. Enter your password to access study materials.
              </p>
              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="form-input"
                  required
                />
                <button type="submit" className="btn-primary w-full">
                  Access Materials
                </button>
              </form>
              <p className="text-sm mt-4" style={{ color: '#26667F' }}>
                Only enrolled students have access. Contact admin if you don't have the password.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding" style={{ backgroundColor: '#DDF4E7' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp" style={{ color: '#124170' }}>
              Study Materials
            </h1>
            <p className="text-lg md:text-xl animate-fadeInUp animation-delay-200" style={{ color: '#26667F' }}>
              Access comprehensive study modules, practice papers, and revision materials for all courses.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <span className="font-semibold" style={{ color: '#124170' }}>Filter by Course:</span>
            <button
              onClick={() => setSelectedCourse('all')}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                selectedCourse === 'all' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCourse('neet')}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                selectedCourse === 'neet' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              NEET
            </button>
            <button
              onClick={() => setSelectedCourse('jee')}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                selectedCourse === 'jee' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              JEE
            </button>
            <button
              onClick={() => setSelectedCourse('foundation')}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                selectedCourse === 'foundation' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              Foundation
            </button>
            <button
              onClick={() => setSelectedCourse('upsc')}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                selectedCourse === 'upsc' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              UPSC
            </button>
          </div>

          {/* Materials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material, index) => (
              <div
                key={material.id}
                className="course-card animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DDF4E7' }}>
                    <BookOpen className="w-6 h-6" style={{ color: '#67C090' }} />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#124170', color: 'white' }}>
                    {material.course}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#124170' }}>
                  {material.title}
                </h3>
                <div className="space-y-1 mb-4">
                  <p className="text-sm font-semibold" style={{ color: '#26667F' }}>Chapters Included:</p>
                  {material.chapters.map((chapter, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" style={{ color: '#67C090' }} />
                      <span className="text-sm" style={{ color: '#26667F' }}>{chapter}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleDownload(material)}
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyMaterials;
