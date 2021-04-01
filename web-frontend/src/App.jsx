import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav/NavBar';
import about from './assests/AboutLight.png';
import search from './assests/Search.png';
import dark from './assests/NightMode.png';
import light from './assests/LightMode.png';
import home from './assests/HomeWhite.png';

import Login from './pages/login/Login';
import Signup from './pages/signup/signup';
import EXKEY from './pages/exkey/Exkey';
import Examples from './pages/experiment/Examples';




import { toggleMode } from './common/style.js';
import Button from './components/buttons/Button';
import { ToastProvider, useToasts } from 'react-toast-notifications';

import HomePage from './pages/index/HomePage';

import UrasUserInputView from './pages/uras/UrasUserInputView';
import ScrollUp from './components/ScrollUpButton/ScrollUp';
import UrasInputResults from './pages/uras/UrasInputResults';


const routes = [
  {
    title: 'Home',
    icon: home,
    subMenu: [],
    path: '/home',
  },
  {
    title: 'About',
    icon: about,
    subMenu: [],
    path: '/about',
  },
  {
    title: 'Analytics',
    icon: search,
    subMenu: [
      { title: 'Sentiment by Features ', path: '/analytics/uras' },
      { title: 'Sentiment by Models', path: '/analytics/pssa' },
      { title: 'Trending Features', path: '/analytics/exkey' },
    ],
    path: '/analytics',
  },
  
];

function App() {
  const [themeMode, setTheme] = useState('dark');
  return (
    <ToastProvider autoDismissTimeout={4000} autoDismiss={true} placement={'top-center'}>
      <Router>
        <div className="App">
          
          <NavBar routes={routes}>
            <div className="theme-switch -flex -flex-center -mt-50">
              <img
                className={themeMode == 'light' ? 'dark-mode-icon -opacity-0' : 'dark-mode-icon'}
                src={dark}
                title="Click to Change the Color Theme"
                onClick={() => {
                  toggleMode();
                  if (themeMode == 'dark') {
                    setTheme('light');
                  } else {
                    setTheme('dark');
                  }
                }}
              />
              <img
                className={themeMode == 'dark' ? 'light-mode-icon -opacity-0' : 'light-mode-icon'}
                src={light}
                title="Click to Change the Color Theme"
                onClick={() => {
                  toggleMode();
                  if (themeMode == 'dark') {
                    setTheme('light');
                  } else {
                    setTheme('dark');
                  }
                }}
              />
            </div>
            <div className="auth-btn-wrapper -flex -flex-center -mt-auto">
              <NavLink className="login-btn-link" exact to="/signup">
                <Button outline={true} utilClasses="signup-btn">
                  Sign Up
                </Button>
              </NavLink>
              <NavLink className="login-btn-link" exact to="/login">
                <Button utilClasses=" login-btn">Login</Button>
              </NavLink>
            </div>
          </NavBar>
          <Switch>
            <Route exact path="/" component={HomePage}>
              <Redirect to="/index" />
            </Route>
            <Route path="/home" component={HomePage} />
            <Route path="/index" component={HomePage} />
            <Route path="/about" component={Login} />

            <Route exact path="/analytics/uras" component={UrasUserInputView} />
            <Route exact path="/analytics/uras/results" component={UrasInputResults} />

            <Route path="/analytics/exkey" component={EXKEY} />

            <Route path="/analytics/pssa" component={Home} />
          
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />

            <Route path="/examples" component={Examples} />
            <Route path="/exkey" component={EXKEY} />
            <Route path="/pssa" component={Home} />
          </Switch>

          <ScrollUp />//
        </div>
      </Router>
    </ToastProvider>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default App;
