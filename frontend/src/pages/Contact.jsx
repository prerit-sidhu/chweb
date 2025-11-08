import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    class: '',
    previousScore: '',
    batchTiming: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with API call
    setTimeout(() => {
      toast({
        title: "Enquiry Submitted Successfully!",
        description: "Our counselor will contact you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        class: '',
        previousScore: '',
        batchTiming: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding" style={{ backgroundColor: '#DDF4E7' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp" style={{ color: '#124170' }}>
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl animate-fadeInUp animation-delay-200" style={{ color: '#26667F' }}>
              Have questions? We're here to help. Fill out the form below or reach out through our contact details.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fadeInUp">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#124170' }}>
                Enquiry Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2 font-medium" style={{ color: '#124170' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#124170' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#124170' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#124170' }}>
                      Course Interest *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select a course</option>
                      <option value="NEET">NEET</option>
                      <option value="JEE">JEE</option>
                      <option value="Foundation">Foundation (Class 9-10)</option>
                      <option value="UPSC">UPSC</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#124170' }}>
                      Current Class/Standard *
                    </label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select class</option>
                      <option value="9th">Class 9th</option>
                      <option value="10th">Class 10th</option>
                      <option value="11th">Class 11th</option>
                      <option value="12th">Class 12th</option>
                      <option value="12th-pass">12th Pass</option>
                      <option value="graduate">Graduate</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#124170' }}>
                      Previous Score/Percentage
                    </label>
                    <input
                      type="text"
                      name="previousScore"
                      value={formData.previousScore}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g., 85%"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#124170' }}>
                      Preferred Batch Timing
                    </label>
                    <select
                      name="batchTiming"
                      value={formData.batchTiming}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select timing</option>
                      <option value="morning">Morning (6 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 9 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-medium" style={{ color: '#124170' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="form-input"
                    placeholder="Any specific questions or requirements?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fadeInUp animation-delay-200">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#124170' }}>
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="course-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#DDF4E7' }}>
                      <MapPin className="w-6 h-6" style={{ color: '#67C090' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#124170' }}>
                        Our Location
                      </h3>
                      <p style={{ color: '#26667F' }}>
                        The Chanakya Guru Academy<br />
                        Gajraula, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="course-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#DDF4E7' }}>
                      <Phone className="w-6 h-6" style={{ color: '#67C090' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#124170' }}>
                        Phone Number
                      </h3>
                      <p style={{ color: '#26667F' }}>
                        <a href="tel:+919876543210" className="transition-smooth hover:text-primary">
                          +91 9876543210
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="course-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#DDF4E7' }}>
                      <Mail className="w-6 h-6" style={{ color: '#67C090' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#124170' }}>
                        Email Address
                      </h3>
                      <p style={{ color: '#26667F' }}>
                        <a href="mailto:info@chanakyaguruacademy.in" className="transition-smooth hover:text-primary">
                          info@chanakyaguruacademy.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4" style={{ color: '#124170' }}>
                  Find Us on Map
                </h3>
                <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: '300px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.26885648!2d78.1976!3d28.8345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afab60c44d4bb%3A0x21a6ce5f6ae7cca2!2sGajraula%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section-padding" style={{ backgroundColor: '#F8FFFE' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl" style={{ backgroundColor: '#124170' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Quick Query?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Connect with us instantly on WhatsApp for immediate assistance
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              style={{ backgroundColor: '#67C090', color: '#124170' }}
            >
              <Send className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
