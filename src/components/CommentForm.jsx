import React, { useState } from 'react';

function CommentForm({ onSubmit, isSubmitting }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    onSubmit({ text: comment });
    
    setComment('');
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Posting...' : 'Submit Comment'}
      </button>
    </form>
  );
}

export default CommentForm;