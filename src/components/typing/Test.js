import React, { useState } from 'react';
import TypingResults from './TypingResults';

const Test = () => {
    const [results, setResults] = useState(null);
    const [hasPassed, setHasPassed] = useState(false);

    const handleResults = (results) => {
        setResults(results);
        if (results.netWpm >= 60 && results.accuracy >= 97) {
            setHasPassed(true);
        }
    };

    const handleRetake = () => {
        setResults(null);
        setHasPassed(false);
    };

    return (
        <div className="test-container">
            <h1>Typing Speed Test</h1>
            {results ? (
                <TypingResults results={results} onRetake={handleRetake} />
            ) : (
                <Typing setResults={handleResults} />
            )}
            {hasPassed && (
                <div className="pass-message">
                    <p>Congratulations! You've passed the test!</p>
                </div>
            )}
        </div>
    );
};

export default Test;