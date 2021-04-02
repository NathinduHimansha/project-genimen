import React, { useEffect, useState, useContext } from 'react';
import { Context } from './components/sate_management/GlobalStore';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import GenimenSideBar from './components/nav/GenimenSideBar';
import Login from './pages/login/Login';
import Signup from './pages/signup/signup';
import EXKEY from './pages/exkey/Exkey';
import Examples from './pages/experiment/Examples';

import { ToastProvider, useToasts } from 'react-toast-notifications';

import HomePage from './pages/index/HomePage';
import ScrollUp from './components/ScrollUpButton/ScrollUp';
import UrasUserInputView from './pages/uras/UrasUserInputView';
import UrasInputResults from './pages/uras/UrasInputResults';
import URASViewAlt from './pages/uras/URASViewAlt';
import UrasResultsAlt from './pages/uras/UrasResultsAlt';
import Store from './components/sate_management/GlobalStore';
import { isLoggedIn } from './common/utils';
import PssaView from './pages/pssa2/pssaView';
import PssaResults from './pages/pssa2/pssaResults';

function App() {
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    const loggedIn = isLoggedIn();
    if (loggedIn) {
      dispatch({ type: 'LOGOUT' });
    } else {
      dispatch({ type: 'LOGIN' });
    }
  }, []);
  const RoutesWNav = () => {
    return (
      <div>
        <GenimenSideBar></GenimenSideBar>
        <Switch>
          <Route path="/about" component={Login} />
          <Route path="/analytics/exkey" component={EXKEY} />
          <Route exact path="/analytics/uras" component={URASViewAlt} />
          <Route path="/analytics/uras/results" component={UrasResultsAlt} />
          {/* <Route path="/analytics/uras/results" exact component={UrasInputResults} /> */}
          {/* <Route path="/analytics/uras" component={UrasUserInputView} /> */}
          <Route exact path="/analytics/pssa" component={PssaView} />
          <Route path="/analytics/pssa/results" component={PssaResults} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/exkey" component={EXKEY} />
          <Route path="/examples" component={Examples} />
          <Route exact path="/" component={() => <Redirect to="/home" />} />
        </Switch>
      </div>
    );
  };
  return (
    <ToastProvider autoDismissTimeout={4000} autoDismiss={true} placement={'top-center'}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route component={RoutesWNav} />
          </Switch>
          <ScrollUp />
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
