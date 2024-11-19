import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetails = ({ courses }) => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const course = courses.find(course => course.id === courseId);

  const handleEnroll = () => {
    if (courseId === 'html') {
      navigate('/html');
    }
    else if(courseId ==='css'){
      navigate('/typing');
    } else {
      setMessage('We currently have HTML and Typing Test available. Other courses are still coming soon.');
    }
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mx-auto p-8 pt-12">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Course Details Content */}
        <div className="lg:w-3/5">
          <div className="mb-6">
            <div className="h-64 bg-black mb-4 rounded overflow-hidden relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/ZoOZK1_RhrI?si=KLL0fxCOsnI8-atm" 
                title="Course Preview" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-gray-600">{course.description}</p>
            <div className="flex items-center mt-4">
              <span className="bg-yellow-700 text-white text-xs py-1 px-2 rounded mr-2">Top Faculty</span>
              <span className="text-gray-500 text-sm">{course.level}</span>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Course Content</h2>
            <p className="text-gray-600">{course.content}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-xl mr-2">⭐ 4.7</span>
              <span className="text-gray-500 text-sm">16750 Ratings</span>
            </div>
            <div className="space-y-4">
              {/* Add review components here */}
            </div>
          </div>
        </div>
        <div className="lg:w-2/5">
          <div className="bg-white p-6 rounded shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-4">Enroll Now</h2>
            <button onClick={handleEnroll} className="bg-yellow-700 font-semibold text-white w-full py-3 rounded-lg mb-4">Enroll</button>
            {message && <p className="text-red-500 mt-4">{message}</p>}
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Course Info</h2>
            <div className="text-gray-600">
              <p className="mb-2">Hours: {course.hours}</p>
              <p className="mb-2">Level: {course.level}</p>
              <p className="mb-2">Instructor: Onwabe Zibeke</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;