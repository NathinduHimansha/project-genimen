import React from 'react';
import Button from '../../components/buttons/Button';
import logo from '../../assests/Geniman.png';
import banner from '../../assests/LineChartBanner.png';
import './login.css';
import { NavLink } from 'react-router-dom';

const Login = (props) => {
  return (
    <div className="navbar-page-container">
      <div className="login-page-container -flex -flex-center -flex-middle -full-vheight">
        <div className="card login-card">
          <div className="login-header -flex -flex-col -flex-middle">
            <div className="login-logo">
              <img src={logo} />
            </div>
            <h1 className="heading1 login-title -light">Login with</h1>
          </div>
          <div className="credentials-section">
            <div className="login-input-wrapper -flex -flex-col">
              <div>
                <label for="username">
                  <span className="-medium">Username</span>
                </label>
              </div>
              <div className="login-username-input ">
                <input
                  placeholder="username/username@emai.com"
                  type="text"
                  id="username"
                  className="-full-width"
                />
              </div>
            </div>
            <div className="login-input-wrapper -flex -flex-col">
              <div>
                <label for="username">
                  <span className="-medium">Password</span>
                </label>
              </div>
              <div className="login-username-input ">
                <input placeholder="password" type="text" id="username" className="-full-width" />
              </div>
            </div>
          </div>
          <div className="login-btn-wrapper -mt-25">
            <Button utilClasses="-full-width">Login</Button>
          </div>
          <div className="login-signup-wrapper -flex -flex-col">
            <span className="login-signup-message">Don't have an accout?</span>
            <NavLink exact to="/signup" className="login-signup-btn">
              Sign Up here
            </NavLink>
          </div>
        </div>
        <div style={{ width: '50%' }} className="login-banner-wrapper-container -flex -flex-center">
          <div className="login-banner-wrapper" style={{ width: '100%' }}>
            <div className="fancy-heading-decorator">
              <h1 className="heading1 login-moto -light -no-margin" style={{ maxWidth: '700px' }}>
                Genimen Providing Better Insights On Product Reviews
              </h1>
            </div>
            <div className="login-banner">
              <img src={banner} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
