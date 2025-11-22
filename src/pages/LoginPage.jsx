import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Get the login function
import { useNavigate } from 'react-router-dom';   // Get the navigator

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Get the login function from our Context "Brain"
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (username && password) {
      // Update the global state to "Logged In"
      login(username); 
      
      // Redirect the user to the Blog page
      navigate('/blog');   
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input 
             type="text" 
             value={username}
             onChange={(e) => setUsername(e.target.value)} 
             required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
             type="password" 
             value={password}
             onChange={(e) => setPassword(e.target.value)} 
             required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;