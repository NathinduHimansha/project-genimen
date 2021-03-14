import React from 'react';
import logo from '../../assests/geniman_logo_new.png';
import search from '../../assests/Search.png';
import './exkey.css';
import Bargraph from '../../components/graphs/BarGraph';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import WordCloud from '../../components/graphs/WordCloud';
import { Chart, Transform, Cloud } from 'rumble-charts';

const series = [
  {
    data: [
      { label: 'Highcharts', y: 30 },
      { label: 'amCharts', y: 13 },
      { label: 'Google Charts', y: 31 },
      { label: 'ChartJS', y: 15 },
      { label: 'TauCharts', y: 8 },
      { label: 'FusionCharts', y: 2 },
      { label: 'ZingChart', y: 2 },
      { label: 'uvCharts', y: 1 },
      { label: 'jQuery Sparklines', y: 1 },
      { label: 'Ember Charts', y: 2 },
      { label: 'Canvas.js', y: 16 },
      { label: 'Flot', y: 1 },
      { label: 'D3.js', y: 27 },
      { label: 'n3-charts', y: 3 },
      { label: 'NVD3', y: 3 },
      { label: 'Chartist.js', y: 3 },
      { label: 'C3.js', y: 14 },
      { label: 'Cubism.js', y: 1 },
      { label: 'Rickshaw', y: 2 },
    ],
  },
];
class Exkey extends React.Component {
  analyzeAgain() {
    var i = 0;
    var counter = setInterval(function () {
      i++;
      document.querySelector('.counter').textContent = i + '%';
      if (i === 100) {
        clearInterval(counter);
        document.querySelector('.counter').style.border = 'unset';
        document.querySelector('.counter').style.visibility = 'hidden';
        document.querySelector('.spinner').style.visibility = 'hidden';
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
          <div className="header-right-split">
            <Navbar variant="light">
              <Nav className="navElements">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about" style={{ marginLeft: '170px' }}>
                  About
                </Nav.Link>
                <Nav.Link href="#developers" style={{ marginLeft: '40%' }}>
                  Developers
                </Nav.Link>
                <Nav.Link href="#help" style={{ marginLeft: '38%' }}>
                  Help
                </Nav.Link>
              </Nav>
            </Navbar>
          </div>
        </div>

        <div className="body">
          <p className="keyword_topic">
            <b>LOOK WHAT PEOPLE ARE TALKING OF PHONES...</b>
          </p>
          <Bargraph></Bargraph>

          <div className="body-right-split">
            <div className="card-right">
              <p className="vectorizer-plot-topic">VECTORIZE PLOT</p>
              <div className="bubble-chart">
                <Chart width={600} height={500} series={series} minY={0}>
                  <Transform method="transpose">
                    <Cloud
                      font="sans-serif"
                      minFontSize={10}
                      maxFontSize={50}
                      padding={-15}
                      layerWidth={500}
                    />
                  </Transform>
                </Chart>
              </div>

              <div className="-flex -mt-40">
                <div className="analyze_again">
                  <button
                    className="btn primary-btn icon-btn -flex-right"
                    onClick={this.analyzeAgain}
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
