// src/components/Html/ResultsSection.js
import React from 'react';
import '../../App.css'; // Importing App.css

const ResultsSection = ({ code, clear }) => {
  // Clear the iframe content if the clear prop is true
  const srcDoc = clear ? "" : code;

  return (
    <div className="result-frame section">
      <div className="browser-header">
        <div className="browser-buttons">
          <span className="button close"></span>
          <span className="button minimize"></span>
          <span className="button maximize"></span>
        </div>
        <div className="browser-url-bar">
          <input type="text" value="https://localhost:3000" readOnly />
        </div>
      </div>
      <iframe srcDoc={srcDoc} title="Results" className="browser-content" />
    </div>
  );
};

export default ResultsSection;