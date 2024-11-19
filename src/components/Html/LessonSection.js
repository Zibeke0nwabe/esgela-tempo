// src/components/Html/QuestionsSection.js
import React from 'react';
import '../../App.css'; // Importing App.css

const sections = [
  {
    title: "HTML Basics",
    lesson: {
      description: "HTML stands for HyperText Markup Language. It is used to create web pages and web applications. Here are some basic HTML elements:",
      exampleCode: "<h1>This is a heading</h1>\n<h2>This is a sub-heading</h2>\n<p>This is a paragraph.</p>"
    },
    questions: [
      "Write a h1 tag with text 'Hello World'",
      "Write a p tag with text 'Hello again'",
      "Create an unordered list with three items",
      "Create a link to an external website",
      "Insert an image with a source and alternative text"
    ]
  },
  {
    title: "HTML Links",
    lesson: {
      description: "Learn how to create links in HTML to connect your web pages and allow navigation between them.",
      exampleCode: "<a href='https://www.example.com'>Visit Example</a>"
    },
    questions: [
      "Create a link to an external website.",
      "Create an anchor link to a section within the same page.",
      "Open a link in a new tab.",
      "Create a mailto link.",
      "Create a link with a tooltip."
    ]
  },
  {
    title: "HTML Images",
    lesson: {
      description: "Explore how to insert images into your HTML documents to enhance visual content.",
      exampleCode: "<img src='path/to/image.jpg' alt='Description of the image'>"
    },
    questions: [
      "Insert an image with a source and alternative text.",
      "Set the width and height of an image.",
      "Create an image that acts as a link.",
      "Create a responsive image.",
      "Add a title attribute to an image."
    ]
  },
  {
    title: "HTML Lists",
    lesson: {
      description: "Learn how to create ordered and unordered lists in HTML to organize and structure content.",
      exampleCode: "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>"
    },
    questions: [
      "Create an unordered list with three items.",
      "Create an ordered list with three items.",
      "Add a nested list inside an unordered list item.",
      "Add a nested list inside an ordered list item.",
      "Create a definition list with two terms and their definitions."
    ]
  },
  {
    title: "HTML Forms",
    lesson: {
      description: "Understand how to create forms in HTML to collect user input and submit data to a server.",
      exampleCode: "<form action='/submit-form' method='POST'>\n  <label for='username'>Username:</label>\n  <input type='text' id='username' name='username'>\n  <br>\n  <input type='submit' value='Submit'>\n</form>"
    },
    questions: [
      "Create a basic form with input fields for username and password.",
      "Add a textarea element to the form.",
      "Include radio buttons and checkboxes in the form.",
      "Use the select element to create a dropdown menu.",
      "Implement form validation using HTML attributes."
    ]
  },
  {
    title: "HTML Semantics",
    lesson: {
      description: "Learn about semantic HTML elements that provide meaning to the content on your web page and improve accessibility.",
      exampleCode: "<article>\n  <header>\n    <h1>Article Title</h1>\n  </header>\n  <section>\n    <h2>Section Title</h2>\n    <p>Section content...</p>\n  </section>\n  <footer>\n    <p>Article footer...</p>\n  </footer>\n</article>"
    },
    questions: [
      "Create an article element with a header, section, and footer.",
      "Use the aside element to create a sidebar.",
      "Implement the main element to wrap the primary content.",
      "Add a footer element with contact information.",
      "Create a navigation menu using the nav element."
    ]
  },
  {
    title: "HTML Media",
    lesson: {
      description: "Explore how to integrate multimedia elements like audio and video into your HTML documents.",
      exampleCode: "<video width='320' height='240' controls>\n  <source src='movie.mp4' type='video/mp4'>\n  Your browser does not support the video tag.\n</video>\n<audio controls>\n  <source src='audio.mp3' type='audio/mpeg'>\n  Your browser does not support the audio element.\n</audio>"
    },
    questions: [
      "Embed a video with controls and a source.",
      "Add an audio player with controls.",
      "Use the video element to specify multiple sources.",
      "Add subtitles to a video using the track element.",
      "Create a background audio loop for a webpage."
    ]
  },
  {
    title: "HTML Canvas",
    lesson: {
      description: "Learn how to use the canvas element to draw graphics and animations directly within your web page.",
      exampleCode: "<canvas id='myCanvas' width='500' height='500'></canvas>\n<script>\n  var canvas = document.getElementById('myCanvas');\n  var ctx = canvas.getContext('2d');\n  ctx.fillStyle = 'red';\n  ctx.fillRect(10, 10, 100, 100);\n</script>"
    },
    questions: [
      "Draw a rectangle on the canvas.",
      "Create a circle with a specified radius.",
      "Implement a basic line drawing tool using canvas.",
      "Add text to the canvas at specific coordinates.",
      "Create an animation that moves a shape across the canvas."
    ]
  },
  {
    title: "HTML SVG",
    lesson: {
      description: "Understand how to use Scalable Vector Graphics (SVG) to create and manipulate vector graphics in HTML.",
      exampleCode: "<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'>\n  <circle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='red' />\n</svg>"
    },
    questions: [
      "Draw a rectangle with a border and fill color using SVG.",
      "Create a line and a path in SVG with different stroke styles.",
      "Add text to an SVG graphic with specific font properties.",
      "Use SVG to create a complex shape combining multiple elements.",
      "Implement SVG animations to change the properties of shapes over time."
    ]
  },
  {
    title: "HTML Accessibility",
    lesson: {
      description: "Learn how to make your HTML content more accessible to users with disabilities by using appropriate attributes and elements.",
      exampleCode: "<button aria-label='Close'>X</button>\n<input type='text' aria-required='true' aria-label='Username'>\n<img src='image.jpg' alt='A description of the image'>"
    },
    questions: [
      "Add ARIA roles and attributes to improve accessibility for screen readers.",
      "Ensure that all images have descriptive alt text.",
      "Implement keyboard navigation for interactive elements.",
      "Create accessible forms with proper labeling and instructions.",
      "Use semantic HTML elements to enhance accessibility and SEO."
    ]
  },
  {
    title: "HTML Data Attributes",
    lesson: {
      description: "Learn how to use data attributes to store custom data on HTML elements and access them with JavaScript.",
      exampleCode: "<div data-user-id='12345' data-role='admin'>User Profile</div>\n<script>\n  var element = document.querySelector('[data-user-id]');\n  console.log(element.dataset.userId); // Output: 12345\n</script>"
    },
    questions: [
      "Add a data attribute to a div to store a user's ID.",
      "Use JavaScript to access a custom data attribute from an element.",
      "Store multiple data attributes on an element and retrieve them.",
      "Create a data attribute to store a color code and use it in CSS.",
      "Implement a data attribute to track user actions on an element."
    ]
  },
  {
    title: "HTML Microdata",
    lesson: {
      description: "Explore how to use microdata to embed machine-readable data in HTML documents, enhancing SEO and data extraction.",
      exampleCode: "<div itemscope itemtype='http://schema.org/Person'>\n  <span itemprop='name'>John Doe</span>\n  <span itemprop='jobTitle'>Web Developer</span>\n  <span itemprop='address'>123 Main St</span>\n</div>"
    },
    questions: [
      "Implement microdata to describe a person with name, job title, and address.",
      "Use microdata to mark up a product with properties like name, price, and description.",
      "Add schema.org types to an HTML document to describe an event.",
      "Create a contact section using microdata for better search engine indexing.",
      "Use microdata to mark up reviews and ratings for a product."
    ]
  },
  {
    title: "HTML Web Components",
    lesson: {
      description: "Understand how to create reusable custom elements with HTML, CSS, and JavaScript using the Web Components standard.",
      exampleCode: "<template id='my-element'>\n  <style>\n    .container {\n      padding: 10px;\n      background-color: #f0f0f0;\n    }\n  </style>\n  <div class='container'>\n    <slot></slot>\n  </div>\n</template>\n<script>\n  class MyElement extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-element').content;\n      this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true));\n    }\n  }\n  customElements.define('my-element', MyElement);\n</script>\n<my-element>\n  <p>Custom content goes here!</p>\n</my-element>"
    },
    questions: [
      "Create a custom HTML element with shadow DOM.",
      "Define a custom element with a template and styles.",
      "Use a custom element in your HTML and add content to its slot.",
      "Implement lifecycle callbacks in a custom element.",
      "Create a custom element that interacts with other components on the page."
    ]
  },
  {
    title: "HTML Web Storage",
    lesson: {
      description: "Learn about web storage options like localStorage and sessionStorage for storing data on the client side.",
      exampleCode: "<script>\n  // Save data to localStorage\n  localStorage.setItem('username', 'JohnDoe');\n  // Retrieve data from localStorage\n  var username = localStorage.getItem('username');\n  console.log(username); // Output: JohnDoe\n</script>"
    },
    questions: [
      "Store a user's preference in localStorage and retrieve it.",
      "Use sessionStorage to save temporary data during a single session.",
      "Implement a mechanism to clear specific items from localStorage.",
      "Store complex data structures (e.g., objects) in localStorage.",
      "Check if data is available in localStorage and handle missing data gracefully."
    ]
  },
  {
    title: "HTML Custom Data Attributes",
    lesson: {
      description: "Explore the use of custom data attributes to store and manipulate additional information on HTML elements.",
      exampleCode: "<button data-action='like' data-id='1'>Like</button>\n<script>\n  var button = document.querySelector('[data-action]');\n  button.addEventListener('click', function() {\n    console.log('Action:', this.dataset.action);\n    console.log('ID:', this.dataset.id);\n  });\n</script>"
    },
    questions: [
      "Add custom data attributes to a button for tracking actions.",
      "Retrieve and use custom data attributes with JavaScript.",
      "Create a set of custom data attributes for different types of elements.",
      "Implement conditional logic based on the value of a data attribute.",
      "Use data attributes to dynamically update element styles."
    ]
  }
];

const QuestionsSection = ({ sectionIndex }) => {
  const section = sections[sectionIndex];

  return (
    <div className="section">
      <h3 className='text-2xl font-bold text-yellow-700'>{section.title}</h3>

      <div className="lesson-section mb-4">
        <h4 className='font-bold text-yellow-700'>Lesson</h4>
        <p className="description">{section.lesson.description}</p>
        <div className="example-section bg-black text-white p-4 mt-2 mb-2">
          <h4 className='font-bold'>Example</h4>
          <pre className="code-example">{section.lesson.exampleCode}</pre>
        </div>
      </div>

      <div>
        <h4 className='font-bold text-yellow-700'>Questions</h4>
        <ol className="text-gray-700 pl-4">
          {section.questions.map((question, index) => (
            <li key={index}>{`${index + 1}. ${question}`}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default QuestionsSection;