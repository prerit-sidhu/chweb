import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { mockCourses } from '../mock';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(mockCourses);
  }, []);

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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp" style={{ color: '#124170' }}>
              Our Courses
            </h1>
            <p className="text-lg md:text-xl animate-fadeInUp animation-delay-200" style={{ color: '#26667F' }}>
              Comprehensive programs designed to help you achieve your academic and career goals.
              Choose the right path for your success.
            </p>
          </div>
        </div>
      </section>

      {/* Motivational Banner */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center p-8 rounded-3xl" style={{ backgroundColor: '#F8FFFE' }}>
            <p className="text-xl md:text-2xl font-semibold italic" style={{ color: '#124170' }}>
              "Every question you solve today brings you one step closer to your dream."
            </p>
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="section-padding" style={{ backgroundColor: '#F8FFFE' }}>
        <div className="container-custom">
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="course-card animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Course Icon & Title */}
                  <div className="md:col-span-1">
                    <div className="text-6xl mb-4">{getCourseIcon(course.icon)}</div>
                    <h2 className="text-3xl font-bold mb-2" style={{ color: '#124170' }}>
                      {course.title}
                    </h2>
                    <p className="text-lg mb-4" style={{ color: '#67C090' }}>
                      {course.subtitle}
                    </p>
                    <Link
                      to={`/courses/${course.id}`}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Course Details */}
                  <div className="md:col-span-2 space-y-6">
                    <p className="text-lg" style={{ color: '#26667F' }}>
                      {course.description}
                    </p>

                    {/* Duration */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5" style={{ color: '#67C090' }} />
                        <h3 className="font-semibold" style={{ color: '#124170' }}>
                          Duration Options:
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {course.durations.map((duration, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 rounded-full text-sm font-medium"
                            style={{ backgroundColor: '#DDF4E7', color: '#124170' }}
                          >
                            {duration}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Subjects */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-5 h-5" style={{ color: '#67C090' }} />
                        <h3 className="font-semibold" style={{ color: '#124170' }}>
                          Subjects Covered:
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {course.subjects.map((subject, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 rounded-full text-sm font-medium"
                            style={{ backgroundColor: '#124170', color: 'white' }}
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="font-semibold mb-3" style={{ color: '#124170' }}>
                        Key Features:
                      </h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#67C090' }}></div>
                            <span className="text-sm" style={{ color: '#26667F' }}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl" style={{ backgroundColor: '#124170' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Not Sure Which Course to Choose?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Our counselors are here to guide you. Contact us for a free consultation.
            </p>
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: '#67C090', color: '#124170' }}>
              Get Free Counseling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
