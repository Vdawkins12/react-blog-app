import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../components/CommentForm';

function IndividualPostPage() {
  const { postId } = useParams(); 

  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPostingComment, setIsPostingComment] = useState(false);

  useEffect(() => {
    const fetchPostData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!postRes.ok) throw new Error('Post not found!');
        const postData = await postRes.json();
        setPost(postData);

        const [userRes, commentsRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`),
          fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        ]);

        if (!userRes.ok) throw new Error('Author not found!');
        if (!commentsRes.ok) throw new Error('Comments not found!');

        const userData = await userRes.json();
        const commentsData = await commentsRes.json();

        setAuthor(userData);
        setComments(commentsData);

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostData();
  }, [postId]); 

  const handleAddComment = async ({ name, text }) => {
    if (!name.trim() || !text.trim()) {
      alert('Please fill out both name and comment fields.');
      return;
    }

    setIsPostingComment(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          body: text,
          email: 'testuser@example.com',
          postId: Number(postId),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) throw new Error('Failed to post comment.');

      const newComment = await response.json();
      
      const commentToDisplay = { ...newComment, name: name, body: text };
      setComments([commentToDisplay, ...comments]);

    } catch (err) {
      alert(`Error posting comment: ${err.message}`);
    } finally {
      setIsPostingComment(false);
    }
  };

  
  if (isLoading) {
    return <div className="loading-indicator">Loading post...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="individual-post-page">
      <article className="blog-post-full">
        <h2>{post.title}</h2>
        {author && (
          <div className="post-meta">
            By: {author.name} ({author.email})
          </div>
        )}
        <p>{post.body}</p>
      </article>

      <section className="comments-section">
        <h3>Leave a Comment</h3>
        <CommentForm onSubmit={handleAddComment} isSubmitting={isPostingComment} />
        
        <h3>Comments</h3>
        <div className="comment-list">
          {comments.length === 0 ? (
            <p>No comments yet. Be the first to comment!</p>
          ) : (
            comments.map(comment => (
              <div key={comment.id} className="comment">
                <strong>{comment.name}</strong>
                <p>{comment.body}</p> 
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default IndividualPostPage;