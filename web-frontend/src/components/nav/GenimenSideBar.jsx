import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../components/sate_management/GlobalStore';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { toggleMode } from '../../common/style.js';
import Button from '../../components/buttons/Button';
import NavBar from './NavBar';
import warning from '../../assests/WarningRed.png';
import propic from '../../assests/ProfilePic.png';
import about from '../../assests/AboutLight.png';
import search from '../../assests/Search.png';
import dark from '../../assests/NightMode.png';
import light from '../../assests/LightMode.png';
import home from '../../assests/HomeWhite.png';
import Modal from '../modal/Modal';
import { logOut } from '../../common/utils';
const routes = [
  {
    title: 'Home',
    icon: home,
    subMenu: [],
    path: '/home',
  },
  {
    title: 'Analytics',
    icon: search,
    subMenu: [
      { title: 'Feature Sentiments', path: '/analytics/uras' },
      { title: 'Product Feature Sentiments', path: '/analytics/pssa' },
      { title: 'TRENDZ', path: '/exkey' },
    ],
    path: '/analytics',
  },
  {
    title: 'About',
    icon: about,
    subMenu: [],
    path: '/about',
  },
];

const GenimenSideBar = () => {
  const [themeMode, setTheme] = useState('dark');
  const [state, dispatch] = useContext(Context);
  const [openLogoutConfrimModal, setOpenModal] = useState(false);
  const onLogOut = () => {
    dispatch({ type: 'LOGOUT' });
    logOut();
    setOpenModal(false);
  };
  return (
    <>
      <Modal show={openLogoutConfrimModal}>
        <div className="modal-header -flex -flex-center -full-width">
          <img src={warning} style={{ width: '110px', opacity: '0.8' }} />
        </div>
        <div className="modal-content -mt-10 -mb-10">
          <h3 className="heading3 -no-margin -text-center -medium">Are you sure?</h3>
          <h5 className="-text-center heading5 -mt-10 -mb-5">
            You must login back to use our services!
          </h5>
        </div>
        <div className="modal-content modal-footer">
          <div className="-flex -full-width -flex-center">
            <Button
              onClick={() => {
                setOpenModal(false);
              }}
              outline={true}
              utilClasses={['red-outline logout-modal-button']}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                onLogOut();
              }}
              utilClasses={['logout-modal-button']}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
      <NavBar routes={routes}>
        <div className="theme-switch -flex -flex-center -mt-50">
          <img
            className={themeMode == 'light' ? 'dark-mode-icon -opacity-0' : 'dark-mode-icon'}
            src={dark}
            onClick={() => {
              toggleMode();
              if (themeMode == 'dark') {
                setTheme('light');
                dispatch({ type: 'TOGGLE_LIGHT' });
              } else {
                setTheme('dark');
                dispatch({ type: 'TOGGLE_DARK' });
              }
            }}
          />
          <img
            className={themeMode == 'dark' ? 'light-mode-icon -opacity-0' : 'light-mode-icon'}
            src={light}
            onClick={() => {
              toggleMode();
              if (themeMode == 'dark') {
                setTheme('light');
                dispatch({ type: 'TOGGLE_LIGHT' });
              } else {
                setTheme('dark');
                dispatch({ type: 'TOGGLE_DARK' });
              }
            }}
          />
        </div>
        <div className="-mt-auto">
          <div
            className={`auth-btn-wrapper -flex -flex-center -mt-auto ${
              state.login ? '-display-none' : ''
            }`}
          >
            <NavLink className="login-btn-link" exact to="/signup">
              <Button outline={true} utilClasses="signup-btn">
                Sign Up
              </Button>
            </NavLink>
            <NavLink className="login-btn-link" exact to="/login">
              <Button utilClasses=" login-btn" onClick={() => console.log(state.login)}>
                Login
              </Button>
            </NavLink>
          </div>

          <div
            className={`-flex -flex-center  ${
              state.login ? 'nav-profile-wrapper' : 'nav-profile-hidden'
            }`}
          >
            <div className="nav-user-wrapper">
              <div className="nav-propic-wrapper">
                <img className="nav-propic" src={propic} onClick={() => {}} />
              </div>
              <div className="nav-user-det">
                <span className="nav-username">{state.username}</span>
                <a
                  className="nav-user-logout-btn"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <span className="nav-user-logout">Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </NavBar>
    </>
  );
};
export default GenimenSideBar;
