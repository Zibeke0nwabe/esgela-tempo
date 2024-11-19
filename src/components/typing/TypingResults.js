import React from 'react';

const TypingResults = ({ results, onRetake }) => {
    return (
        <div className="results-container">
            <h2>Typing Test Results</h2>
            <p>Words Per Minute (WPM): {results.wpm.toFixed(2)}</p>
            <p>Accuracy: {results.accuracy.toFixed(2)}%</p>
            <p>Net WPM: {results.netWpm.toFixed(2)}</p>
            
            <button onClick={onRetake}>Retake Test</button>
        </div>
    );
};

export default TypingResults;
