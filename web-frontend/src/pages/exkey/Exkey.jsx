import React, { useEffect, useContext, useState } from 'react';
import './exkey.css';
import Button from '../../components/buttons/Button';
import colourful_mobilePhone from '../../assests/colourful.png';
import axios from 'axios';
import { trendz } from '../../services/exkey-bargraph-service';
import { otherKeywordsTrend } from '../../services/exkey-treemap-service';
import CurrentLocation from '../../components/header/CurrentLocation';
import rightArrow from '../../assests/right-arrow.png';
import lightBulb from '../../assests/tip_bulb.png';
import FancyHeading from '../../components/text/FancyHeading';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router';

const Exkey = () => {
  const trendingList = [];
  const otherKeywordList = [];
  const [btnLoadingState, setBtnLoadingState] = useState(false);

  const { addToast } = useToasts();
  const history = useHistory();

  const routePage = () => {
    setBtnLoadingState(true);

    setTimeout(() => {
      Promise.all([trendz(), otherKeywordsTrend()])
        .then((res) => {
          const trendData = res[0];
          const keywordData = res[1];
          const temp = keywordData.series;
          if (trendData.data.status == 1 && temp.length !== 0) {
            const trendingFeatures = trendData.data.trend;
            for (const trend of trendingFeatures) {
              trendingList.push(trend);
            }
            const otherKeywords = keywordData.series;
            for (const otherKeyword of otherKeywords) {
              otherKeywordList.push(otherKeyword);
            }

            history.push({
              pathname: '/analytics/exkey/results',
              state: { trendList: trendingList, otherKeywords: otherKeywordList },
            });
          } else {
            addToast('Something went wrong with the request!, please try again...', {
              appearance: 'error',
              id: 'exkey-api-error',
            });
            setBtnLoadingState(false);
          }
        })
        .catch((error) => {
          setBtnLoadingState(false),
            addToast('Something went wrong! please try again...', {
              appearance: 'error',
              id: 'exkey-api-error',
            });
        });
    }, 1000);
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
                  not. As a result, it provides useful evidence to help you to make informed
                  decisions about your long-term plan and ways to future-proof your product.
                </div>
              </div>
              <div className="analyze_again">
                {/*starts a loading process after the button click*/}
                <Button onClick={routePage} iconSrc={rightArrow} loading={btnLoadingState}>
                  Start Analysing
                </Button>
              </div>
            </div>

            {/*analyze again button which do all the necessory action after clicking*/}

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exkey;
