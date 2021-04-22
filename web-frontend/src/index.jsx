/* Add JavaScript code here! */
// console.log('Hello World! You did! Welcome to Snowpack :D');
import React from 'react';
import ReactDOM from 'react-dom';
import AppWithStore from './App.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWithStore />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
