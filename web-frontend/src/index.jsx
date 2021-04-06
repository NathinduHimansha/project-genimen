/* Add JavaScript code here! */
// console.log('Hello World! You did! Welcome to Snowpack :D');
import React from 'react';
import ReactDOM from 'react-dom';
import AppWithStore from './App.jsx';
ReactDOM.render(
  <React.StrictMode>
    <AppWithStore />
  </React.StrictMode>,
  document.getElementById('root'),
);
