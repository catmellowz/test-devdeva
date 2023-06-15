import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import UserListProvider from './contexts/UserListContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserListProvider>
      <App />
    </UserListProvider>
  </React.StrictMode>
);
