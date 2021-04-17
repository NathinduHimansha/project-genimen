import React, { useEffect, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import IconHeading from '../../components/text/IconHeading';
import './exkey.css';
import Bargraph from '../../components/graphs/BarGraph';
import TreeMap from '../../components/graphs/TreeMap';
import lightBulb from '../../assests/tip_bulb.png';
import FancyHeading from '../../components/text/FancyHeading';
import fire from '../../assests/fire.png';
import { useHistory } from 'react-router';
import fromParentOnly from '../../pages/wrappers/FromParentOnly';

const ExkeyResults = () => {
  const history = useHistory();
  const [pageLoading, setPageLoading] = useState(false);
  const [trendingFeatures, setTrend] = useState([]);
  const [exkeyDataotherKeyword, setOther] = useState([]);

  useEffect(() => {
    setPageLoading(true);
    setTimeout(() => {
      setTrend(history.location.state.stateTrending);
      setOther(history.location.state.stateOtherKeywords);
      console.log(history.location.stateOtherKeywords);

      setPageLoading(false);
    }, 600);
  }, []);

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     trendingFeatures: [], //trending keywords array (card left)
  //     otherKeywordsList: [], //other keywords array (card right)
  //   };
  // }

  // componentDidMount() {
  //   const { history } = this.props;

  //   const trendingFeatures = history.location.stateTrending;
  //   this.state.trendingFeatures = trendingFeatures;
  //   this.setState({ trendingFeatures });

  //   const otherKeywords = history.location.stateOtherKeywords;
  //   this.state.otherKeywordsList = otherKeywords;
  //   this.setState({ otherKeywords });

  //   console.log(this.state.trendingFeatures);
  //   console.log(this.state.otherKeywordsList);
  // }

  // const { trendingFeatures } = this.state;
  // const history = useHistory();

  // const trendingFeatures = history.location.state.stateTrending;

  // const exkeyDataotherKeyword = history.location.state.stateOtherKeywords;

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
                    <span className="header-go-back">Back</span>
                  </h4>
                </IconHeading>
              </NavLink>
            </div>
            {/*main topic of the heading*/}
            <h2 className="fancy-heading -no-margin">RESULTS</h2>
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

        {pageLoading ? (
          <div className="-flex -full-width -mb-70 -mt-40">
            <div
              style={{ marginLeft: '48%', marginTop: '10%' }}
              className=" spinner spinner-medium spinner-accent"
            ></div>
          </div>
        ) : (
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
                      <Bargraph key={i} value={item.value} keyword={item.keyword}></Bargraph>
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
