import React from 'react'
import { Chart, Transform, Cloud } from 'rumble-charts';

const series = [{
    data: [
        { label: 'Highcharts', y: 30 },
        { label: 'amCharts', y: 13 },
        { label: 'Google Charts', y: 31 },
        { label: 'ChartJS', y: 15 },
        { label: 'TauCharts', y: 8 },
        { label: 'FusionCharts', y: 2 },
        { label: 'ZingChart', y: 2 },
        { label: 'uvCharts', y: 1 },
        { label: 'jQuery Sparklines', y: 1 },
        { label: 'Ember Charts', y: 2 },
        { label: 'Canvas.js', y: 16 },
        { label: 'Flot', y: 1 },
        { label: 'D3.js', y: 27 },
        { label: 'n3-charts', y: 3 },
        { label: 'NVD3', y: 3 },
        { label: 'Chartist.js', y: 3 },
        { label: 'C3.js', y: 14 },
        { label: 'Cubism.js', y: 1 },
        { label: 'Rickshaw', y: 2 }
    ]
}];

class WordCloud extends React.Component {
    render() {
        console.log(series)
        return (

            <Chart width={600} height={500} series={series} minY={0}>
                <Transform method='transpose'>
                    <Cloud
                        font='sans-serif'
                        minFontSize={10}
                        maxFontSize={50}
                        padding={-15}
                        layerWidth={500}
                    />
                </Transform>
            </Chart>
        );
    }
}

export default WordCloud;