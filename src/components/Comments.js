import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Example Comments Component
const Comments = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch post data from an API or local data
    const fetchPost = async () => {
      try {
        // Replace with your actual data fetching logic
        const response = await fetch(`/api/posts/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          console.error('Failed to fetch post');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleAddComment = async () => {
    if (newComment) {
      try {
        // Replace with your actual data posting logic
        const response = await fetch(`/api/posts/${id}/comments`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ comment: newComment }),
        });

        if (response.ok) {
          const updatedPost = await response.json();
          setPost(updatedPost);
          setNewComment('');
        } else {
          console.error('Failed to add comment');
        }
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{post.question}</h1>
      <p className="text-gray-600 mb-4">Posted by: {post.user}</p>
      <div className="bg-white border border-gray-300 p-4 rounded-md mb-4">
        <h2 className="text-xl font-bold mb-2">Comments</h2>
        {post.comments.length > 0 ? (
          <ul>
            {post.comments.map((comment, index) => (
              <li key={index} className="mb-2">{comment}</li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded-md mr-2"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Comments;