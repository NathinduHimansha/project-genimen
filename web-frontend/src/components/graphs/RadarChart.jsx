import React from 'react';
import ReactApexChart from 'react-apexcharts';

class RadarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
        },
      ],
      options: {
        chart: {
          height: 550,
          type: 'radar',
        },

        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June'],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="treemap"
          height={550}
        />
      </div>
    );
  }
}
export default RadarChart;
