import React from 'react';
import './exkey.css';
import Bargraph from '../../components/graphs/BarGraph';
import TreeMap from '../../components/graphs/TreeMap';
import Button from '../../components/buttons/Button';
import colourful_mobilePhone from '../../assests/colourful.png';
import axios from 'axios';
import { trendz } from '../../services/exkey-bargraph-service';
import { otherKeywordsTrend } from '../../services/exkey-treemap-service';
import CurrentLocation from '../../components/header/CurrentLocation';
import rightArrow from '../../assests/right-arrow.png';
import lightBulb from '../../assests/tip_bulb.png';
import FancyHeading from '../../components/text/FancyHeading';
import fire from '../../assests/fire.png';

class Exkey extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trendingFeatures: [], //trending keywords array (card left)
      otherKeywordsList: [], //other keywords array (card right)
    };
  }

  //analyze again button action
  analyzeAgain = (event) => {
    this.setState({
      loading: true,
    });

    setTimeout(function () {
      if (
        //if the below mentioned class and ids are set
        // document.querySelector('.analysingImg ') &&
        document.querySelector('.analysing_banner ') &&
        document.querySelector('.loader_progress ') &&
        document.querySelector('.userTrendDescription ') &&
        document.getElementById('analyze_again')
      ) {
        //after 120 milliseconds
        //After the button click load the analysing in progress text by a typing animation
        // document.querySelector('.analysingImg').style.animation =
        //   'typewriter_loadingDescription 3s steps(16) 10ms normal both';
        //after the button click make the button dissapear
        document.getElementById('analyze_again').style.display = 'none';
        //making the analysing banner dissapear after 1200 milliseconds
        document.querySelector('.analysing_banner').style.visibility = 'hidden';

        //making the loader progress appear after 1200 milliseconds
        document.querySelector('.loader_progress ').style.visibility = 'visible';
        //making the userTrendDescription dissapear after 1200 milliseconds
        document.getElementById('userTrendDescription').style.display = 'none';
      }
    }, 1200);

    setTimeout(function () {
      if (
        //if the below mentioned class and ids are set
        document.querySelector('.frequency-bars ') &&
        document.querySelector('.card-left ') &&
        document.querySelector('.card-right ') &&
        document.querySelector('.loader_progress ') &&
        document.querySelector('.treeMap_align ') &&
        document.getElementById('treeMap_align')
      ) {
        //after 5800 milliseconds
        //make and animation to the treemap_align div dexcibed below
        document.querySelector('.treeMap_align').style.animation = 'fadeIn 3s ease-out';
        //making visible the treemap_align div described below
        document.getElementById('treeMap_align').style.display = 'grid';
        //making visible the frequency-bars div described below
        document.querySelector('.frequency-bars ').style.visibility = 'visible';
        //making visible the card-left div described below
        document.querySelector('.card-left ').style.visibility = 'visible';
        //making visible the card-right div described below
        document.querySelector('.card-right ').style.visibility = 'visible';
        //hiding the loader_progress div described below
        document.querySelector('.loader_progress ').style.visibility = 'hidden';

        //bar graph animation starts fter 5800 milliseconds
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
    trendz().then((response) => {
      this.setState({ data: response.data }), event.preventDefault();
      const trendingFeatures = response.data.trend;
      this.setState({ trendingFeatures });
      console.log(trendingFeatures);
    });

    otherKeywordsTrend()
      .then((response) => {
        this.setState({ data: response.series }), event.preventDefault();
        const otherKeywordsList = response.series;
        this.setState({ otherKeywordsList });
        console.log(otherKeywordsList);
      })

      .catch((error) => {
        if (error) {
        }
      });
  };

  render() {
    return (
      <div className="main-body">
        {/*align the header according to the window sizes*/}
        <div className="heading_align">
          <div className="app-heading-header content-padding -flex -flex-col">
            <div className="-mb-30">
              {/*showing the current location of the page when it navigates from one page to another*/}
              <CurrentLocation></CurrentLocation>
            </div>
            {/*main topic of the heading*/}
            <h2 className="fancy-heading -no-margin">LOOK WHAT PEOPLE ARE TALKING OF PHONES...</h2>
          </div>
          <div className=" -mt-60 -mb-90 content-padding">
            <FancyHeading decoratorClassName="fancy-heading2-decorator">
              <h2 className="heading2 -medium -no-margin heading2-sep-margin">
                {/*subtopic of the heading*/}
                Smartphone Feature Trendz
              </h2>
            </FancyHeading>
            {/*line seperator after the subtopic*/}
            <hr className="heading-sep" />
          </div>
        </div>

        <div className="body-split">
          <div className="-mt-60">
            <div className="analytics-container cards-split -mt-40">
              {/*hidding the left card at the begining of the exkey page which represents the treemap*/}
              <div className="card-left" style={{ visibility: 'hidden' }}>
                <div className="card-heading-name-left">
                  <div className="card-topic">
                    <h3 className="heading3 -medium">
                      {/*Name of the left card which represents the bargraph of trending keywords*/}
                      TREND
                      {/*trending fire image*/}
                      <img
                        src={fire}
                        style={{
                          width: '5%',
                          height: '7.2%',
                          marginLeft: '3%',
                        }}
                        alt="tip_bulb"
                      />
                    </h3>
                  </div>
                </div>
                {/*showing the bargrpah to the user after the relavent timecount mentioned above inside the button action*/}
                <div className="frequency-bars" style={{ visibility: 'hidden' }}>
                  {this.state.trendingFeatures.map((item, i) => (
                    <Bargraph key={i} value={item.value} keyword={item.keyword}></Bargraph>
                  ))}
                </div>
              </div>
              {/*making visible the colurful mobile phone image at the exkey home page*/}
              <div className="analysing_banner" style={{ visibility: 'visible' }}>
                <img className="colourful_mobilePhone " src={colourful_mobilePhone} />
              </div>

              {/*starting of the card right elements*/}

              {/*hidding the right card at the begining of the exkey page which represents the treemap*/}
              <div className="card-right" style={{ visibility: 'hidden' }}>
                {/*trend description which is dispplayed on the right side of the begining of the exkey page*/}
                <div
                  className="userTrendDescription"
                  id="userTrendDescription"
                  style={{ display: 'block', visibility: 'visible' }}
                >
                  <div className="trend_description_align">
                    <div className="focus-card focus-info-card -mb-40">
                      <img
                        src={lightBulb}
                        style={{
                          width: '6%',
                          height: '1%',
                          paddingRight: '5%',
                        }}
                        alt="tip_bulb"
                      />
                      <div style={{ marginTop: '-4%', marginLeft: '10%' }}>
                        <span className="-bold -normal">
                          WHY TREND THIS MUCH IMPORTANT FOR YOU ?<br></br>
                          <br></br>
                          <br></br>
                        </span>
                      </div>
                      <div style={{ marginTop: '-3%' }}>
                        Select the features you want to analyse and get a insight from. This will
                        give you the sentiment of the selected features from variety of phones and
                        an overall score for the feature
                      </div>
                    </div>
                  </div>
                </div>

                {/*topic which represents the similar keywords of the right card*/}
                <div className="card-heading-name-right -mb-auto -flex-middle">
                  <div className="card-topic">
                    <h3 className="heading3 -medium">SIMILAR KEYWORDS</h3>
                    <div className="otherKeywords_description">
                      {/*light bulb and tip for the user displayed with the treemap*/}
                      <img
                        src={lightBulb}
                        style={{
                          width: '6%',
                          height: '1%',
                          marginLeft: '-33%',
                        }}
                        alt="tip_bulb"
                      ></img>
                      <h4
                        style={{
                          height: '1%',
                          marginLeft: '-25%',
                          marginTop: '-3%',
                          width: '110%',
                          color: ' #bb5959 ',
                        }}
                      >
                        TIP : HOVER OVER THE KEYWORD BOXES TO FIND HOW MUCH THESE KEYWORDS ARE
                        TRENDING
                      </h4>
                    </div>
                  </div>

                  {/*Treemap which is imported from the gra[h folder which represents the similar keywords*/}
                  <div className="treeMap_align" id="treeMap_align" style={{ display: 'none' }}>
                    <TreeMap />
                  </div>
                </div>

                {/*analyze again button which do all the necessory action after clicking*/}
                <div
                  className="analyze_again"
                  id="analyze_again"
                  style={{ display: 'grid', visibility: 'visible' }}
                >
                  {/*starts a loading process after the button click*/}
                  <Button
                    onClick={this.analyzeAgain}
                    iconSrc={rightArrow}
                    loading={this.state.loading}
                  >
                    Start Analysing
                  </Button>
                </div>
              </div>

              {/*loader and the loader text*/}
              <div
                className="loader_progress"
                id="loader_progress"
                style={{ visibility: 'hidden' }}
              >
                {
                  <div className="analysingImg">
                    <div id="building">
                      <div id="blocks">
                        <div className="b" id="b1"></div>
                        <div className="b" id="b2"></div>
                        <div className="b" id="b3"></div>
                        <div className="b" id="b4"></div>
                      </div>
                      <div id="caption">Your Analysis is almost ready...</div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exkey;
