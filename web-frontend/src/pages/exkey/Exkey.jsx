import React from 'react';
import search from '../../assests/Search.png';
import './exkey.css';
import Bargraph from '../../components/graphs/BarGraph';
import TreeMap from '../../components/graphs/TreeMap';
import FancyHeading from '../../components/text/FancyHeading';
import Button from '../../components/buttons/Button';
import colourful_mobilePhone from '../../assests/colourful.png';
import axios from 'axios';
import { trendz } from '../../services/exkey-bargraph-service';

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
      'typewriter_loadingDescription 2s steps(10) 10ms normal both';

    document.querySelector('.analyze_again ').style.visibility = 'hidden';
    document.querySelector('.analysing_banner').style.visibility = 'hidden';

    document.querySelector('.loader_progress ').style.visibility = 'visible';

    setTimeout(function () {
      if (
        document.querySelector('.frequency-bars ') &&
        document.querySelector('.card-left ') &&
        document.querySelector('.card-right ') &&
        document.querySelector('.loader_progress ')
      ) {
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
    }, 3500);
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
      // otherKeywords()
      //   .then((response) => {
      //     this.setState({ data: response.data }), event.preventDefault();
      //     const otherKeywordsList = response.data.otherKeywords;
      //     this.setState({ otherKeywordsList });
      //     console.log(otherKeywordsList);
      //   })

      .catch((error) => {
        if (error) {
        }
      });
  };

  render() {
    return (
      <div className="main-body">
        <div className="animated_heading">
          <div className="-mb-40">
            <FancyHeading
              heading="LOOK WHAT PEOPLE ARE TALKING OF PHONES..."
              style={{ visibility: 'hidden' }}
            ></FancyHeading>
            <hr className="heading-sep" />
          </div>
        </div>

        <div className="body-split">
          <div className="-mt-60">
            <div className="analytics-container cards-split -mt-40">
              <div className="card-left" style={{ visibility: 'hidden' }}>
                <div className="card-heading-name-left">
                  <h3 className="heading3 -medium">TREND</h3>
                </div>

                <div className="frequency-bars" style={{ visibility: 'hidden' }}>
                  {/* {[
                    { percentage: 32, label: 'gorilla glass' },
                    { percentage: 20, label: '108Mp camera' },
                    { percentage: 100, label: 'facial recognition' },
                    { percentage: 17, label: 'wonderful' },
                    { percentage: 50, label: 'Good Storage' },
                    { percentage: 67, label: 'onscreen fingerprint' },
                    { percentage: 98, label: 'LCD Display' },
                    { percentage: 14, label: 'Budget' },
                    { percentage: 62, label: 'Snap Dragon chip' },
                  ].map((item, i) => (
                    <Bargraph key={i} percentage={item.percentage} label={item.label}></Bargraph>
                  ))} */}
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
                <div className="card-heading-name-right -mb-auto -flex-middle">
                  <h3 className="heading3 -medium">OTHER KEYWORDS</h3>

                  <div className="treeMap_align">
                    <TreeMap></TreeMap>
                  </div>
                </div>

                <div className="loader_progress" style={{ visibility: 'hidden' }}>
                  <div className="line_loader">
                    <div className="line_progress"></div>
                    <div className="line_progress"></div>
                    <div className="line_progress"></div>
                    <div className="line_progress"></div>
                  </div>
                  <div className="wrapper_progressBar">
                    <div class="loader-5">
                      <div class="loader-5-rect loader-5-rect-1"></div>
                      <div class="loader-5-rect loader-5-rect-2"></div>
                      <div class="loader-5-rect loader-5-rect-3"></div>
                      <div class="loader-5-rect loader-5-rect-4"></div>
                    </div>
                  </div>
                  <div className="loader_description">
                    <h2 className="heading3 -medium -no-margin feature-type-heading">
                      <b>ANALYSING IN PROGRESS...</b>
                    </h2>
                  </div>
                </div>

                <div className="analyze_again" style={{ visibility: 'visible' }}>
                  <div className="-flex -mt-40">
                    <div className="-flex-right">
                      <Button onClick={this.analyzeAgain} iconSrc={search} loading={false}>
                        Start Analysing
                      </Button>
                    </div>
                  </div>
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
