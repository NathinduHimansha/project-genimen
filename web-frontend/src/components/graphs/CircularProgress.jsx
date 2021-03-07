import React from 'react';
import './graphs.css';

class CircularProgress extends React.Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }
  render() {
    const { radius, stroke, progress, color } = this.props;
    const strokeDashoffset = this.circumference - (progress / 100) * this.circumference;

    const backgroundStroke = 0.7;
    const backgroundRadius = this.normalizedRadius + (stroke - 0.7) / 2;
    const backgroundStrokeDashoffset =
      this.circumference - ((100 - progress) / 100) * this.circumference;

    return (
      <svg height={radius * 2} width={radius * 2}>
        <circle
          className="progress-ring__circle_background"
          stroke="#bababa"
          fill="#eee"
          strokeWidth={backgroundStroke}
          style={{ backgroundStrokeDashoffset }}
          r={backgroundRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="progress-ring__circle"
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={this.circumference + ' ' + this.circumference}
          style={{ strokeDashoffset }}
          r={this.normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Rubik"
          fontSize="24"
          fill="#444"
        >
          {progress}%
        </text>
      </svg>
    );
  }
}

export default CircularProgress;
