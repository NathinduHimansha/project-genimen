import React from 'react';
import search from '../../assests/Search.png';
import './exkey.css';
import Bargraph from '../../components/graphs/BarGraph';
import TreeMap from '../../components/graphs/TreeMap';
import Button from '../../components/buttons/Button';
import colourful_mobilePhone from '../../assests/colourful.png';
import processGif from '../../assests/Process_loading.gif';
import axios from 'axios';
import { trendz } from '../../services/exkey-bargraph-service';
import CurrentLocation from '../../components/header/CurrentLocation';
import rightArrow from '../../assests/right-arrow.png';

class Exkey extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trendingFeatures: [],
      otherKeywordsList: [],
    };
  }

  analyzeAgain = (event) => {
    document.querySelector('.loader_description').style.animation =
      'typewriter_loadingDescription 3s steps(16) 10ms normal both';

    this.setState({
      loading: true,
    });

    setTimeout(function () {
      document.getElementById('analyze_again').style.display = 'none';
      document.querySelector('.analysing_banner').style.visibility = 'hidden';

      document.querySelector('.loader_progress ').style.visibility = 'visible';
      document.getElementById('userTrendDescription').style.display = 'none';
    }, 1200);

    setTimeout(function () {
      if (
        document.querySelector('.frequency-bars ') &&
        document.querySelector('.card-left ') &&
        document.querySelector('.card-right ') &&
        document.querySelector('.loader_progress ') &&
        document.querySelector('.treeMap_align ') &&
        document.getElementById('treeMap_align')
      ) {
        document.querySelector('.treeMap_align').style.animation = 'fadeIn 3s ease-out';
        document.getElementById('treeMap_align').style.display = 'block';
        document.querySelector('.frequency-bars ').style.visibility = 'visible';
        document.querySelector('.card-left ').style.visibility = 'visible';
        document.querySelector('.card-right ').style.visibility = 'visible';
        document.querySelector('.loader_progress ').style.visibility = 'hidden';

        document
          .getElementsByClassName('progress-percentage')[0]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[1]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[2]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[3]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[4]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[5]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[6]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[7]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[8]
          .classList.add('barchart_animation');
      }
    }, 5800);
    this.getRequestedData(event);
  };

  //handles the http request and routes the user
  getRequestedData = (event) => {
    //http request handling
    // trendz(this.state.selectedFeatures).then((response) => {
    trendz()
      .then((response) => {
        this.setState({ data: response.data }), event.preventDefault();
        const trendingFeatures = response.data.trend;
        this.setState({ trendingFeatures });
        console.log(trendingFeatures);
      })

      .catch((error) => {
        if (error) {
        }
      });
  };

  render() {
    return (
      <div className="main-body">
        <div className="navbar-page-container -mb-40">
          <div className="app-heading-header content-padding -flex -flex-col">
            {/* <div className="-mb-20"> */}
            {/* <IconHeading size="extra-small" iconUrl="var(--arrow-back-icon)"> */}
            {/* <h4 className="heading4 -no-margin"> */}
            {/* <span className="header-go-back">Back</span> */}
            {/* </h4> */}
            {/* </IconHeading> */}
            {/* </div> */}
            <div className="-mb-30">
              <CurrentLocation></CurrentLocation>
            </div>
            <h2 className="fancy-heading -no-margin">LOOK WHAT PEOPLE ARE TALKING OF PHONES...</h2>
          </div>
          {/* <div className="animated_heading">
          <div className="-mb-40">
            */}
          {/* <h2 className="fancy-heading -no-margin"> LOOK WHAT PEOPLE ARE TALKING OF PHONES...</h2> */}
          {/* 
            <hr className="heading-sep" />
          </div>
        </div> */}

          <div className="body-split">
            <div className="-mt-60">
              <div className="analytics-container cards-split -mt-40">
                <div className="card-left" style={{ visibility: 'hidden' }}>
                  <div className="card-heading-name-left">
                    <div className="card-topic">
                      <h3 className="heading3 -medium">TREND</h3>
                    </div>
                  </div>

                  <div className="frequency-bars" style={{ visibility: 'hidden' }}>
                    {this.state.trendingFeatures.map((item, i) => (
                      <Bargraph key={i} value={item.value} keyword={item.keyword}></Bargraph>
                    ))}
                  </div>
                </div>
                <div className="analysing_banner" style={{ visibility: 'visible' }}>
                  <img
                    className="colourful_mobilePhone banner_allignment"
                    src={colourful_mobilePhone}
                  />
                </div>
                <div className="card-right" style={{ visibility: 'hidden' }}>
                  <div
                    className="userTrendDescription"
                    id="userTrendDescription"
                    style={{ display: 'block', visibility: 'visible' }}
                  >
                    <div className="trend_description_align">
                      <div className="focus-card focus-info-card -mb-40">
                        <span className="-bold -normal">
                          TRENDZ<br></br>
                          <br></br>
                        </span>
                        Select the features you want to analyse and get a insight from. This will
                        give you the sentiment of the selected features from variety of phones and
                        an overall score for the feature
                      </div>
                    </div>
                  </div>

                  <div className="card-heading-name-right -mb-auto -flex-middle">
                    <div className="card-topic">
                      <h3 className="heading3 -medium">OTHER KEYWORDS</h3>
                    </div>
                    <div className="treeMap_align" id="treeMap_align" style={{ display: 'none' }}>
                      <TreeMap />
                    </div>
                  </div>

                  <div
                    className="analyze_again"
                    id="analyze_again"
                    style={{ display: 'block', visibility: 'visible' }}
                  >
                    <Button
                      onClick={this.analyzeAgain}
                      iconSrc={rightArrow}
                      loading={this.state.loading}
                    >
                      Start Analysing
                    </Button>
                  </div>
                </div>

                <div
                  className="loader_progress"
                  id="loader_progress"
                  style={{ visibility: 'hidden' }}
                >
                  <div className="loader_description">
                    <h2 className="heading3 -medium -no-margin feature-type-heading">
                      <b>ANALYSING IN PROGRESS...</b>
                    </h2>
                  </div>
                  <img className="process_gif" src={processGif}></img>
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
