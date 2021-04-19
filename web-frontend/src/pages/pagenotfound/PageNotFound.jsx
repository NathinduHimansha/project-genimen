import React from 'react';
import './pagenotfound.css';

function PageNotFound() {
  return (
    <div>
      <div id="page-not-found">
        <div class="page-not-found">
          <div class="page-notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <p>The page you are looking is unavailable.</p>
          <a href="#">Home page</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
