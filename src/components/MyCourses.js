import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

// Sample data structure for enrolled courses (This should come from the user's data)
const enrolledCourses = [
  // Example of enrolled courses
  { id: 'react', title: 'Introduction to React', description: 'Get started with React to build interactive UIs.', hours: '3.0 Hours', level: 'Beginner' },
];

// Sample data structure for available courses (This could be the same as in your home page)
const availableCourses = [
  { id: 'html', title: 'Introduction to HTML', description: 'Learn the basics of HTML to build the structure of web pages.', hours: '1.5 Hours', level: 'Beginner' },
  { id: 'css', title: 'Introduction to CSS', description: 'Understand the fundamentals of CSS for styling web pages.', hours: '2.0 Hours', level: 'Beginner' },
  { id: 'javascript', title: 'Introduction to JavaScript', description: 'Explore the basics of JavaScript programming for web development.', hours: '2.5 Hours', level: 'Beginner' },
  { id: 'mongodb', title: 'Introduction to MongoDB', description: 'Discover the basics of MongoDB, a NoSQL database.', hours: '2.5 Hours', level: 'Beginner' },
];

const MyCourses = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">My Courses</h1>

      {enrolledCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {enrolledCourses.map(course => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              hours={course.hours}
              level={course.level}
            />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-2xl">No course at the moment...</p>
      )}

      <h2 className="text-2xl font-bold mt-8 mb-4">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableCourses.map(course => (
          <Link key={course.id} to={`/course/${course.id}`}>
            <CourseCard
              title={course.title}
              description={course.description}
              hours={course.hours}
              level={course.level}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;