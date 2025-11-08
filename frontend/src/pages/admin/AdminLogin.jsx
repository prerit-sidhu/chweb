import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Shield } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

const AdminLogin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock login - will be replaced with API call
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'admin123') {
        sessionStorage.setItem('adminAuth', 'true');
        toast({
          title: "Login Successful!",
          description: "Welcome to admin dashboard.",
        });
        navigate('/admin/dashboard');
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid username or password.",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F8FFFE' }}>
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <div className="course-card animate-fadeInUp">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#DDF4E7' }}>
              <Shield className="w-10 h-10" style={{ color: '#67C090' }} />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-center" style={{ color: '#124170' }}>
              Admin Login
            </h1>
            <p className="text-center mb-6" style={{ color: '#26667F' }}>
              The Chanakya Guru Academy
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 font-medium" style={{ color: '#124170' }}>
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: '#124170' }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="form-input"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span>Logging in...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Login</span>
                  </>
                )}
              </button>
            </form>
            <p className="text-xs text-center mt-4" style={{ color: '#26667F' }}>
              Demo credentials: admin / admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
