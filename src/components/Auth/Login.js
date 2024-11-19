// login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token); // Save JWT token in localStorage
        navigate('/home');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('An error occurred during login');
    }
  };

  const handleForgotPassword = () => {
    navigate('/verify');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row" style={{ marginTop: '-15%' }}>
        
        {/* Image Section */}
        <div className="md:w-1/2 hidden md:flex items-center justify-center">
          <img 
            src="./e.jpg" 
            alt="Esgela" 
            className="object-cover" 
            style={{ maxHeight: '89%', maxWidth: '80%' }}
          />
        </div>
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-3xl font-semibold mb-4 text-yellow-500">Sign In</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Enter your email address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Enter your password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="inline-block align-baseline font-bold text-sm text-yellow-500 hover:text-yellow-800"
              >
                Forgot Password?
              </button>
            </div>
          </form>
          <p className="mt-4">
            Don’t have an account?{' '}
            <a href="/register" className="text-yellow-500 hover:text-yellow-800 underline">
              Sign Up Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;