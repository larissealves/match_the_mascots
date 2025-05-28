import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app.jsx'; // Optional: if you use <App /> directly
import Router from './Router'; // Main routing component

// Mount the React application into the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router /> {/* Main router with route-based structure */}
    </BrowserRouter>
  </React.StrictMode>
);
