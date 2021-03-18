import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/NavBar';
// import Home from './page/Home'
// import FeatureAnalyser from './page/FeautureAnalyser'
// import ModelFeatureAnalyser from './page/ModelFeautureAnalyser'
// import TopicExtractor from './page/TopicExtractor'
// import ModelFeatureAnalyser from './page/Login'
// import ModelFeatureAnalyser from './page/SignUp'
import URAS from './pages/uras/URAS';
import EXKEY from './pages/exkey/Exkey';
import Examples from './pages/experiment/Examples';
import SampleFeatureSelection from './pages/experiment/SampleFeatureSelection';
import URASView from './pages/uras/URASView';
import UrasResults from './pages/uras/UrasResults';

function App() {
  return (
    <Router>
      <div className="App">
        {/*<Nav/>*/}
        <Switch>
          {/* <Route path="/" exact component={Examples} /> */}
          <Route exact path="/" exact component={NavBar} />
          <Route path="/examples" component={Examples} />
          <Route path="/about" component={Home} />
          <Route path="/exkey" component={EXKEY} />
          <Route path="/uras" component={URASView} />
          <Route path="/urasresult" exact component={UrasResults} />
          <Route path="/pssa" component={Home} />
          <Route path="/fbfe" component={Home} />
          <Route path="/login" component={Home} />
          <Route path="/signup" component={Home} />
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
