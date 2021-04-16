import React from 'react';
import { NavLink } from 'react-router-dom';
import IconHeading from '../../components/text/IconHeading';
import './exkey.css';
import Bargraph from '../../components/graphs/BarGraph';
import TreeMap from '../../components/graphs/TreeMap';
import lightBulb from '../../assests/tip_bulb.png';
import FancyHeading from '../../components/text/FancyHeading';
import fire from '../../assests/fire.png';
// import { useHistory } from 'react-router';
// import fromParentOnly from '../../pages/wrappers/FromParentOnly';

class ExkeyResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trendingFeatures: [], //trending keywords array (card left)
      otherKeywordsList: [], //other keywords array (card right)
    };
  }

  componentDidMount() {
    const trendingFeatures = this.props.location.state;
    console.log('10 ', this.props.location.state);
    this.state.trendingFeatures = trendingFeatures;
    this.setState({ trendingFeatures });
  }

  render() {
    const { trendingFeatures } = this.state;
    {
      trendingFeatures == true ? trendingFeatures : null;
    }

    return <div className="main-body"></div>;
  }
}

export default ExkeyResults;
