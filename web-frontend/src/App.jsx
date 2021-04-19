import React, { useEffect, useState, useContext } from 'react';
import { Context } from './components/sate_management/GlobalStore';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { getTokenPayload, isLoggedIn } from './common/utils';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import './App.css';

import GenimenSideBar from './components/nav/GenimenSideBar';
import Login from './pages/login/Login';
import Signup from './pages/signup/signup';

import HomePageNew from './pages/index/HomePageNew';
import HomeStart from './pages/index/HomeStartView';
import AboutUs from './pages/aboutUs/AboutUs';
import PageNotFound from './pages/pagenotfound/PageNotFound';

import URASViewAlt from './pages/uras/URASViewAlt';
import UrasResultsAlt from './pages/uras/UrasResultsAlt';
import Pssa3View from './pages/pssa3/Pssa3View';
import Pssa3Results from './pages/pssa3/pssa3Results';
import EXKEY from './pages/exkey/Exkey';
import ExkeyResult from './pages/exkey/ExkeyResults';

import Store from './components/sate_management/GlobalStore';
import ScrollUp from './components/scrollupbutton/ScrollUp';
import protect from './pages/wrappers/ProtectedRouteWrapper';

function App() {
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    const loggedIn = isLoggedIn();
    if (loggedIn) {
      dispatch({ type: 'LOGIN' });
      const payload = getTokenPayload();
      dispatch({ type: 'CHANGE_USER', payload: { username: payload.username } });
    } else {
      dispatch({ type: 'LOGOUT' });
    }
  }, []);
  const RoutesWNav = () => {
    return (
      <div>
        <GenimenSideBar></GenimenSideBar>
        <Switch>
          <Route exact path="/home" component={HomePageNew} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/analytics" component={HomeStart} />

          <Route exact path="/analytics/uras" component={protect(URASViewAlt)} />
          <Route path="/analytics/uras/results" component={protect(UrasResultsAlt)} />

          <Route exact path="/analytics/pssa" component={protect(Pssa3View)} />
          <Route path="/analytics/pssa/results" component={protect(Pssa3Results)} />

          <Route exact path="/analytics/exkey" component={protect(EXKEY)} />
          <Route path="/analytics/exkey/results" component={protect(ExkeyResult)} />

          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

          <Route exact path="/" component={() => <Redirect to="/home" />} />
          <Route path="*" exact={true} component={PageNotFound} />
        </Switch>

        <ScrollUp />
      </div>
    );
  };
  return (
    <ToastProvider autoDismissTimeout={4000} autoDismiss={true} placement={'top-center'}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/home" component={HomePageNew} />
            <Route component={RoutesWNav} />
          </Switch>
        </div>
      </Router>
    </ToastProvider>
  );
}

const AppWithStore = () => {
  return (
    <Store>
      <App></App>
    </Store>
  );
};

export default AppWithStore;
