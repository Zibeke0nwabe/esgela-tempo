import React from 'react';

// Update the CourseCard component to accept an icon component and its color
const CourseCard = ({ title, description, hours, level, icon: Icon, iconColor }) => {
  return (
    <div className="bg-white p-4 rounded border border-gray-300 flex flex-col h-full">
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
      <button className="bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white font-semibold w-full py-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;