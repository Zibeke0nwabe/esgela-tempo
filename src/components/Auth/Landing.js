// src/components/Auth/Landing.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase,FaKeyboard } from 'react-icons/fa'; // Import necessary icons
import { RiTailwindCssFill } from 'react-icons/ri'; // Import TailwindCSS icon
import Carousel from '../Carousel';
import Mission from '../Mission';
import About from '../AboutUs';
import Footer from '../Footer';
import FAQ from '../FAQ';

const courses = [
  { id: 'html', title: 'Introduction to HTML', description: 'Learn the basics of HTML to build the structure of web pages.', hours: '1.5 Hours', level: 'Beginner', icon: FaHtml5, iconColor: '#E44D26' }, // HTML color
  { id: 'css', title: 'Typing Test',  description: 'Improve your typing speed and accuracy with interactive typing tests.', hours: '2.0 Hours', level: 'Beginner', icon: FaKeyboard, iconColor: '#00BFFF'}, 
  { id: 'javascript', title: 'Introduction to JavaScript', description: 'Explore the basics of JavaScript programming for web development.', hours: '2.5 Hours', level: 'Beginner', icon: FaJs, iconColor: '#F7DF1E' }, // JavaScript color
  { id: 'react', title: 'Introduction to React', description: 'Get started with React to build interactive UIs.', hours: '3.0 Hours', level: 'Beginner', icon: FaReact, iconColor: '#61DAFB' }, // React color
  { id: 'tailwind', title: 'Introduction to TailwindCSS', description: 'Learn to use TailwindCSS for efficient and modern styling.', hours: '2.0 Hours', level: 'Beginner', icon: RiTailwindCssFill, iconColor: '#38B2AC' }, // TailwindCSS color
  { id: 'mongodb', title: 'Introduction to MongoDB', description: 'Discover the basics of MongoDB, a NoSQL database.', hours: '2.5 Hours', level: 'Beginner', icon: FaDatabase, iconColor: '#4DB33D' }, // MongoDB color
];

const CourseCard = ({ icon: Icon, title, description, hours, level, iconColor }) => (
<div className="bg-white shadow p-4 rounded border border-gray-300 flex flex-col h-full">
      <div className="w-full h-32 flex items-center justify-center mb-4 rounded bg-black">
        {/* Render the icon with its color */}
        {Icon ? (
          <Icon className="text-6xl" style={{ color: iconColor }} />
        ) : (
          <div className="text-gray-500 text-lg">Icon not available</div>
        )}
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="bg-yellow-700 text-white text-xs py-1 px-2 rounded">Top Faculty</span>
        <span className="text-gray-500 text-sm">{level}</span>
      </div>
      <h3 className="text-black text-lg font-bold mb-1 flex-grow">{title}</h3>
      <p className="text-gray-600 text-sm mb-2 flex-grow">{description}</p>
      <div className="text-gray-500 text-xs mb-4">{hours}</div>
      <Link to="/login">
      <button className="bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white font-semibold w-full py-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
        Enroll Now
      </button>
      </Link>
      </div>
);

const Landing = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Carousel />
      <h2 className="p-2 text-2xl font-bold mb-4 p-4">Top Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            icon={course.icon}
            title={course.title}
            description={course.description}
            hours={course.hours}
            level={course.level}
            iconColor={course.iconColor}
          />
        ))}
      </div>
        <About/>
        <Mission/>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Landing;
