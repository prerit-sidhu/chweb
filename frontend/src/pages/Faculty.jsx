import React, { useEffect, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { mockFaculty } from '../mock';

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    setFaculty(mockFaculty);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding" style={{ backgroundColor: '#DDF4E7' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp" style={{ color: '#124170' }}>
              Our Expert Faculty
            </h1>
            <p className="text-lg md:text-xl animate-fadeInUp animation-delay-200" style={{ color: '#26667F' }}>
              Learn from the best. Our faculty comprises graduates from IIT Madras, IIT Indore, IIT Patna,
              and other premier institutions with years of teaching experience.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div
                key={member.id}
                className="faculty-card text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="faculty-image mx-auto"
                />
                <h3 className="text-xl font-bold mb-2" style={{ color: '#124170' }}>
                  {member.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5" style={{ color: '#67C090' }} />
                  <p className="text-sm font-semibold" style={{ color: '#67C090' }}>
                    {member.qualification}
                  </p>
                </div>
                <p className="text-lg font-semibold mb-1" style={{ color: '#26667F' }}>
                  {member.subject}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <Award className="w-4 h-4" style={{ color: '#124170' }} />
                  <p className="text-sm" style={{ color: '#124170' }}>
                    {member.experience} Experience
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Faculty */}
      <section className="section-padding" style={{ backgroundColor: '#F8FFFE' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: '#124170' }}>
              Why Our Faculty Stands Out
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="course-card animate-fadeInUp">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#124170' }}>
                  Premier Institution Background
                </h3>
                <p style={{ color: '#26667F' }}>
                  All our faculty members are graduates from IITs and top universities, bringing world-class
                  knowledge and problem-solving approaches to the classroom.
                </p>
              </div>
              <div className="course-card animate-fadeInUp animation-delay-200">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#124170' }}>
                  Extensive Teaching Experience
                </h3>
                <p style={{ color: '#26667F' }}>
                  With 7+ years of teaching experience, our faculty understands student psychology and
                  adapts teaching methods for maximum comprehension.
                </p>
              </div>
              <div className="course-card animate-fadeInUp animation-delay-400">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#124170' }}>
                  Result-Oriented Approach
                </h3>
                <p style={{ color: '#26667F' }}>
                  Our teachers focus on conceptual clarity and problem-solving techniques that help
                  students excel in competitive exams.
                </p>
              </div>
              <div className="course-card animate-fadeInUp animation-delay-600">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#124170' }}>
                  Personal Mentorship
                </h3>
                <p style={{ color: '#26667F' }}>
                  Beyond academics, our faculty provides career guidance, exam strategies, and
                  motivation to help students achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl" style={{ backgroundColor: '#124170' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Learn from the Best
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join our academy and get mentored by IIT alumni and experienced educators
            </p>
            <a href="/contact" className="btn-primary" style={{ backgroundColor: '#67C090', color: '#124170' }}>
              Enroll Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
