import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to My React Blog</h1>
        <p>
          Discover interesting stories, tech tutorials, and insights. 
          Join our community today!
        </p>
        
        <div className="cta-buttons">
          <Link to="/login" className="btn btn-primary">
            Login to Comment
          </Link>

          <Link to="/blog" className="btn btn-secondary">
            Explore Posts
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;