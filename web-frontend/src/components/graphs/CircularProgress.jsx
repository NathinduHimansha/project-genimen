import React from 'react';
import './graphs.css';

const CircularProgress = (props) => {
  const { id, progress, color, stroke } = props;
  // round progress to two dec
  let progressPerc = progress.toFixed(0);
  const radius = 110;

  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const startingProgress = circumference - (0 / 100) * circumference;
  const backgroundStroke = 0.7;
  const backgroundRadius = normalizedRadius + (stroke - 0.7) / 2;
  const backgroundStrokeDashoffset = circumference - ((100 - progress) / 100) * circumference;

  return (
    <div>
      {/* <svg height={radius * 2} width={radius * 2}> */}
      <svg
        // viewBox={'0 0 ' + radius * 2 + '' + radius * 2}
        viewBox="0 0 178 178"
        preserveAspectRatio="xMinYMin meet"
        // height={radius * 2}
        width="100%"
      >
        {/* <symbol id="circular-progress-bar"> */}
        <g>
          <circle
            vectorEffect="non-scaling-stroke"
            className="progress-background"
            strokeWidth={backgroundStroke}
            style={{ backgroundStrokeDashoffset }}
            r={backgroundRadius}
            cx="50%"
            cy="50%"
          />
          <circle
            className="progress"
            id={id}
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference + ' ' + circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx="50%"
            cy="50%"
          ></circle>

          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Rubik"
            fontSize="34"
            fill="var(--primary-black)"
          >
            {progressPerc}
            <tspan fontSize="18"> %</tspan>
          </text>
        </g>
        {/* </symbol> */}
      </svg>
      {/* <svg width="50" height="50"> */}
      {/* <use xlinkHref="#circular-progress-bar" /> */}
      {/* <use xlink:href="#circular-progress-bar" /> */}
      {/* </svg> */}
    </div>
  );
};

export default CircularProgress;
