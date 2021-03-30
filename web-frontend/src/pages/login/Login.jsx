import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../components/sate_management/GlobalStore';
import Button from '../../components/buttons/Button';
import logo from '../../assests/Geniman.png';
import banner from '../../assests/LineChartBanner.png';
import './login.css';
import { NavLink, useHistory } from 'react-router-dom';
import { isPasswordValid } from '../../common/utils';
import { ToastProvider, useToasts } from 'react-toast-notifications';

const Login = (props) => {
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [inputsValid, setInputsValidity] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isShake, setShake] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();
  const history = useHistory();

  const [state, dispatch] = useContext(Context);
  const onPasswordFocus = () => {
    setPasswordError(false);
  };
  const onUsernameFocus = () => {
    setUsernameError(false);
  };
  const onPasswordBlur = (password) => {
    if (!isPasswordValid(password)) {
      setPasswordError(true);
    }
  };
  const onUsernameBlur = (username) => {
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
    dispatch({ type: 'TOGGLE_LOGIN' });
    const isFormValid = isInputsValid(password, username);
    if (isFormValid) {
      setLoading(true);
      setTimeout(() => {
        addToast('Successfully Logged in', { appearance: 'success', id: 'login-success' });
        dispatch({ type: 'TOGGLE_LOGIN' });
        history.push({ pathname: '/signup' });
        setLoading(false);
      }, 3000);
    } else {
      addToast('Invalid username/password, please try again ', {
        appearance: 'error',
        id: 'login-error',
      });
      setLoading(false);
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
                  onChange={(event) => {
                    setUsername(event.target.value);
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
                  onChange={(event) => {
                    setPassword(event.target.value);
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
            <Button utilClasses="-full-width" onClick={() => onLogin()} loading={loading}>
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
