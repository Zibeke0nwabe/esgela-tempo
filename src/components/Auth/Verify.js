import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Verify = ({ step }) => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleRequestCode = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/verify-code'); // Redirect to code verification page
      } else {
        alert(data.message || 'Error requesting verification code');
      }
    } catch (error) {
      alert('An error occurred while requesting the code');
    }
  };

  const handleVerifyCode = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, verificationCode })
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/reset-password'); // Redirect to reset password page
      } else {
        alert(data.message || 'Verification failed');
      }
    } catch (error) {
      alert('An error occurred during verification');
    }
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, verificationCode, newPassword })
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/login'); // Redirect to login page on success
      } else {
        alert(data.message || 'Error resetting password');
      }
    } catch (error) {
      alert('An error occurred while resetting the password');
    }
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
          <h3 className="text-3xl font-semibold mb-4 text-yellow-500">
            {step === 1 ? 'Request Password Reset Code' : step === 2 ? 'Verify Code' : 'Reset Password'}
          </h3>
          {step === 1 && (
            <form onSubmit={handleRequestCode}>
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
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Request Code
              </button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handleVerifyCode}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="verificationCode">
                  Enter the verification code
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="verificationCode"
                  type="text"
                  placeholder="Verification Code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Verify Code
              </button>
            </form>
          )}
          {step === 3 && (
            <form onSubmit={handleResetPassword}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                  Enter your new password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="newPassword"
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Reset Password
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verify;