import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from '../src/Main'
import reportWebVitals from './reportWebVitals';
import './assets/fonts/Font.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
reportWebVitals();
