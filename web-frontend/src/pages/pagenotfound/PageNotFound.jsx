import React from 'react';
import './pagenotfound.css';
import logo from '../../assests/favicon.png';

function PageNotFound() {
  return (
    <div>
      <div id="page-not-found">
        <div class="page-not-found">
          <div class="page-notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page is not found!</h2>
          <p>The page you are looking is unavailable.</p>
          <a href="/home">Home page</a>
          <a href="/analytics">Analytics</a>
          <a href="/aboutus">About Us</a>
          <div className="bottom-logo">
            <img className="gen-logo" src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
