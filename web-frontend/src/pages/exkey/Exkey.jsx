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

  routePage = (event) => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      trendz()
        .then((response) => {
          this.setState({ data: response.data }), event.preventDefault();
          const trendingFeatures = response.data.trend;
          this.setState({ trendingFeatures });
          this.props.history.push({
            pathname: '/analytics/exkey/results',
            state: trendingFeatures,
          });
        })

        .catch((error) => {
          if (error) {
          }
        });
    }, 1000);
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
              <div className="card-left" style={{ visibility: 'hidden' }}></div>
              {/*making visible the colurful mobile phone image at the exkey home page*/}
              <div className="analysing_banner">
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

                {/*analyze again button which do all the necessory action after clicking*/}
                <div
                  className="analyze_again"
                  id="analyze_again"
                  style={{ display: 'grid', visibility: 'visible' }}
                >
                  {/*starts a loading process after the button click*/}
                  <Button
                    onClick={this.routePage}
                    iconSrc={rightArrow}
                    loading={this.state.loading}
                  >
                    Start Analysing
                  </Button>
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
