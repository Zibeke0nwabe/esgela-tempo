import React, { useState } from 'react';
import { FaHeart, FaComment, FaImage } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Example initial data for demonstration
const initialPosts = [
  { id: 1, user: 'John Doe', question: 'How do I center a div in CSS?', likes: 5, comments: ['Try using flexbox!'], language: 'CSS', image: null },
  { id: 2, user: 'Jane Smith', question: 'What is the best way to learn React?', likes: 3, comments: ['Practice and build projects!'], language: 'React', image: '/path/to/image.jpg' },
  // Add more initial posts as needed
];

const Support = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newQuestion, setNewQuestion] = useState('');
  const [newTopic, setNewTopic] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [filter, setFilter] = useState('All');
  const [likedPosts, setLikedPosts] = useState(new Set());

  const handleLike = (id) => {
    setLikedPosts((prevLikedPosts) => {
      const newLikedPosts = new Set(prevLikedPosts);
      if (newLikedPosts.has(id)) {
        newLikedPosts.delete(id);
      } else {
        newLikedPosts.add(id);
      }
      return newLikedPosts;
    });
  };

  const handleSendQuestion = () => {
    if (newQuestion && newTopic) {
      const newPost = {
        id: posts.length + 1,
        user: 'Current User', // Replace with actual user data
        question: newQuestion,
        likes: 0,
        comments: [],
        language: newTopic,
        image: newImage ? URL.createObjectURL(newImage) : null,
      };
      setPosts([newPost, ...posts]);
      setNewQuestion('');
      setNewTopic('');
      setNewImage(null);
    }
  };

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setNewImage(event.target.files[0]);
    }
  };

  const filteredPosts = filter === 'All' ? posts : posts.filter(post => post.language === filter);

  return (
    <div className="p-8 flex">
      <div className="w-1/4">
        <h2 className="text-xl font-bold mb-4">Filter by Topic</h2>
        <ul>
          {['All', 'HTML', 'CSS', 'JavaScript', 'React', 'MongoDB', 'TailwindCSS'].map(topic => (
            <li key={topic} className="mb-2">
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={filter === topic}
                  onChange={() => setFilter(topic)}
                  className="mr-2"
                />
                {topic}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 pl-8">
        <div className="mb-4 flex items-center">
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded-md mr-2"
            placeholder="Ask your Question..."
          />
          <select
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
            className="border border-gray-300 p-2 rounded-md mr-2"
          >
            <option value="">Select Topic</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="TailwindCSS">TailwindCSS</option>
            <option value="MongoDB">MongoDB</option>
          </select>
          <button
            onClick={handleSendQuestion}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Send
          </button>
        </div>
        <div className="flex items-center mb-4">
          <label className="cursor-pointer flex items-center">
            <FaImage className="text-blue-500 mr-2" />
            <input type="file" className="hidden" onChange={handleImageUpload} />
            <span>{newImage ? newImage.name : 'Upload Image'}</span>
          </label>
        </div>

        {filteredPosts.map(post => (
          <div key={post.id} className="border border-gray-300 p-4 rounded-md mb-4 bg-white">
            <h2 className="text-xl font-bold mb-2">{post.question}</h2>
            <p className="text-gray-600 mb-2">Posted by: {post.user}</p>
            <p className="text-gray-600 mb-2">Language: {post.language}</p>
            {post.image && <img src={post.image} alt="Post" className="mb-4 w-full rounded-md" />}
            <div className="flex items-center">
              <button
                onClick={() => handleLike(post.id)}
                className={`py-1 px-2 rounded-md mr-2 flex items-center ${likedPosts.has(post.id) ? 'text-red-500' : 'text-black'}`}
              >
                <FaHeart className="mr-1" /> {post.likes}
              </button>
              <Link to={`/support/comments/${post.id}`} className="bg-black text-yellow-700 py-1 px-2 rounded-md hover:text-yellow-800 flex items-center">
                <FaComment className="mr-1" /> {post.comments.length}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;