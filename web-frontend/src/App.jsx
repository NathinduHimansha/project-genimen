import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav/NavBar';
import about from './assests/AboutLight.png';
import search from './assests/Search.png';
import dark from './assests/NightMode.png';
import light from './assests/LightMode.png';
import home from './assests/HomeWhite.png';
import URAS from './pages/uras/URAS';
import Login from './pages/login/Login';
import EXKEY from './pages/exkey/Exkey';
import Examples from './pages/experiment/Examples';
import SampleFeatureSelection from './pages/experiment/SampleFeatureSelection';
import URASView from './pages/uras/URASView';
import UrasResults from './pages/uras/UrasResults';
import { toggleMode } from './common/style.js';
import Button from './components/buttons/Button';

import LogoBanner from './pages/index/Logobanner';
import HomePage from './pages/index/HomePage';

const routes = [
  {
    title: 'Home',
    icon: home,
    subMenu: [],
    path: '/examples',
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

function App() {
  const [themeMode, setTheme] = useState('dark');
  return (
    <Router>
      <div className="App">
        <NavBar routes={routes}>
          <div className="theme-switch -flex -flex-center -mt-50">
            <img
              className={themeMode == 'light' ? 'dark-mode-icon -opacity-0' : 'dark-mode-icon'}
              src={dark}
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
            <Button outline={true} utilClasses="signup-btn">
              Sign Up
            </Button>
            <Button utilClasses="-mr-5 login-btn">Login</Button>
          </div>
        </NavBar>
        <Switch>
          <Route exact path="/" component={Examples}>
            <Redirect to="/home" />
          </Route>
          <Route path="/examples" component={Examples} />
          <Route path="/about" component={Login} />
          <Route path="/exkey" component={EXKEY} />
          <Route path="/analytics/uras" component={URASView} />
          <Route path="/urasresult" exact component={UrasResults} />
          <Route path="/pssa" component={Home} />
          <Route path="/fbfe" component={Home} />
          <Route path="/login" component={Home} />
          <Route path="/signup" component={Home} />
          <Route path="/logo" component={LogoBanner} />
          <Route path="/index" component={HomePage} />
        </Switch>
      </div>
    </Router>
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
