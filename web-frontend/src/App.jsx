import React, { useEffect, useState, useContext } from 'react';
import { Context } from './components/sate_management/GlobalStore';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import GenimenSideBar from './components/nav/GenimenSideBar';
import URAS from './pages/uras/URAS';
import Login from './pages/login/Login';
import Signup from './pages/signup/signup';
import EXKEY from './pages/exkey/Exkey';
import Examples from './pages/experiment/Examples';
import SampleFeatureSelection from './pages/experiment/SampleFeatureSelection';
import UrasView from './pages/uras/URASView';
import URASViewAlt from './pages/uras/URASViewAlt';
import UrasResults from './pages/uras/UrasResults';
import UrasResultsAlt from './pages/uras/UrasResultsAlt';
import ReactToast from './pages/uras/ReactToast';
import ReactToast2 from './pages/uras/ReactToast2';
import TreeMap from './components/graphs/TreeMap';

import { ToastProvider, useToasts } from 'react-toast-notifications';

import HomePage from './pages/index/HomePage';
import UrasFeaturesInput from './pages/uras/UrasFeaturesInput';
import UrasUserView from './pages/uras/UrasUserView';
import Store from './components/sate_management/GlobalStore';
import { isLoggedIn } from './common/utils';

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
  return (
    <ToastProvider autoDismissTimeout={3000} autoDismiss={true} placement={'top-center'}>
      <Router>
        <div className="App">
          <GenimenSideBar></GenimenSideBar>
          <Switch>
            <Route exact path="/" component={Examples}>
              <Redirect to="/index" />
            </Route>
            <Route path="/home" component={HomePage} />
            <Route path="/examples" component={Examples} />
            <Route path="/about" component={Login} />
            <Route path="/exkey" component={EXKEY} />
            <Route path="/analytics/uras" component={URASViewAlt} />
            <Route path="/urasresult" exact component={UrasResultsAlt} />
            <Route path="/pssa" component={Home} />
            <Route path="/fbfe" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/index" component={HomePage} />
            <Route path="/test" component={ReactToast} />
            <Route path="/test2" component={ReactToast2} />
            <Route path="/test3" component={TreeMap} />
            <Route path="/test4" component={UrasUserView} />
          </Switch>
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

const AppWithStore = () => {
  return (
    <Store>
      <App></App>
    </Store>
  );
};

export default AppWithStore;
