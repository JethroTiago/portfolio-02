import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom/client';
import App from './App';

// eslint-disable-next-line no-unused-expressions
ReactDOM, render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);