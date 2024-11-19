import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
  <div className="container mx-auto px-6">
    {/* Footer Sections */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      {/* About Esgela Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-yellow-500">About Esgela</h3>
        <p className="text-white mb-4">
          Esgela is dedicated to providing high-quality coding education. Our mission is to empower individuals with the skills they need to excel in the tech industry.
        </p>
        <p className="text-white">
          Founded in 2024, we offer a range of free courses to help you start your journey in tech. Join us today!
        </p>
      </div>

      {/* Useful Links Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-yellow-500">Useful Links</h3>
        <ul className="space-y-2">
          <li><a href="" className="text-gray-300 hover:text-yellow-500 transition duration-300">Home</a></li>
          <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300">Courses</a></li>
          <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300">About Us</a></li>
          <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300">Contact</a></li>
        </ul>
      </div>

      {/* Newsletter Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-yellow-500">Connect With Me</h3>
        <p className="text-white mb-4">
        Connect with Onwabe Zibeke, a solo developer eager to learn, grow, and tackle new challenges in tech.
        </p>
        <form className="flex flex-col">
          <a
            href='/'
            className="bg-yellow-500 text-black text-center py-2 px-4 rounded hover:bg-yellow-400 transition duration-300 font-semibold"
          >
            Connect Now
          </a>
        </form>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-yellow-500">Contact Us</h3>
        <p className="text-white mb-4">
          We'd love to hear from you. Reach out to us through the following channels:
        </p>
        <ul className="space-y-2">
          <li>Email: <a href="mailto:support@esgela.com" className="text-yellow-500 hover:underline">onwabe.zibeke@esgela.com</a></li>
          <li>Phone: <a href="tel:+27 784 300 901" className="text-yellow-500 hover:underline">+1 234 567 890</a></li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="border-t border-gray-700 pt-6 mt-6">
  <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
    {/* Text and Button */}
    <div className="flex-1 text-center md:text-left">
      <p className="text-white mb-4">
        Designed by Onwabe Zibeke as a solo developer, this website showcases his full-stack development skills, from design planning to bringing ideas to life.
      </p>
      <a
        href="#portfolio"
        className="bg-yellow-500 text-black py-2 px-6 rounded hover:bg-yellow-400 transition duration-300 font-semibold"
      >
        Explore My Work
      </a>
    </div>

    {/* Social Media Links */}
    <div className="flex space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
        <FaFacebook className="w-6 h-6" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
        <FaTwitter className="w-6 h-6" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
        <FaLinkedin className="w-6 h-6" />
      </a>
    </div>
  </div>
</div>
  </div>
</footer>

  );
};

export default Footer;