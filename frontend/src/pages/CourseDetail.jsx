import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, CheckCircle, Award } from 'lucide-react';
import { mockCourses } from '../mock';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const foundCourse = mockCourses.find(c => c.id === courseId);
    setCourse(foundCourse);
  }, [courseId]);

  if (!course) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-xl" style={{ color: '#26667F' }}>Course not found</p>
      </div>
    );
  }

  const getCourseIcon = (iconName) => {
    const icons = {
      activity: '🩺',
      rocket: '🚀',
      'book-open': '📚',
      landmark: '🏛️'
    };
    return icons[iconName] || '📖';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding" style={{ backgroundColor: '#DDF4E7' }}>
        <div className="container-custom">
          <Link to="/courses" className="inline-flex items-center gap-2 mb-6 transition-smooth" style={{ color: '#124170' }}>
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Courses</span>
          </Link>
          <div className="max-w-4xl">
            <div className="text-6xl mb-4 animate-fadeInUp">{getCourseIcon(course.icon)}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp animation-delay-200" style={{ color: '#124170' }}>
              {course.title} Coaching
            </h1>
            <p className="text-xl mb-6 animate-fadeInUp animation-delay-400" style={{ color: '#67C090' }}>
              {course.subtitle}
            </p>
            <p className="text-lg animate-fadeInUp animation-delay-600" style={{ color: '#26667F' }}>
              {course.description}
            </p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Duration */}
            <div className="course-card animate-fadeInUp">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DDF4E7' }}>
                  <Clock className="w-6 h-6" style={{ color: '#67C090' }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: '#124170' }}>
                  Duration Options
                </h2>
              </div>
              <div className="space-y-2">
                {course.durations.map((duration, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" style={{ color: '#67C090' }} />
                    <span className="text-lg" style={{ color: '#26667F' }}>
                      {duration} Program
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subjects */}
            <div className="course-card animate-fadeInUp animation-delay-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DDF4E7' }}>
                  <BookOpen className="w-6 h-6" style={{ color: '#67C090' }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: '#124170' }}>
                  Subjects Covered
                </h2>
              </div>
              <div className="space-y-2">
                {course.subjects.map((subject, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" style={{ color: '#67C090' }} />
                    <span className="text-lg" style={{ color: '#26667F' }}>
                      {subject}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding" style={{ backgroundColor: '#F8FFFE' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8" style={{ color: '#67C090' }} />
              <h2 className="text-3xl font-bold" style={{ color: '#124170' }}>
                Key Features
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {course.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="course-card animate-fadeInUp"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#67C090' }} />
                    <span style={{ color: '#26667F' }}>
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Study Materials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#124170' }}>
              Study Materials Provided
            </h2>
            <div className="course-card">
              <p className="text-lg mb-4" style={{ color: '#26667F' }}>
                We provide comprehensive study modules for all classes covering:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#67C090' }}></div>
                  <span style={{ color: '#26667F' }}>Complete theory notes</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#67C090' }}></div>
                  <span style={{ color: '#26667F' }}>Practice problems</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#67C090' }}></div>
                  <span style={{ color: '#26667F' }}>Previous year questions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#67C090' }}></div>
                  <span style={{ color: '#26667F' }}>Mock test papers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#67C090' }}></div>
                  <span style={{ color: '#26667F' }}>Revision worksheets</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#67C090' }}></div>
                  <span style={{ color: '#26667F' }}>Formula sheets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ backgroundColor: '#F8FFFE' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl" style={{ backgroundColor: '#124170' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Enroll in {course.title}?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Start your journey to success with expert guidance and comprehensive preparation
            </p>
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: '#67C090', color: '#124170' }}>
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
