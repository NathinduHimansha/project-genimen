import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { otherKeywordsTrend } from '../../services/exkey-treemap-service';

class TreeMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treeVisibility: false,
      data: [],
      options: {},
    };
  }

  componentDidMount() {
    otherKeywordsTrend()
      .then((response) => {
        this.setState({ data: response.series, treeVisibility: true });
      })
      .catch((error) => {
        if (error) {
        }
      });
  }

  render() {
    return (
      <div>
        {this.state.treeVisibility == true ? (
          <ReactApexChart
            options={this.state.options}
            series={this.state.data}
            type="treemap"
            height={260}
            width={520}
          />
        ) : null}
      </div>
    );
  }
}
export default TreeMap;
