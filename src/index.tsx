import React from 'react';
import ReactDOM from 'react-dom/client';  
import App from './App';
import './styles/styles.css';

// Create a root element using ReactDOM.createRoot
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
