import React, { useEffect, useState, useContext } from 'react';
import { Context } from './components/sate_management/GlobalStore';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import GenimenSideBar from './components/nav/GenimenSideBar';
import Login from './pages/login/Login';
import Signup from './pages/signup/signup';
import EXKEY from './pages/exkey/Exkey';
import ExkeyResult from './pages/exkey/ExkeyResults';
import ExkeyAlt from './pages/exkey/ExkeyAlt';
import test5 from './pages/exkey/TrendingFeaturesResults';

import Examples from './pages/experiment/Examples';

import { ToastProvider, useToasts } from 'react-toast-notifications';

import HomePage from './pages/index/HomePage';
import HomeStart from './pages/index/HomeStartView';

import UrasUserInputView from './pages/uras/UrasUserInputView';
import UrasInputResults from './pages/uras/UrasInputResults';
import URASViewAlt from './pages/uras/URASViewAlt';
import UrasResultsAlt from './pages/uras/UrasResultsAlt';
import Store from './components/sate_management/GlobalStore';
import { getTokenPayload, isLoggedIn } from './common/utils';
import Pssa3View from './pages/pssa3/Pssa3View';
import Pssa3Results from './pages/pssa3/pssa3Results';
import ScrollUp from './components/scrollupbutton/ScrollUp';
import protect from './pages/wrappers/ProtectedRouteWrapper';
import testcard from './pages/experiment/testcard';
import MenuCard from './components/menucard/MenuCard';

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
          <Route exact path="/index" component={HomePage} />
          <Route path="/about" component={Login} />

          <Route exact path="/analytics/uras" component={protect(URASViewAlt)} />
          <Route path="/analytics/uras/results" component={protect(UrasResultsAlt)} />
          {/* <Route path="/analytics/uras/results" exact component={UrasInputResults} /> */}
          {/* <Route path="/analytics/uras" component={UrasUserInputView} /> */}
          <Route exact path="/analytics/pssa" component={Pssa3View} />
          <Route path="/analytics/pssa/results" component={Pssa3Results} />

          <Route exact path="/analytics/exkey" component={EXKEY} />
          <Route exact path="/analytics/exkey/results" component={ExkeyResult} />

          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/examples" component={Examples} />
          <Route path="/test1" component={testcard} />
          <Route path="/test2" component={HomeStart} />
          <Route path="/test3" component={MenuCard} />
          <Route path="/test4" component={ExkeyAlt} />
          <Route path="/test5" component={test5} />
          <Route path="/analytics" component={HomeStart} />

          <Route exact path="/" component={() => <Redirect to="/index" />} />
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
            <Route exact path="/index" component={HomePage} />
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
