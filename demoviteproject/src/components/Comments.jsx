import React, { useState } from 'react';

const initialComments = [
  { id: 1, user: 'ReactFan', text: 'Great! Very informative.' },
  { id: 2, user: 'CodeNewbie', text: "Awesome!" },
];

function Comments() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;

    const commentToAdd = {
      id: comments.length + 1, 
      user: 'Guest', 
      text: newComment,
    };

    setComments([...comments, commentToAdd]);
    setNewComment('');
  };

  return (
    <section className="comments-section">
      <h3>Comments</h3>
      
      {/* Comments */}
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Submit Comment</button>
      </form>

      {/* Comment List */}
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.id} className="comment">
            <strong>{comment.user}</strong>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Comments;