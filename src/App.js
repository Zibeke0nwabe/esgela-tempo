import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaKeyboard } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri'; // Import TailwindCSS icon
import Carousel from './components/Carousel';
import CourseCard from './components/CourseCard';
import AboutUs from './components/AboutUs';
import Mission from './components/Mission';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CourseDetails from './components/CourseDetails';
import Html from './components/Html/Html';
import Typing from './components/typing/Typing';
import MyCourses from './components/MyCourses';
import Profile from './components/Profile';
import Support from './components/Support';
import ContactUs from './components/ContactUs';
import NavBar from './components/NavBar';
import NavBarLoggedOut from './components/NavBarLoggedOut';
import Verify from './components/Auth/Verify';
import Comments from './components/Comments'; 
import Landing from './components/Auth/Landing';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const courses = [
  { id: 'html', title: 'Introduction to HTML', description: 'Learn the basics of HTML to build the structure of web pages.', hours: '1.5 Hours', level: 'Beginner', icon: FaHtml5, iconColor: '#E44D26' }, // HTML color
  { id: 'css', title: 'Introduction to Typing Test', description: 'Understand the fundamentals of Fast Typing and also Typing Accurately.', hours: '2.0 Hours', level: 'Beginner', icon: FaKeyboard, iconColor: '#1572B6' }, // 
  { id: 'javascript', title: 'Introduction to JavaScript', description: 'Explore the basics of JavaScript programming for web development.', hours: '2.5 Hours', level: 'Beginner', icon: FaJs, iconColor: '#F7DF1E' }, // JavaScript color
  { id: 'react', title: 'Introduction to React', description: 'Get started with React to build interactive UIs.', hours: '3.0 Hours', level: 'Beginner', icon: FaReact, iconColor: '#61DAFB' }, // React color
  { id: 'tailwind', title: 'Introduction to TailwindCSS', description: 'Learn to use TailwindCSS for efficient and modern styling.', hours: '2.0 Hours', level: 'Beginner', icon: RiTailwindCssFill, iconColor: '#38B2AC' }, // TailwindCSS color
  { id: 'mongodb', title: 'Introduction to MongoDB', description: 'Discover the basics of MongoDB, a NoSQL database.', hours: '2.5 Hours', level: 'Beginner', icon: FaDatabase, iconColor: '#4DB33D' }, // MongoDB color
];

const App = () => {
  const location = useLocation();

  // Determine if NavBarLoggedOut should be shown or not
  const showNavBarLoggedOut = location.pathname === '/';
  
  // Determine if NavBar should be shown or not
  const showNavBar = !['/login', '/register', '/verify', '/verify-code', '/reset-password'].includes(location.pathname) && !showNavBarLoggedOut;

  return (
    <div>
      {showNavBarLoggedOut && <NavBarLoggedOut />}
      {showNavBar && !showNavBarLoggedOut && <NavBar />}
      <div className={`pt-20 ${showNavBar ? 'pt-20' : ''}`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={
            <>
              <Carousel />
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Top Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {courses.map(course => (
                    <Link key={course.id} to={`/course/${course.id}`}>
                      <CourseCard
                        icon={course.icon}
                        title={course.title}
                        description={course.description}
                        hours={course.hours}
                        level={course.level}
                        iconColor={course.iconColor}
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <AboutUs />
              <Mission />
              <FAQ />
              <Footer />
            </>
          } />
          <Route path="/course/:courseId" element={<CourseDetails courses={courses} />} />
          <Route path="/html" element={<Html />} />
          <Route path="/typing" element={<Typing />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update-profile" element={<Profile />} />
          <Route path="/update-password" element={<Profile />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/comments/:postId" element={<Comments />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify step={1} />} />
          <Route path="/verify-code" element={<Verify step={2} />} />
          <Route path="/reset-password" element={<Verify step={3} />} />
          <Route path="/register" element={<Register />} />
          <Route path='/verification' element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;