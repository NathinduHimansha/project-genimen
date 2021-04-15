import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../components/sate_management/GlobalStore';
import Button from '../../components/buttons/Button';
import logo from '../../assests/Geniman.png';
import banner from '../../assests/LineChartBanner.png';
import './login.css';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { isEmailValid, isPasswordValid, logIn, saveToken } from '../../common/utils';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { login } from '../../services/auth-service';

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
  let path = useLocation().pathname;

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
    if (username.trim().length < 2) {
      setUsernameError(true);
    }
  };
  const isInputsValid = (password, username) => {
    if (isPasswordValid(password) && username.trim().length > 1) {
      return true;
    }
    setShake(true);
    return false;
  };
  const onLogin = () => {
    onUsernameBlur(username);
    onPasswordBlur(password);
    // dispatch({ type: 'LOGIN' });
    // saveToken('taifkdf23reraerdafkljafkdl4er');
    const isFormValid = isInputsValid(password, username);
    if (isFormValid) {
      setLoading(true);
      const credentials = {};
      credentials['password'] = password;
      if (isEmailValid(username)) {
        credentials['email'] = username;
      } else {
        credentials['username'] = username;
      }
      login(credentials)
        .then((res) => {
          if (res.data.status == 1) {
            logIn({ token: res.data.data.token, username: username });
            dispatch({ type: 'LOGIN' });
            dispatch({ type: 'CHANGE_USER', payload: { username: username } });
            addToast('Successfully Logged in', { appearance: 'success', id: 'login-success' });
            if (path.includes('login')) {
              history.push('/analytics');
            }
          } else {
            addToast(res.data.message, {
              appearance: 'error',
              id: 'login-error',
            });
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          addToast('Something went wront, please try again...', {
            appearance: 'error',
            id: 'login-error',
          });
          setLoading(false);
        });
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
      <div className="login-page-container-wrapper">
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
                      // onUsernameBlur(event.target.value);
                    }}
                    onFocus={onUsernameFocus}
                    value={username}
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
                      // onPasswordBlur(event.target.value);
                    }}
                    onFocus={onPasswordFocus}
                    value={password}
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
          <div
            style={{ width: '50%' }}
            className="login-banner-wrapper-container -flex -flex-center"
          >
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
    </div>
  );
};

export default Login;
