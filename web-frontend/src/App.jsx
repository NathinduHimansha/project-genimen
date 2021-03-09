import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import Nav from './component/Nav'
// import Home from './page/Home'
// import FeatureAnalyser from './page/FeautureAnalyser'
// import ModelFeatureAnalyser from './page/ModelFeautureAnalyser'
// import TopicExtractor from './page/TopicExtractor'
// import ModelFeatureAnalyser from './page/Login'
// import ModelFeatureAnalyser from './page/SignUp'
import URAS from './pages/uras/URAS';
import Card from './pages/experiment/Card';
import Button from './pages/experiment/Button';

function App() {
  return (
    <Router>
      <div className="App">
        {/*<Nav/>*/}
        <Switch>
          {/*<Route path="/" exact component={Home} />*/}
          <Route exact path="/" component={Card} />
          <Route path="/card" component={Card} />
          <Route path="/button" component={Button} />
          <Route path="/about" component={Home} />
          <Route path="/uras" component={Home} />
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
