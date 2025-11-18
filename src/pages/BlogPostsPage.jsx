import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []); 

  if (isLoading) {
    return <div className="loading-indicator">Loading posts...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="blog-posts-page">
      <h2>All Posts</h2>
      <div className="posts-list">
        {posts.map(post => (
          <article key={post.id} className="blog-post-summary">
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.body.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`} className="read-more">
              Read More...
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogPostsPage;