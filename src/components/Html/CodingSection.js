// src/components/Html/CodingSection.js
import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/html'; // Import HTML mode
import 'brace/theme/monokai'; // Import Monokai theme

const CodingSection = ({ onCodeChange }) => {
  return (
    <div className="code-editor section">
      <AceEditor
        mode="html"
        theme="monokai"
        onChange={onCodeChange}
        name="code_editor"
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="100%" // Adjust height as needed
        setOptions={{
          showGutter: true,
          highlightActiveLine: true,
          showPrintMargin: false,
        }}
      />
    </div>
  );
};

export default CodingSection;