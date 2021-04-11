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
          theme: 'dark', //dark theme for the tooltip

          //custom tooltip
          custom: function ({ data, seriesIndex, dataPointIndex, w }) {
            var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
            // var color = w.globals.colors[dataPointIndex];

            //returning the x value from the data array
            return (
              '<div style="width: 180px; height: 40px;text-align: center;margin-top: 25px;">' +
              data.x +
              '</div>'
            );
          },
        },

        plotOptions: {
          treemap: {
            distributed: true, //distributed multicolour treemap
          },
        },

        // colors: ['#05B8CC'],

        states: {
          hover: {
            filter: {
              type: 'darken', //Hovering boxes of the treemap with the dark theme
              value: 0.55,
            },
          },
        },
      },
    };
  }

  //tree is visible if the data is loaded from the backend
  componentDidMount() {
    otherKeywordsTrend()
      .then((response) => {
        this.setState({ data: response.series, treeVisibility: true });
      })
      //else catch an error
      .catch((error) => {
        if (error) {
        }
      });
  }

  render() {
    return (
      <div>
        {this.state.treeVisibility == true ? (
          <ReactApexChart options={this.state.options} series={this.state.data} type="treemap" />
        ) : null}
      </div>
    );
  }
}
export default TreeMap;
