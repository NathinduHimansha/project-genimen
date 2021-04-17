import React, { useEffect, useContext, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import './exkey.css';

import IconHeading from '../../components/text/IconHeading';
import Bargraph from '../../components/graphs/BarGraph';
import TreeMap from '../../components/graphs/TreeMapTest';
import lightBulb from '../../assests/tip_bulb.png';
import FancyHeading from '../../components/text/FancyHeading';
import fire from '../../assests/fire.png';

import fromParentOnly from '../../pages/wrappers/FromParentOnly';

function TrendingFeaturesResults() {
  const history = useHistory();

  const [viewStatus, setViewStatus] = useState(false);
  const [trendingFeatures, setTrendingFeatures] = useState([]);
  const [otherKeywordsList, setOtherKeywordsList] = useState([]);

  useEffect(() => {
    const recivedData = history.location.state;

    const tempOtherFeatures = [];
    for (var i = 9; i < recivedData.data.length; i++) {
      tempOtherFeatures.push(recivedData.data[i]);
    }
    setOtherKeywordsList({ series: [{ data: tempOtherFeatures }] });

    const tempFeatures = [];
    for (var i = 0; i <= 8; i++) {
      tempFeatures.push(recivedData.data[i]);
    }
    setTrendingFeatures(tempFeatures);
    setViewStatus(true);
  }, [history.location.state]);

  return (
    <div className="-mr-70" style={{ margin: '0%' }}>
      {/*align the header according to the window sizes*/}
      <div className="heading_align">
        <div className="app-heading-header content-padding -flex -flex-col">
          <div className="-mb-30">
            {/*showing the current location of the page when it navigates from one page to another*/}
            <NavLink to="/analytics/exkey" className="-text-decoration-none">
              <IconHeading size="extra-small" iconUrl="var(--arrow-back-icon)">
                <h4 className="heading4 -no-margin">
                  <span className="header-go-back">Back</span>
                </h4>
              </IconHeading>
            </NavLink>
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
            <div className="card-left">
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
              <div className="frequency-bars">
                {trendingFeatures.map((item, i) => (
                  <Bargraph key={i} value={item.y} keyword={item.x}></Bargraph>
                ))}
              </div>
            </div>

            {/*starting of the card right elements*/}

            {/*hidding the right card at the begining of the exkey page which represents the treemap*/}
            <div className="card-right">
              {/*trend description which is dispplayed on the right side of the begining of the exkey page*/}

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
                <div className="treeMap_align">
                  {viewStatus ? <TreeMap data={otherKeywordsList} /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingFeaturesResults;
