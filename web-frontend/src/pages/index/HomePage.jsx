import React, { Component } from 'react';
import Button from '../../components/buttons/Button';
import './homepage.css';
import Logobanner from '../../components/logobanner/Logobanner';
import LeftArrow from '../../assests/left-arrow.png';
import { NavLink } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="homepage-body">
          <div className="homepage-loginbtn">
            <NavLink to="/login" className="-text-decoration-none">
              <Button>LOGIN</Button>
            </NavLink>
          </div>

          <div className="homepage-logo">
            <Logobanner />
          </div>

          <div className="homepage-welcometxt">
            <div className="welcometxt-top">
              <div>
                <span>Predict</span>
                <span>Analyse</span>
              </div>
            </div>
            <div className="welcometxt-bottom">
              <div>
                <span>Design</span>
              </div>
            </div>
          </div>

          <div className="homepage-start-button -ml-70">
            <NavLink to="/index/start" className="-text-decoration-none">
              <Button>
                <img className="homepage-startbtnrow" /> START ANALYZING
              </Button>
            </NavLink>
          </div>

          <div className="homepage-bg-annimation">
            <div className="hbga-circle circle-xxlargee circle-shade1"></div>
            <div className="hbga-circle circle-xlarge circle-shade2"></div>
            <div className="hbga-circle circle-large circle-shade3"></div>
            <div className="hbga-circle circle-mediun circle-shade4"></div>
            <div className="hbga-circle circle-small circle-shade5"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
