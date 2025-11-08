import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t" style={{ borderColor: '#DDF4E7' }}>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8" style={{ color: '#67C090' }} />
              <span className="text-lg font-bold" style={{ color: '#124170' }}>
                Chanakya Guru Academy
              </span>
            </div>
            <p className="text-sm mb-4" style={{ color: '#26667F' }}>
              Gajraula's premier coaching institute for NEET, JEE, Foundation, and UPSC preparation.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-smooth hover:bg-primary/10"
                style={{ color: '#124170' }}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-smooth hover:bg-primary/10"
                style={{ color: '#124170' }}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-smooth hover:bg-primary/10"
                style={{ color: '#124170' }}
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-smooth hover:bg-primary/10"
                style={{ color: '#124170' }}
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#124170' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm transition-smooth" style={{ color: '#26667F' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm transition-smooth" style={{ color: '#26667F' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm transition-smooth" style={{ color: '#26667F' }}>
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-sm transition-smooth" style={{ color: '#26667F' }}>
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm transition-smooth" style={{ color: '#26667F' }}>
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#124170' }}>
              Courses
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/neet" className="text-sm transition-smooth" style={{ color: '#26667F' }}>
                  NEET Coaching
                </Link>
              </li>
              <li>
                <Link to="/courses/jee" className="text-sm transition-smooth" style={{ color: '#26667F' }}>
                  JEE Coaching
                </Link>
              </li>
              <li>
                <Link to="/courses/foundation" className="text-sm transition-smooth" style={{ color: '#26667F' }}>
                  Foundation Course
                </Link>
              </li>
              <li>
                <Link to="/courses/upsc" className="text-sm transition-smooth" style={{ color: '#26667F' }}>
                  UPSC Preparation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#124170' }}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#67C090' }} />
                <span className="text-sm" style={{ color: '#26667F' }}>
                  The Chanakya Guru Academy, Gajraula, Uttar Pradesh
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#67C090' }} />
                <span className="text-sm" style={{ color: '#26667F' }}>
                  +91 9876543210
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#67C090' }} />
                <span className="text-sm" style={{ color: '#26667F' }}>
                  info@chanakyaguruacademy.in
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6" style={{ borderColor: '#DDF4E7' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#26667F' }}>
              © 2025 The Chanakya Guru Academy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/admin" className="text-sm transition-smooth" style={{ color: '#26667F' }}>
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
