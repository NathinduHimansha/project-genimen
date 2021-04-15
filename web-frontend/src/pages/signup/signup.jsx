import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/buttons/Button';
import logo from '../../assests/Geniman.png';
import banner from '../../assests/LineChartBanner.png';
import './signup.css';
import { NavLink, useHistory } from 'react-router-dom';
import { isEmailValid, isPasswordValid, logIn, saveToken } from '../../common/utils';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { signup } from '../../services/auth-service';
import { Context } from '../../components/sate_management/GlobalStore';

const Signup = (props) => {
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [inputsValid, setInputsValidity] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isShake, setShake] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setconfirmPasswordError] = useState(false);
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
  const onUserEmailFocus = () => {
    setEmailError(false);
  };
  const onConfirmPasswordFocus = () => {
    setconfirmPasswordError(false);
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
  const onUserEmailBlur = (email) => {
    setEmail(email);
    if (!isEmailValid(email)) {
      setEmailError(true);
    }
  };
  const onConfirmPasswordBlur = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
    onPasswordBlur(password);
    if (!isPasswordMatch(password, confirmPassword)) {
      setconfirmPasswordError(true);
    }
  };
  const isPasswordMatch = (password, confirmPassword) => {
    return password == confirmPassword;
  };
  const isInputsValid = (password, username, email, confirmPassword) => {
    if (
      isPasswordValid(password) &&
      username.trim().length > 2 &&
      isEmailValid(email) &&
      isPasswordMatch(password, confirmPassword)
    ) {
      return true;
    }
    setShake(true);
    return false;
  };

  const onSignup = () => {
    onUsernameBlur(username);
    onPasswordBlur(password);
    onUserEmailBlur(email);
    onConfirmPasswordBlur(confirmPassword);
    const isFormValid = isInputsValid(password, username, email, confirmPassword);
    if (isFormValid) {
      setLoading(true);
      dispatch({ type: 'LOGIN' });
      signup({ username: username, email: email, password: confirmPassword })
        .then((res) => {
          if (res.data.status == 1) {
            logIn(res.data.token);
            dispatch({ type: 'LOGIN' });
            history.push({ pathname: '/analytics' });
            setLoading(false);
          } else {
            // console.log(res.data.message);
            addToast(res.data.message, { appearance: 'error', id: 'signup-error' });
            setLoading(false);
          }
        })
        .catch((err) => {
          addToast('Something went wront, please try again...', {
            appearance: 'error',
            id: 'signup-error',
          });
          setLoading(false);
        });

      // setTimeout(() => {
      // addToast('Successfully Signed up', { appearance: 'success', id: 'signup-success' });
      // history.push({ pathname: '/analytics' });
      // setLoading(false);
      // }, 3000);
    } else {
      console.log('invalid');
      addToast('Please fill the required fields ', {
        appearance: 'error',
        id: 'signup-error',
      });
      setLoading(false);
    }
  };

  return (
    <div className="navbar-page-container">
      <div className="signup-page-container -flex -flex-center -flex-middle -full-vheight-signup">
        <div
          className={`${isShake ? 'shake' : ''} card signup-card`}
          onAnimationEnd={() => setShake(false)}
        >
          <div className="signup-header -flex -flex-col -flex-middle">
            <div className="signup-logo">
              <img src={logo} />
            </div>
            <h1 className="heading1 signup-title -light">Signup with</h1>
          </div>

          <div className="credentials-section">
            <div className="signup-input-wrapper -flex -flex-col">
              <div>
                <label htmlFor="username">
                  <span className="-medium">
                    Username<span className="required-star">*</span>
                  </span>
                </label>
              </div>
              <div className="signup-username-input ">
                <input
                  placeholder="username"
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
                Username is too short
              </span>
            </div>

            <div className="signup-input-wrapper -flex -flex-col">
              <div>
                <label htmlFor="email">
                  <span className="-medium">
                    Email<span className="required-star">*</span>
                  </span>
                </label>
              </div>
              <div className="signup-username-input ">
                <input
                  placeholder="email"
                  type="text"
                  id="email"
                  className={`${emailError ? 'error-input' : ''} -full-width`}
                  onBlur={(event) => {
                    onUserEmailBlur(event.target.value);
                  }}
                  onFocus={onUserEmailFocus}
                />
              </div>
              <span
                className={
                  (emailError ? '' : '-display-none ') +
                  'login-error-message login-password-error-message'
                }
              >
                Please enter a valid email address
              </span>
            </div>
            <div className="signup-input-wrapper -flex -flex-col">
              <div>
                <label htmlFor="password">
                  <span className="-medium">
                    Password<span className="required-star">*</span>
                  </span>
                </label>
              </div>
              <div className="signup-username-input ">
                <input
                  placeholder="password"
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
            <div className="signup-input-wrapper -flex -flex-col">
              <div>
                <label htmlFor="confirmPassword">
                  <span className="-medium">
                    Confirm Password<span className="required-star">*</span>
                  </span>
                </label>
              </div>
              <div className="signup-username-input ">
                <input
                  placeholder="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  className={`${confirmPasswordError ? 'error-input' : ''} -full-width`}
                  onBlur={(event) => {
                    onConfirmPasswordBlur(event.target.value);
                  }}
                  onFocus={onConfirmPasswordFocus}
                />
              </div>
              <span
                className={
                  (confirmPasswordError ? '' : '-display-none ') +
                  'login-error-message login-password-error-message'
                }
              >
                password doesn't match
              </span>
            </div>
          </div>
          <div className="signup-btn-wrapper -mt-25">
            <Button utilClasses="-full-width" onClick={() => onSignup()} loading={loading}>
              Signup
            </Button>
          </div>
          <div className="signup-login-wrapper -flex -flex-col">
            <span className="signup-login-message">Already have an accout?</span>
            <NavLink exact to="/login" className="signup-login-btn">
              Log in here
            </NavLink>
          </div>
        </div>
        <div
          style={{ width: '50%' }}
          className="signup-banner-wrapper-container -flex -flex-center"
        >
          <div className="signup-banner-wrapper" style={{ width: '100%' }}>
            <div className="fancy-heading-decorator">
              <h1 className="heading1 signup-moto -light -no-margin" style={{ maxWidth: '700px' }}>
                Genimen Providing Better Insights On Product Reviews
              </h1>
            </div>
            <div className="signup-banner">
              <img src={banner} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
