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
  const trendingList = []; //list which contains all the trending features
  const otherKeywordList = []; //list which contains other keywords
  const [btnLoadingState, setBtnLoadingState] = useState(false); //intially button loading state is false

  const { addToast } = useToasts(); //initalising toast notifications
  const history = useHistory(); //history which saves previous information

  const routePage = () => {
    //button click action
    setBtnLoadingState(true); //if the button click, make the button loading state true

    setTimeout(() => {
      //set timeout for 1000 ms
      Promise.all([trendz(), otherKeywordsTrend()]) //returns a single promise that resolves to an array from all the promises included
        .then((res) => {
          const trendData = res[0]; //taking the column 0 from the array which contains the trending features
          const keywordData = res[1]; //taking the column 1 from the array which contains the other keywords
          const temp = keywordData.series; //string the series array which was taken from the keyword data array
          if (trendData.data.status == 1 && temp.length !== 0) {
            //if the status is 1 from trend data service and if the trend data array is not equal to 0
            const trendingFeatures = trendData.data.trend; //adding the trending data captured from the service into a constant

            //for loop which will add the trending data taken from the service into to a list
            for (const trend of trendingFeatures) {
              trendingList.push(trend);
            }
            const otherKeywords = keywordData.series; //adding the other keywords data captures from the service into a constant

            //for loop which will add the other keywords taken from the service into a list
            for (const otherKeyword of otherKeywords) {
              otherKeywordList.push(otherKeyword);
            }

            //push both the lists to the exkey/result page
            history.push({
              pathname: '/analytics/exkey/results',
              state: { stateTrending: trendingList, stateOtherKeywords: otherKeywordList },
            });

            //else if the the the status of the service is not equal to 1 and if the length of the contsnt is not equal to 0
          } else {
            //toast notification will be displayed to the user which represents an error
            addToast('Something went wrong with the request!, please try again...', {
              appearance: 'error',
              id: 'exkey-api-error',
            });
            setBtnLoadingState(false); //making the button loading state false
          }
        })
        //if the data is not fetched properly
        .catch((error) => {
          setBtnLoadingState(false), //making the button loading state false
            addToast('Data Fetching error...Please try again !', {
              //and giving a toast notification to the user to try again
              appearance: 'error',
              id: 'exkey-api-error',
            });
        });
    }, 1000);
  };

  return (
    //page body sliding animation
    <div className="navbar-page-container -mb-40" style={{ margin: '0%' }}>
      <div className="main-body">
        {/*align the header according to the window sizes*/}
        <div className="heading_align">
          <div className="app-heading-header content-padding -flex -flex-col">
            <div className="-mb-30">
              {/*showing the current location of the page when it navigates from one page to another*/}
              <CurrentLocation></CurrentLocation>
            </div>
            {/*main topic of the heading*/}
            <h2 className="fancy-heading -no-margin">LOOK WHAT PEOPLE ARE TALKING OF PHONES</h2>
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
              {/*colourful mobilephone image which is in the home page of exkey*/}
              <div className="analysing_banner">
                <img
                  className="colourfulMobilePhone"
                  style={{ width: '68%', height: '90%', opacity: '0.8' }}
                  // style={{ width: '82%', height: '90%', opacity: '0.8' }}
                  src={colourful_mobilePhone}
                />
              </div>

              {/*starting of the card right elements*/}

              {/*trend description which is displayed on the right side of the begining of the exkey page*/}
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
                    your product willing to design that are performing well as well as areas that
                    are not. As a result, it provides useful evidence to help you to make informed
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exkey;
