import React from 'react';
import ReactApexChart from 'react-apexcharts';

<<<<<<< HEAD
class TreeMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //series: [{ data: [] }],
      treeVisibility: false,
      //data: [],
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
=======
const TreeMap = (props) => {
  const { data } = props;

  const state = {
    treeVisibility: false,
    options: {
      tooltip: {
        enabled: true,
        theme: 'dark', //dark theme for the tooltip

        //custom tooltip
        custom: function ({ data, seriesIndex, dataPointIndex, w }) {
          var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

          //returning the x value from the data array
          return (
            '<div style="width: 180px; height: 40px;text-align: center;margin-top: 25px;">' +
            data.x +
            '</div>'
          );
>>>>>>> ed9b32b4b162defb553450f810a226bfe61635b5
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
<<<<<<< HEAD
    };
  }
  _isMounted = false;
  //tree is visible if the data is loaded from the backend
  componentDidMount() {
    this._isMounted = true;
    this.setState({ treeVisibility: true });

    // otherKeywordsTrend().then((response) => {
    //   if (this._isMounted === true) {
    //     //this.setState({ treeVisibility: true });
    //     //this.setState({ data: response.series, treeVisibility: true });
    //     // this.setState({ data: this.props.dataFromParent, treeVisibility: true });
    //     // console.log('ttttt', this.props.dataFromParent);

    //     console.log('ttttt13', response.series);
    //     // this.setState({
    //     //   series: [{ data: [this.props.dataFromParent] }],
    //     // });
    //     // console.log('ttttt1', this.state.data);
    //   }
    // });
    // //else catch an error
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
=======
    },
  };

  return (
    <div>
      <ReactApexChart options={state.options} series={data} type="treemap" />
    </div>
  );
};
>>>>>>> ed9b32b4b162defb553450f810a226bfe61635b5
export default TreeMap;
