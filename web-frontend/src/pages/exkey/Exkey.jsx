import React from 'react';
import logo from '../../assests/geniman_logo_new.png';
import search from '../../assests/Search.png';
import './exkey.css';
import Bargraph from '../../components/graphs/BarGraph';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import WordCloud from '../../components/graphs/WordCloud';

class Exkey extends React.Component {
  analyzeAgain() {
    var i = 0;
    var counter = setInterval(function () {
      i++;
      document.querySelector('.counter_right').textContent = i + '%';
      document.querySelector('.counter_left').textContent = i + '%';

      if (i === 100) {
        clearInterval(counter);
        document.querySelector('.counter_right').style.border = 'unset';
        document.querySelector('.counter_right').style.visibility = 'hidden';
        document.querySelector('.spinner_right').style.visibility = 'hidden';

        document.querySelector('.counter_left').style.border = 'unset';
        document.querySelector('.counter_left').style.visibility = 'hidden';
        document.querySelector('.spinner_left').style.visibility = 'hidden';

        document.querySelector('.bar').style.visibility = 'visible';
      }
    }, 30);
  }

  render() {
    return (
      <div className="main-container">
        <div className="header">
          <div className="header-left-split">
            <img src={logo} className="logo" alt="logo" />
          </div>
        </div>

        <div className="body">
          <p className="keyword_topic">
            <b>LOOK WHAT PEOPLE ARE TALKING OF PHONES...</b>
          </p>
          <div className="body-left-split">
            <div className="card-left">
              <p className="topic-frequency-distribution-bargraph">FREQUENCY OF KEYWORDS</p>
              <div className="container_left">
                <div className="spinner_left"></div>
              </div>
              <div className="counter_left">0%</div>
              <Bargraph></Bargraph>
            </div>
          </div>

          <div className="body-right-split">
            <div className="card-right">
              <p className="vectorizer-plot-topic">VECTORIZE PLOT</p>
              <div className="bubble-chart">
                <div className="container_right">
                  <div className="spinner_right"></div>
                </div>
                <div className="counter_right">0%</div>{' '}
              </div>

              <div className="-flex -mt-40">
                <div className="analyze_again">
                  <button
                    className="btn primary-btn icon-btn -flex-right"
                    onClick={this.analyzeAgain}
                    id="analyze_button"
                  >
                    <span className="-bold">Start Analysing</span>
                    <img className="left" src={search} style={{ width: '20px' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exkey;
