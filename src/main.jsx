import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

import BlogPostsPage from './pages/BlogPostsPage.jsx';
import IndividualPostPage from './pages/IndividualPostPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';

import { AuthProvider } from './context/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
        {index: true, element: <HomePage />},
        {path: 'blog', element: <BlogPostsPage />},
        {path: 'post/:postId', element: <IndividualPostPage /> },
        {path: 'contact', element: <ContactPage />},
        {path: 'login', element: <LoginPage />}
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);