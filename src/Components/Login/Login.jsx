import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const myemail = "rijoanrashid@gmail.com";
const mypass = "rijoan2043"
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const email = e.target.email.value;
    const pass = e.target.pass.value;

    if (email === myemail && pass === mypass) {
      // Store user info in localStorage (mock login session)
      localStorage.setItem("authUser", JSON.stringify({ email }));

      Swal.fire({
        icon: "success",
        title: "Login successful!",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        navigate("/admin");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid email or password!",
      });
    }

    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="my-10 md:my-16 rounded-md bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        {/* Logo/Header Section */}
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white text-center">Welcome Back</h1>
          <p className="text-indigo-200 mt-2">Sign in to access your dashboard</p>
        </motion.div>

        {/* Form Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-indigo-100 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-indigo-300" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="password" className="block text-sm font-medium text-indigo-100 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-indigo-300" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="pass"
                    required
                    placeholder="••••••••"
                    className="block w-full pl-10 pr-10 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-indigo-300 hover:text-indigo-100"
                  >
                    {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                  </button>
                </div>
                <div className="flex justify-end mt-1">
                  <Link to="/forgot-password" className="text-sm text-indigo-300 hover:text-indigo-100 transition-colors">
                    Forgot password?
                  </Link>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : 'Sign In'}
                </button>
              </motion.div>
            </form>

            {/* Divider */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6"
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-indigo-200">Or continue with</span>
                </div>
              </div>
            </motion.div>

            {/* Social Login */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6"
            >
              <button
                type="button"
                onClick={() => {}}
                className="w-full inline-flex justify-center items-center py-3 px-4 rounded-lg shadow-sm text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
              >
                <FaGoogle className="h-5 w-5 text-red-400 mr-2" />
                <span>Google</span>
              </button>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="px-8 py-4 bg-white/5 text-center"
          >
            <p className="text-indigo-200 text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-indigo-100 hover:text-white transition-colors">
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;