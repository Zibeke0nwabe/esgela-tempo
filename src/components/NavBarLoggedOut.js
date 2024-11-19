import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaSignInAlt } from 'react-icons/fa'; // Import icons from react-icons

const NavBarLoggedOut = () => {
  return (
    <nav className="bg-black shadow-lg fixed top-0 left-0 w-full z-10 p-6 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <span className="bg-yellow-500 text-black px-2 py-1 rounded mr-1 text-2xl font-bold">e</span>
          <span className="text-white text-2xl font-bold">sgela.com</span>
        </Link>
      </div>

      {/* Navigation Links Section */}
      <div className="flex space-x-4">
        <Link to="/login" className="text-white hover:text-yellow-500 transition font-semibold duration-300 flex items-center space-x-1">
          <FaSignInAlt className="text-lg" /> {/* Login icon */}
          <span>Login</span>
        </Link>
        <Link to="/register" className="text-white hover:text-yellow-500 transition font-semibold duration-300 flex items-center space-x-1">
          <FaUser className="text-lg" /> {/* Register icon */}
          <span>Register</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBarLoggedOut;