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
import EXKEY from './pages/exkey/Exkey';
import Examples from './pages/experiment/Examples';
import Button from './pages/experiment/Button';
import SampleFeatureSelection from './pages/experiment/SampleFeatureSelection';
import WordCloud from './components/graphs/WordCloud';
import URASView from './pages/uras/URASView';

function App() {
  return (
    <Router>
      <div className="App">
        {/*<Nav/>*/}
        <Switch>
          {/*<Route path="/" exact component={Home} />*/}
          <Route exact path="/" component={Examples} />
          <Route path="/examples" component={Examples} />
          <Route path="/button" component={Button} />
          <Route path="/about" component={Home} />
          <Route path="/exkey" component={EXKEY} />
          <Route path="/uras" component={URASView} />
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
