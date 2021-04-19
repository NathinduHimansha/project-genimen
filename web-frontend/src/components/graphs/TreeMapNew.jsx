import React from 'react';
import ReactApexChart from 'react-apexcharts';

class TreeMapNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treeVisibility: false,
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
    };
  }
  _isMounted = false;
  //tree is visible if the data is loaded from the backend
  componentDidMount() {
    this._isMounted = true;
    this.setState({ treeVisibility: true });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="-ml-70">
        {this.state.treeVisibility == true && this.props.dataFromParent ? (
          <ReactApexChart
            options={this.state.options}
            series={this.props.dataFromParent.series}
            type="treemap"
          />
        ) : null}
      </div>
    );
  }
}
export default TreeMapNew;
