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
import fromParentOnly from '../../pages/wrappers/FromParentOnly';

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

export default ExkeyResults;
