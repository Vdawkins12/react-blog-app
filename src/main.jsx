import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

import BlogPostsPage from './pages/BlogPostsPage.jsx';
import IndividualPostPage from './pages/IndividualPostPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        index: true, 
        element: <BlogPostsPage /> 
      },
      {
        path: 'post/:postId', 
        element: <IndividualPostPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);