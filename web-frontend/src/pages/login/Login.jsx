import React, { useEffect, useState } from 'react';
import Button from '../../components/buttons/Button';
import logo from '../../assests/Geniman.png';
import banner from '../../assests/LineChartBanner.png';
import './login.css';
import { NavLink } from 'react-router-dom';
import { isPasswordValid } from '../../common/utils';

const Login = (props) => {
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [inputsValid, setInputsValidity] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isShake, setShake] = useState(false);
  const onPasswordFocus = () => {
    setPasswordError(false);
  };
  const onUsernameFocus = () => {
    setUsernameError(false);
  };
  const onPasswordBlur = (password) => {
    setPassword(password);
    if (!isPasswordValid(password)) {
      setPasswordError(true);
    }
  };
  const onUsernameBlur = (username) => {
    setUsername(username);
    if (username.trim().length < 3) {
      setUsernameError(true);
    }
  };
  const isInputsValid = (password, username) => {
    if (isPasswordValid(password) && username.trim().length > 2) {
      return true;
    }
    setShake(true);
    return false;
  };
  const onLogin = () => {
    onUsernameBlur(username);
    onPasswordBlur(password);
    const isFormValid = isInputsValid(password, username);
    if (isFormValid) {
      console.log('logged in');
    } else {
      console.log('invalid');
    }
  };
  return (
    <div className="navbar-page-container">
      <div className="login-page-container -flex -flex-center -flex-middle -full-vheight">
        <div
          className={`${isShake ? 'shake' : ''} card login-card`}
          onAnimationEnd={() => setShake(false)}
        >
          <div className="login-header -flex -flex-col -flex-middle">
            <div className="login-logo">
              <img src={logo} />
            </div>
            <h1 className="heading1 login-title -light">Login with</h1>
          </div>
          <div className="credentials-section">
            <div className="login-input-wrapper -flex -flex-col">
              <div>
                <label htmlFor="username">
                  <span className="-medium">
                    Username<span className="required-star">*</span>
                  </span>
                </label>
              </div>
              <div className="login-input ">
                <input
                  placeholder="username/username@emai.com"
                  type="text"
                  id="username"
                  className={`${usernameError ? 'error-input' : ''} -full-width`}
                  onBlur={(event) => {
                    onUsernameBlur(event.target.value);
                  }}
                  onFocus={onUsernameFocus}
                />
              </div>
              <span
                className={
                  (usernameError ? '' : '-display-none ') +
                  'login-error-message login-password-error-message'
                }
              >
                invalid username
              </span>
            </div>
            <div className="login-input-wrapper -flex -flex-col">
              <div>
                <label htmlFor="username">
                  <span className="-medium">
                    Password<span className="required-star">*</span>
                  </span>
                </label>
              </div>
              <div className="login-input ">
                <input
                  placeholder="username/username@emai.com"
                  type="password"
                  id="password"
                  className={`${passwordError ? 'error-input' : ''} -full-width`}
                  onBlur={(event) => {
                    onPasswordBlur(event.target.value);
                  }}
                  onFocus={onPasswordFocus}
                />
              </div>
              <span
                className={
                  (passwordError ? '' : '-display-none ') +
                  'login-error-message login-password-error-message'
                }
              >
                password must contain min 6 characters
              </span>
            </div>
          </div>
          <div className="login-btn-wrapper -mt-25">
            <Button utilClasses="-full-width" onClick={() => onLogin()}>
              Login
            </Button>
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
