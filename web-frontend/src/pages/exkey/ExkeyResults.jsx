import React, { useEffect, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import IconHeading from '../../components/text/IconHeading';
import './exkey.css';
import Bargraph from '../../components/graphs/BarGraph';
import TreeMap from '../../components/graphs/TreeMap';
import lightBulb from '../../assests/tip_bulb.png';
import FancyHeading from '../../components/text/FancyHeading';
import fire from '../../assests/fire.png';
import { Redirect, useHistory } from 'react-router';
import fromParentOnly from '../../pages/wrappers/FromParentOnly';

const ExkeyResults = () => {
  const history = useHistory(); //initialising the history
  const [pageLoading, setPageLoading] = useState(true); //initialising the page loading as false
  const [trendingFeatures, setTrend] = useState([]); //trending feature array
  const [exkeyDataotherKeyword, setOther] = useState([]); //other keywords array

  useEffect(() => {
    setPageLoading(true); //making the pageloading true at the begining of the page
    setTimeout(() => {
      //timeout for 600 ms
      setTrend(history.location.state.stateTrending); //catch the trending keywords comming from the exkey home page after the button click
      setOther(history.location.state.stateOtherKeywords); //catch the other keywords comming from the exkey home page after the button click

      setPageLoading(false); //make the pageloading false
    }, 600);
  }, []);

  return (
    <div className="navbar-page-container -mb-40" style={{ margin: '0%' }}>
      <div className="main-body">
        {/*align the header according to the window sizes*/}
        <div className="heading_align">
          <div className="app-heading-header content-padding -flex -flex-col">
            <div className="-mb-30">
              {/*showing the current location of the page when it navigates from one page to another*/}
              <NavLink to="/analytics/exkey" className="-text-decoration-none">
                <IconHeading size="extra-small" iconUrl="var(--arrow-back-icon)">
                  <h4 className="heading4 -no-margin">
                    {/*back button which will redirect to the exkey home page*/}
                    <span className="header-go-back">Back</span>
                  </h4>
                </IconHeading>
              </NavLink>
            </div>
            {/*main topic of the page*/}
            <h2 className="fancy-heading -no-margin">TRENDING RESULTS</h2>
          </div>
          <div className=" -mt-60 -mb-90 content-padding">
            <FancyHeading decoratorClassName="fancy-heading2-decorator">
              <h2 className="heading2 -medium -no-margin heading2-sep-margin">
                {/*subtopic of the heading*/}
                Trending Smartphone Features
              </h2>
            </FancyHeading>
            {/*line seperator after the subtopic*/}
            <hr className="heading-sep" />
          </div>
        </div>

        {/*if the page loading is true,which means the page loading animation dissapears*/}
        {pageLoading ? (
          //page loading animation
          <div className="-flex -full-width -mb-70 -mt-40">
            <div
              style={{ marginLeft: '48%', marginTop: '10%' }}
              className=" spinner spinner-medium spinner-accent"
            ></div>
          </div>
        ) : (
          //else if the the condition is met
          <div className="body-split">
            <div className="-mt-60">
              <div className="analytics-container cards-split -mt-40">
                {/*left card whih displays the bargraph which displays the trending keyword*/}
                <div className="card-left">
                  <div className="card-heading-name-left">
                    <div className="card-topic">
                      <h3 className="heading3 -medium">
                        {/*Name on the left card */}
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

                  {/*frequnecy bars of the bargraph which is mapped from the values came from the exkey page*/}
                  <div className="frequency-bars">
                    {trendingFeatures.map((item, i) => (
                      <Bargraph key={i} value={item.value} keyword={item.keyword}></Bargraph>
                    ))}
                  </div>
                </div>

                {/*starting of the card right elements which represents the treemap*/}
                <div className="card-right">
                  <div className="card-heading-name-right -mb-auto -flex-middle">
                    <div className="card-topic">
                      {/*card right topic*/}
                      <h3 className="heading3 -medium">SUPPORTING KEYWORDS</h3>
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
                          TIP : HOVER OF THE KEYWORDS TO SEE THE TOOLTIP
                        </h4>
                      </div>
                    </div>

                    {/*Treemap which is imported from the graph folder which represents the similar keywords*/}
                    <div className="treeMap_align">
                      <TreeMap data={exkeyDataotherKeyword} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default fromParentOnly(ExkeyResults);
