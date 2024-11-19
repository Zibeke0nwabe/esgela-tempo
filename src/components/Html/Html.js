// src/components/Html/Html.js
import React, { useState, useEffect } from 'react';
import LessonSection from './LessonSection';
import CodingSection from './CodingSection';
import ResultsSection from './ResultsSection';
import TestSection from './TestSection'; // Import the TestSection component
import '../../App.css'; // Importing App.css

const Html = () => {
  const [code, setCode] = useState("");
  const [sectionIndex, setSectionIndex] = useState(0);
  const [showTest, setShowTest] = useState(false); // State to show/hide the test
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to track screen width

  useEffect(() => {
    // Function to check screen width and set isSmallScreen state
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 970);
    };

    // Initial check and setting up event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNextSection = () => {
    if (sectionIndex < 14) { // Assuming there are 15 sections (0-14)
      setSectionIndex(prevIndex => prevIndex + 1);
      setCode(""); // Clear the code state
    }
  };

  const handleSkipToTest = () => {
    setShowTest(true); // Show the test when the button is clicked
  };

  const handleBackToLessons = () => {
    setShowTest(false); // Hide the test and go back to lessons
  };

  if (isSmallScreen) {
    return (
      <div className="flex flex-col items-center p-4 text-center">
        <p className="text-lg font-semibold text-gray-800">
          This website is optimized for PC and desktop viewing.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4">
      {!showTest ? (
        <main className="flex flex-row w-full pt-6 justify-between">
          <>
            <LessonSection sectionIndex={sectionIndex} />
            <CodingSection onCodeChange={setCode} />
            <ResultsSection code={code} clear={sectionIndex === 14} /> {/* Pass `clear` prop */}
          </>
        </main>
      ) : (
        <TestSection />
      )}
      <div className="button-container mt-4 flex justify-end space-x-4">
        {!showTest ? (
          <>
            <button
              className="skip-to-test-button bg-black text-white py-2 px-4 rounded"
              onClick={handleSkipToTest}
            >
              Skip to Test
            </button>
            <button
              className="next-button bg-yellow-500 text-white py-2 px-4 rounded"
              onClick={handleNextSection}
              disabled={sectionIndex === 14} // Disable 'Next' button on the last section
            >
              Next
            </button>
          </>
        ) : (
          <button
            className="back-to-lessons-button bg-gray-700 text-white py-2 px-4 rounded"
            onClick={handleBackToLessons}
          >
            Back to Lessons
          </button>
        )}
      </div>
    </div>
  );
};

export default Html;
