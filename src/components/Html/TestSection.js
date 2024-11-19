import React, { useState, useEffect } from 'react';
import '../../App.css'; // Importing App.css
import { sections } from './QuestionsSection'; // Import sections from QuestionsSection
import Certificate from './Certificate'; // Import the Certificate component

const TestSection = () => {
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes timer
  const [submitted, setSubmitted] = useState(false);
  const [scores, setScores] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userName, setUserName] = useState(''); // Add state for user's name

  useEffect(() => {
    if (timeRemaining > 0 && !submitted) {
      const timer = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeRemaining === 0 && !submitted) {
      handleSubmit(); // Automatically submit if time is up
    }
  }, [timeRemaining, submitted]);

  const handleChange = (sectionIndex, questionIndex, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [`${sectionIndex}-${questionIndex}`]: value
    }));
  };

  const handleSubmit = () => {
    const calculatedScores = {};
    let total = 0;
    let totalQuestions = 0;

    sections.forEach((section, sectionIndex) => {
      let sectionScore = 0;
      totalQuestions += section.questions.length; // Count total questions

      section.questions.forEach((question, questionIndex) => {
        const userAnswer = answers[`${sectionIndex}-${questionIndex}`];
        
        if (question.type === "coding") {
          const correctAnswer = question.answer.trim().toLowerCase();
          const userAnswerNormalized = (userAnswer || '').trim().toLowerCase();
          if (userAnswerNormalized.includes(correctAnswer)) {
            sectionScore++;
          }
        } else if (question.type === "multiple-choice") {
          const correctOption = question.correctOption;
          if (parseInt(userAnswer) === correctOption) {
            sectionScore++;
          }
        } else if (question.type === "word") {
          const correctAnswer = question.answer.trim().toLowerCase();
          const userAnswerNormalized = (userAnswer || '').trim().toLowerCase();
          if (userAnswerNormalized === correctAnswer) {
            sectionScore++;
          }
        }
      });

      calculatedScores[sectionIndex] = sectionScore;
      total += sectionScore;
    });

    const percentage = (total / totalQuestions) * 100;
    
    setScores(calculatedScores);
    setTotalScore(total);
    setSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < sections[currentSectionIndex].questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentQuestionIndex(0);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setCurrentQuestionIndex(sections[currentSectionIndex - 1].questions.length - 1);
    }
  };

  return (
    <div className="w-full p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-yellow-700">Test</h2>
      <div className="timer mb-6">
        <h4 className='text-xl font-semibold'>Time Remaining: {Math.floor(timeRemaining / 60)}:{String(timeRemaining % 60).padStart(2, '0')}</h4>
      </div>
      {!submitted ? (
        <div className="question-container mb-8">
          <div className="question-content p-4 bg-white border rounded-lg">
            <h3 className='text-2xl font-bold mb-4 text-yellow-600'>{sections[currentSectionIndex].title}</h3>
            <div className="mb-4">
              <label className="block font-medium text-gray-700">{sections[currentSectionIndex].questions[currentQuestionIndex].prompt}</label>
              {sections[currentSectionIndex].questions[currentQuestionIndex].type === "coding" && (
                <textarea
                  rows="3"
                  value={answers[`${currentSectionIndex}-${currentQuestionIndex}`] || ''}
                  onChange={(e) => handleChange(currentSectionIndex, currentQuestionIndex, e.target.value)}
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                />
              )}
              {sections[currentSectionIndex].questions[currentQuestionIndex].type === "multiple-choice" && (
                <div className="mt-2">
                  {sections[currentSectionIndex].questions[currentQuestionIndex].options.map((option, i) => (
                    <div key={i} className="flex items-center">
                      <input
                        type="radio"
                        name={`question-${currentSectionIndex}-${currentQuestionIndex}`}
                        value={i}
                        checked={parseInt(answers[`${currentSectionIndex}-${currentQuestionIndex}`]) === i}
                        onChange={(e) => handleChange(currentSectionIndex, currentQuestionIndex, e.target.value)}
                        className="mr-2"
                      />
                      <label>{option}</label>
                    </div>
                  ))}
                </div>
              )}
              {sections[currentSectionIndex].questions[currentQuestionIndex].type === "word" && (
                <textarea
                  rows="3"
                  value={answers[`${currentSectionIndex}-${currentQuestionIndex}`] || ''}
                  onChange={(e) => handleChange(currentSectionIndex, currentQuestionIndex, e.target.value)}
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full bg-white"
                />
              )}
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              className={`bg-black text-white py-2 px-4 rounded-lg ${currentSectionIndex === 0 && currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 transition'}`}
              onClick={handlePreviousQuestion}
              disabled={currentSectionIndex === 0 && currentQuestionIndex === 0}
            >
              Previous
            </button>
            {currentSectionIndex === sections.length - 1 && currentQuestionIndex === sections[currentSectionIndex].questions.length - 1 ? (
              <button
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : (
              <button
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
                onClick={handleNextQuestion}
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="results-container">
          <h2 className="text-3xl font-bold text-yellow-700 mb-6">Results</h2>
          {Object.keys(scores).map(sectionIndex => (
            <div key={sectionIndex} className="mb-4">
              <h3 className="text-2xl font-bold text-yellow-600">{sections[sectionIndex].title}</h3>
              <p className="text-xl">Score: {scores[sectionIndex]} / {sections[sectionIndex].questions.length}</p>
            </div>
          ))}
          <h3 className="text-3xl font-bold text-yellow-700">Total Score: {totalScore}</h3>

          {(totalScore / sections.reduce((acc, section) => acc + section.questions.length, 0)) >= 0.5 ? (
            <div className="certificate-section mt-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-600">Congratulations! You earned a certificate.</h2>
              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-full mb-4"
              />
              <Certificate userName={userName} courseName="HTML Course" />
            </div>
          ) : (
            <p className="text-xl text-red-600 mt-4">Unfortunately, you did not pass. Please try again.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TestSection;