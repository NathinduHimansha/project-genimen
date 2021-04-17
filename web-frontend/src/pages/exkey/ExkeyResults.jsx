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

<<<<<<< HEAD
class ExkeyResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recivedData: [],
      trendingFeatures: [], //trending keywords array (card left)
      otherKeywordsList: [], //other keywords array (card right)
    };
  }

  componentDidMount() {
    //
    const trendingFeatures = this.props.location.state;
    console.log('10 ', this.props.location.state);
    // this.state.trendingFeatures = this.props.location.state;
    // //

    this.setState({ recivedData: this.props.location.state });

    console.log('11 ', trendingFeatures);
    this.dataAssigning(trendingFeatures);

    // const { history } = this.props;

    // const trendingFeatures = history.location.state;
    //console.log(trendingFeatures);
    // this.state.trendingFeatures = trendingFeatures;
    // this.setState({ trendingFeatures, isLoading: false });

    // this.setState((prevState) => ({ myArray: [values, ...prevState.myArray] }));
  }

  dataAssigning = (trendingFeatures) => {
    console.log('122', trendingFeatures);
    let tempList = [];
    const data = [trendingFeatures];

    for (var i = 0; i < 10; i++) {
      // this.setState((prevState) => ({
      //   trendingFeatures: [this.state.recivedData.indexOf(i), ...prevState.trendingFeatures],
      // }));
      // this.setState({
      //   trendingFeatures: [...this.state.trendingFeatures, 'item'],
      // });
      // this.setState({
      //   trendingFeatures: this.state.trendingFeatures.concat('new value'),
      // });
      // this.setState({ trendingFeatures: [...this.state.trendingFeatures, 'new_value'] });
      // this.setState((previousState) => ({
      //   trendingFeatures: [...previousState.trendingFeatures, 'new value'],
      // }));
      // this.setState({
      //   trendingFeatures: [...previousState.trendingFeatures, this.state.recivedData.indexOf(i)],
      // });
      //tempList = [...tempList, data.];
      //tempList = [tempList.concat(data[i])];
      //tempList.concat(this.state.recivedData.indexOf(i));
    }
    console.log('13: ', tempList);
  };

  render() {
    return (
      <div className="main-body">
        {this.trendingFeatures == true ? this.trendingFeatures : null}
      </div>
    );
  }
}
=======
const ExkeyResults = () => {
  const history = useHistory();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    setTimeout(() => {
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

  const trendingFeatures = history.location.state.trendList;

  const exkeyDataotherKeyword = history.location.state.otherKeywords;

  return (
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
            style={{ marginLeft: '50%', marginTop: '10%' }}
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
  );
};
>>>>>>> ed9b32b4b162defb553450f810a226bfe61635b5

export default fromParentOnly(ExkeyResults);
