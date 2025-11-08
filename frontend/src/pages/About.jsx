import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding" style={{ backgroundColor: '#DDF4E7' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp" style={{ color: '#124170' }}>
              About The Chanakya Guru Academy
            </h1>
            <p className="text-lg md:text-xl animate-fadeInUp animation-delay-200" style={{ color: '#26667F' }}>
              Gajraula's premier coaching institute dedicated to guiding students toward academic excellence
              and success in competitive examinations.
            </p>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: '#124170' }}>
              Director's Message
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fadeInUp">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop"
                  alt="Director"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div className="animate-fadeInUp animation-delay-200">
                <p className="text-lg mb-4" style={{ color: '#26667F' }}>
                  Welcome to The Chanakya Guru Academy! As the Director, I am proud to lead an institution
                  that has been transforming lives through quality education and mentorship.
                </p>
                <p className="text-lg mb-4" style={{ color: '#26667F' }}>
                  Our mission has always been to provide students with not just academic knowledge, but also
                  the confidence, discipline, and strategic thinking required to excel in competitive examinations
                  like NEET, JEE, and UPSC.
                </p>
                <p className="text-lg" style={{ color: '#26667F' }}>
                  With our experienced faculty from IITs and top universities, comprehensive study materials,
                  and result-oriented approach, we ensure every student gets personalized attention and guidance
                  to achieve their dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ backgroundColor: '#F8FFFE' }}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="course-card animate-fadeInUp">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DDF4E7' }}>
                  <Target className="w-8 h-8" style={{ color: '#67C090' }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: '#124170' }}>
                  Our Mission
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#67C090' }}></div>
                  <p style={{ color: '#26667F' }}>
                    To deliver the highest quality education and training to students preparing for competitive exams
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#67C090' }}></div>
                  <p style={{ color: '#26667F' }}>
                    To strengthen students' fundamentals through concept-based learning and problem-solving
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#67C090' }}></div>
                  <p style={{ color: '#26667F' }}>
                    To provide a supportive environment that encourages growth, curiosity, and excellence
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#67C090' }}></div>
                  <p style={{ color: '#26667F' }}>
                    To nurture talent through expert mentorship and consistent motivation
                  </p>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="course-card animate-fadeInUp animation-delay-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DDF4E7' }}>
                  <Eye className="w-8 h-8" style={{ color: '#67C090' }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: '#124170' }}>
                  Our Vision
                </h2>
              </div>
              <p className="text-lg mb-6" style={{ color: '#26667F' }}>
                To become the most trusted institute in the region for academic and competitive exam coaching,
                empowering students to achieve their dreams with confidence and discipline.
              </p>
              <p className="text-lg" style={{ color: '#26667F' }}>
                We envision a future where every student from Gajraula and surrounding areas has access to
                world-class coaching and guidance, enabling them to compete at national level examinations and
                secure admissions in premier institutions like IITs, AIIMS, and Civil Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#124170' }}>
              What Makes Us Different
            </h2>
            <p className="text-lg" style={{ color: '#26667F' }}>
              Our unique approach to competitive exam preparation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="course-card animate-fadeInUp">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#DDF4E7' }}>
                <Award className="w-6 h-6" style={{ color: '#67C090' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#124170' }}>
                IIT & Top University Alumni
              </h3>
              <p style={{ color: '#26667F' }}>
                Our faculty consists of graduates from IIT Madras, IIT Indore, IIT Patna, and other premier institutions.
              </p>
            </div>
            <div className="course-card animate-fadeInUp animation-delay-200">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#DDF4E7' }}>
                <Users className="w-6 h-6" style={{ color: '#67C090' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#124170' }}>
                Small Batch Sizes
              </h3>
              <p style={{ color: '#26667F' }}>
                We maintain small batch sizes to ensure personalized attention and effective doubt resolution for every student.
              </p>
            </div>
            <div className="course-card animate-fadeInUp animation-delay-400">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#DDF4E7' }}>
                <Target className="w-6 h-6" style={{ color: '#67C090' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#124170' }}>
                Result-Oriented Approach
              </h3>
              <p style={{ color: '#26667F' }}>
                Our structured curriculum, regular tests, and performance tracking ensure consistent improvement and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Achievements */}
      <section className="section-padding" style={{ backgroundColor: '#F8FFFE' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: '#124170' }}>
              Our Journey
            </h2>
            <div className="space-y-6 animate-fadeIn">
              <div className="course-card">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#124170' }}>
                  Established with a Purpose
                </h3>
                <p style={{ color: '#26667F' }}>
                  The Chanakya Guru Academy was founded with a vision to bridge the gap between aspirations and
                  achievements for students in Gajraula and nearby regions. We recognized that talented students
                  needed proper guidance and structured preparation to compete at national level exams.
                </p>
              </div>
              <div className="course-card">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#124170' }}>
                  Growing Success
                </h3>
                <p style={{ color: '#26667F' }}>
                  Over the years, we have successfully guided 500+ students, with an impressive 95% success rate.
                  Our students have secured admissions in premier medical and engineering colleges across India,
                  and several have cleared UPSC examinations.
                </p>
              </div>
              <div className="course-card">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#124170' }}>
                  Commitment to Excellence
                </h3>
                <p style={{ color: '#26667F' }}>
                  We continuously update our teaching methodologies, study materials, and infrastructure to provide
                  the best learning environment. Our commitment to quality education and student success remains
                  unwavering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
