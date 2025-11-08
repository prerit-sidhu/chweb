import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Award, Users, TrendingUp, Bell, Calendar } from 'lucide-react';
import { mockTestimonials } from '../mock';
import { noticesAPI, coursesAPI, statisticsAPI } from '../services/api';

const Home = () => {
  const [notices, setNotices] = useState([]);
  const [courses, setCourses] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [noticesRes, coursesRes, statsRes] = await Promise.all([
        noticesAPI.getAll(),
        coursesAPI.getAll(),
        statisticsAPI.get(),
      ]);
      
      setNotices(noticesRes.data);
      setCourses(coursesRes.data);
      setAchievements([
        { id: 1, value: statsRes.data.studentsTrained, label: 'Students Trained' },
        { id: 2, value: statsRes.data.successRate, label: 'Success Rate' },
        { id: 3, value: statsRes.data.neetSelections, label: 'NEET Selections' },
        { id: 4, value: statsRes.data.jeeQualifiers, label: 'JEE Qualifiers' },
      ]);
      setTestimonials(mockTestimonials);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

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
      <section className="hero-gradient section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp" style={{ color: '#124170' }}>
              Transform Your Dreams into Reality
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fadeInUp animation-delay-200" style={{ color: '#26667F' }}>
              Join Gajraula's premier coaching institute for NEET, JEE, Foundation, and UPSC preparation.
              Expert mentorship, structured study plans, and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
              <Link to="/contact" className="btn-primary">
                Enroll Now
              </Link>
              <Link to="/courses" className="btn-secondary">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Motivational Quote */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center p-8 rounded-3xl" style={{ backgroundColor: '#DDF4E7' }}>
            <p className="text-xl md:text-2xl font-semibold italic animate-fadeIn" style={{ color: '#124170' }}>
              "Success in NEET, JEE, or UPSC is not about studying all the time—it's about studying smart every day.
              Stay consistent, stay confident, and your dream college will be yours."
            </p>
          </div>
        </div>
      </section>

      {/* Important Notices */}
      {notices.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: '#F8FFFE' }}>
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <Bell className="w-8 h-8" style={{ color: '#67C090' }} />
              <h2 className="text-3xl font-bold" style={{ color: '#124170' }}>
                Important Notices
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {notices.map((notice, index) => (
                <div
                  key={notice.id}
                  className={`notice-item animate-slideInLeft notice-item-${notice.priority}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1" style={{ color: '#124170' }}>
                        {notice.title}
                      </h3>
                      <p className="text-sm mb-2" style={{ color: '#26667F' }}>
                        {notice.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs" style={{ color: '#67C090' }}>
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(notice.date).toLocaleDateString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Achievements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#124170' }}>
              Our Achievements
            </h2>
            <p className="text-lg" style={{ color: '#26667F' }}>
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((stat, index) => (
              <div
                key={stat.id}
                className="stat-card animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="section-padding" style={{ backgroundColor: '#F8FFFE' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#124170' }}>
              Our Courses
            </h2>
            <p className="text-lg" style={{ color: '#26667F' }}>
              Comprehensive programs designed for your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="course-card animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{getCourseIcon(course.icon)}</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#124170' }}>
                  {course.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#67C090' }}>
                  {course.subtitle}
                </p>
                <p className="text-sm mb-4" style={{ color: '#26667F' }}>
                  {course.description.substring(0, 100)}...
                </p>
                <div className="flex items-center gap-2 font-semibold" style={{ color: '#124170' }}>
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#124170' }}>
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-fadeInUp">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#DDF4E7' }}>
                <Award className="w-8 h-8" style={{ color: '#67C090' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#124170' }}>
                Expert Faculty
              </h3>
              <p className="text-sm" style={{ color: '#26667F' }}>
                Learn from IIT and top university alumni with years of teaching experience
              </p>
            </div>
            <div className="text-center p-6 animate-fadeInUp animation-delay-200">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#DDF4E7' }}>
                <BookOpen className="w-8 h-8" style={{ color: '#67C090' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#124170' }}>
                Comprehensive Study Material
              </h3>
              <p className="text-sm" style={{ color: '#26667F' }}>
                Well-structured modules covering entire syllabus with practice questions
              </p>
            </div>
            <div className="text-center p-6 animate-fadeInUp animation-delay-400">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#DDF4E7' }}>
                <TrendingUp className="w-8 h-8" style={{ color: '#67C090' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#124170' }}>
                Proven Track Record
              </h3>
              <p className="text-sm" style={{ color: '#26667F' }}>
                95% success rate with students getting into top medical and engineering colleges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: '#F8FFFE' }}>
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#124170' }}>
                Student Success Stories
              </h2>
              <p className="text-lg" style={{ color: '#26667F' }}>
                Hear from our successful students
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2"
                      style={{ borderColor: '#DDF4E7' }}
                    />
                    <div>
                      <h4 className="font-semibold" style={{ color: '#124170' }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm" style={{ color: '#67C090' }}>
                        {testimonial.course}
                      </p>
                      <p className="text-xs font-semibold" style={{ color: '#26667F' }}>
                        {testimonial.rank}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm italic" style={{ color: '#26667F' }}>
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl" style={{ backgroundColor: '#124170' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join hundreds of successful students who achieved their dreams with us
            </p>
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: '#67C090', color: '#124170' }}>
              Enroll Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
