import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ userEmail }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg fixed top-0 left-0 w-full z-10 p-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">
          <Link to="/home">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded mr-1">e</span>
            <span className="text-white">sgela.com</span>
          </Link>
        </div>
        <div className="space-x-4 hidden md:flex">
          <Link to="/home" className="text-white hover:text-yellow-500 transition font-semibold duration-300">Home</Link>
          <Link to="/my-courses" className="text-white hover:text-yellow-500 transition font-semibold duration-300">My Courses</Link>
          <Link to="/profile" className="text-white hover:text-yellow-500 transition font-semibold duration-300">Profile</Link>
          <Link to="/support" className="text-white hover:text-yellow-500 transition font-semibold duration-300">Support</Link>
          <Link to="/contact" className="text-white hover:text-yellow-500 transition font-semibold duration-300">Contact Us</Link>
        </div>
      </div>
      <div className="relative">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <div className="rounded-full bg-gray-300 w-10 h-10 overflow-hidden">
            <img src="/user.png" alt="User" />
          </div>
          <span className="text-white font-semibold">{userEmail}</span>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
            <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-500 hover:bg-gray-100">
              <img src="/settings.png" alt="Settings" className="w-5 h-5 mr-2" />
              Edit Profile
            </Link>
            <Link to="/" className="flex items-center px-4 py-2 text-sm text-gray-500 hover:bg-gray-100">
              <img src="/logout.png" alt="Logout" className="w-5 h-5 mr-2" />
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;