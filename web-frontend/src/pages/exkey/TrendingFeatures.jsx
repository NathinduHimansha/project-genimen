import React, { useState, useEffect } from 'react';
import './exkey.css';

import Button from '../../components/buttons/Button';
import colourful_mobilePhone from '../../assests/colourful.png';
import CurrentLocation from '../../components/header/CurrentLocation';
import rightArrow from '../../assests/right-arrow.png';
import lightBulb from '../../assests/tip_bulb.png';
import FancyHeading from '../../components/text/FancyHeading';

import { trendingFeaturesData } from '../../services/trending-features-service';

import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';

function TrendingFeatures() {
  const history = useHistory();
  const { addToast } = useToasts();

  const [loading, setLoading] = useState(false);

  const getTrendingFeatures = () => {
    setLoading(true);
    trendingFeaturesData()
      .then((response) => {
        history.push({
          pathname: '/analytics/exkey/results',
          state: response,
        });
      })
      .catch((error) => {
        addToast('Data Fetching Error..! Please Try again', {
          appearance: 'error',
          id: 'uras-api-error',
        });
      });
  };

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
          <div
            className="analytics-container cards-split-Elements -mt-40"
            style={{ marginTop: '-5%' }}
          >
            {/*hidding the left card at the begining of the exkey page which represents the treemap*/}
            {/*making visible the colurful mobile phone image at the exkey home page*/}
            <div className="analysing_banner">
              <img
                style={{ width: '82%', height: '90%', opacity: '0.8' }}
                src={colourful_mobilePhone}
              />
            </div>

            {/*starting of the card right elements*/}

            {/*hidding the right card at the begining of the exkey page which represents the treemap*/}
            {/*trend description which is dispplayed on the right side of the begining of the exkey page*/}
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
                <div style={{ marginTop: '-3%', textAlign: 'justify' }}>
                  Trend analysis will help you to grow your market level by identifying areas of
                  your product willing to design that are performing well as well as areas that are
                  not. As a result, it provides useful evidence to help you make informed decisions
                  about your long-term plan and ways to future-proof your product.
                </div>
              </div>
              <div className="analyze_again">
                {/*starts a loading process after the button click*/}
                <Button onClick={getTrendingFeatures} iconSrc={rightArrow} loading={loading}>
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

export default TrendingFeatures;
