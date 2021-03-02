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

function App() {
  return (
    <Router>
      <div className="App">
        {/*<Nav/>*/}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Home} />
          <Route path="/uras" exact component={Home} />
          <Route path="/pssa" exact component={Home} />
          <Route path="/fbfe" exact component={Home} />
          <Route path="/login" exact component={Home} />
          <Route path="/signup" exact component={Home} />
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
