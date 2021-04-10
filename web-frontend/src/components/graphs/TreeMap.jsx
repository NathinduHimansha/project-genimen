import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { otherKeywordsTrend } from '../../services/exkey-treemap-service';

class TreeMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treeVisibility: false,
      data: [],
      options: {
        tooltip: {
          enabled: true,
          theme: 'dark',

          custom: function ({ data, seriesIndex, dataPointIndex, w }) {
            var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
            return (
              '<div style="width: 180px; height: 40px;text-align: center;margin-top: 25px;">' +
              data.x +
              '</div>'
            );
          },
        },

        plotOptions: {
          treemap: {
            distributed: true,
          },
        },

        // colors: ['#05B8CC'],

        states: {
          hover: {
            filter: {
              type: 'darken',
              value: 0.55,
            },
          },
        },
      },
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
            // height={250}
            // width={520}
          />
        ) : null}
      </div>
    );
  }
}
export default TreeMap;
