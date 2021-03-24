import React from 'react';
import ReactApexChart from 'react-apexcharts';

class LineGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [
            {
              x: 'Screen',
              y: 218,
            },
            {
              x: 'great camera',
              y: 149,
            },
            {
              x: 'good storage',
              y: 184,
            },
            {
              x: 'front camera',
              y: 55,
            },
            {
              x: 'long lasting battery',
              y: 84,
            },
            {
              x: 'Multiple windows',
              y: 31,
            },
            {
              x: 'Infrared remote control',
              y: 70,
            },
            {
              x: 'Wireless charging',
              y: 30,
            },
            {
              x: 'NFC',
              y: 44,
            },
            {
              x: 'Notch',
              y: 68,
            },
            {
              x: 'Memory Card Supported',
              y: 28,
            },
            {
              x: 'Dual Sim port',
              y: 19,
            },
            {
              x: 'MP Triple Rear camera',
              y: 29,
            },
          ],
        },
      ],

      options: {},
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="treemap"
          height={260}
          width={500}
        />
      </div>
    );
  }
}
export default LineGraph;
