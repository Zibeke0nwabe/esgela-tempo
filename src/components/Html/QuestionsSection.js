// src/components/Html/QuestionsSection.js
import React from 'react';
import '../../App.css'; // Importing App.css

export const sections = [
  {
    title: "HTML Multiple Choice",
    questions: [
      { type: "multiple-choice", prompt: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Markup Language", "Hypertext Markup Language"], correctOption: 0 },
      { type: "multiple-choice", prompt: "Which element is used for a paragraph?", options: ["<p>", "<paragraph>", "<para>", "<text>"], correctOption: 0 },
      { type: "multiple-choice", prompt: "How do you insert a comment in HTML?", options: ["<!-- This is a comment -->", "// This is a comment", "# This is a comment", "/* This is a comment */"], correctOption: 0 },
      { type: "multiple-choice", prompt: "Which tag is used to create a hyperlink?", options: ["<link>", "<a>", "<hyperlink>", "<url>"], correctOption: 1 },
      { type: "multiple-choice", prompt: "Which attribute specifies an image’s source?", options: ["src", "href", "alt", "source"], correctOption: 0 },
      { type: "multiple-choice", prompt: "Which tag is used for a line break?", options: ["<br>", "<lb>", "<break>", "<line>"], correctOption: 0 },
      { type: "multiple-choice", prompt: "What is the correct HTML element for inserting a horizontal rule?", options: ["<hr>", "<rule>", "<line>", "<hrule>"], correctOption: 0 },
      { type: "multiple-choice", prompt: "How do you include a JavaScript file in an HTML document?", options: ["<script src='file.js'></script>", "<javascript src='file.js'></javascript>", "<include src='file.js'></include>", "<js src='file.js'></js>"], correctOption: 0 },
      { type: "multiple-choice", prompt: "Which tag is used to define a table header?", options: ["<th>", "<thead>", "<header>", "<head>"], correctOption: 0 },
      { type: "multiple-choice", prompt: "Which HTML element is used to define the structure of a document?", options: ["<html>", "<body>", "<head>", "<section>"], correctOption: 0 }
    ]
  },
  {
    title: "HTML Basics",
    questions: [
      { type: "coding", prompt: "Create an h1 element with 'Hello World'", answer: "<h1>Hello World</h1>" },
      { type: "coding", prompt: "Create an h2 element with 'Welcome'", answer: "<h2>Welcome</h2>" },
      { type: "coding", prompt: "Create an h3 element with 'Greetings'", answer: "<h3>Greetings</h3>" },
      { type: "coding", prompt: "Create an h4 element with 'Salutations'", answer: "<h4>Salutations</h4>" },
      { type: "coding", prompt: "Create an h5 element with 'Farewell'", answer: "<h5>Farewell</h5>" },
      { type: "coding", prompt: "Create a p element with 'This is a paragraph.'", answer: "<p>This is a paragraph.</p>" },
      { type: "coding", prompt: "Create an a element with href attribute linking to 'https://www.example.com' with text Example", answer: "<a href='https://www.example.com'>Example</a>" },
      { type: "coding", prompt: "Create an img element with src attribute 'image.jpg' and alt attribute 'Sample Image'", answer: "<img src='image.jpg' alt='Sample Image'>" },
      { type: "coding", prompt: "Create a div element with class 'container'", answer: "<div class='container'></div>" },
      { type: "coding", prompt: "Create an ordered list with three items", answer: "<ol>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ol>" }
    ]
  },
  {
    title: "HTML Word Questions",
    questions: [
      { type: "word", prompt: "What does HTML stand for?", answer: "HyperText Markup Language" },
      { type: "word", prompt: "What tag is used for the largest heading?", answer: "h1" },
      { type: "word", prompt: "What attribute is used to add alternative text to an image?", answer: "alt" },
      { type: "word", prompt: "What tag is used to create an unordered list?", answer: "ul" },
      { type: "word", prompt: "Which tag is used to define a table row?", answer: "tr" },
      { type: "word", prompt: "What is the tag for a line break in HTML?", answer: "br" },
      { type: "word", prompt: "What tag is used to include JavaScript in an HTML document?", answer: "script" },
      { type: "word", prompt: "What attribute specifies the URL of an external script?", answer: "src" },
      { type: "word", prompt: "What tag is used to define a section in a document?", answer: "section" },
      { type: "word", prompt: "What HTML element is used to define important text?", answer: "strong" }
    ]
  }
];

const QuestionsSection = ({ sectionIndex, onChange }) => {
  const section = sections[sectionIndex];

  return (
    <div className="section p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className='text-3xl font-bold text-blue-800 mb-4'>{section.title}</h3>
      <div>
        <h4 className='text-xl font-semibold text-blue-700 mb-3'>Questions</h4>
        <ul className="space-y-4">
          {section.questions.map((question, index) => (
            <li key={index} className="p-4 bg-white border border-gray-300 rounded-md">
              <div className="font-medium text-gray-800 mb-2">{question.prompt}</div>
              {question.type === "coding" && (
                <textarea
                  rows="4"
                  placeholder="Write your code here..."
                  onChange={(e) => onChange(sectionIndex, index, e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              )}
              {question.type === "multiple-choice" && (
                <div className="mt-2 space-y-2">
                  {question.options.map((option, i) => (
                    <div key={i} className="flex items-center">
                      <input
                        type="radio"
                        id={`option-${index}-${i}`}
                        name={`question-${index}`}
                        value={i}
                        onChange={(e) => onChange(sectionIndex, index, e.target.value)}
                        className="mr-2"
                      />
                      <label htmlFor={`option-${index}-${i}`} className="text-gray-700">{option}</label>
                    </div>
                  ))}
                </div>
              )}
              {question.type === "word" && (
                <textarea
                  rows="4"
                  placeholder="Type your answer here..."
                  onChange={(e) => onChange(sectionIndex, index, e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionsSection;