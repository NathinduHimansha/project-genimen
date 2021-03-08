import React from 'react';
import './graphs.css';

const CircularProgress = (props) => {
  const { radius, stroke, progress, color } = props;

  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const startingProgress = circumference - (0 / 100) * circumference;
  const backgroundStroke = 0.7;
  const backgroundRadius = normalizedRadius + (stroke - 0.7) / 2;
  const backgroundStrokeDashoffset = circumference - ((100 - progress) / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        className="progress_background"
        stroke="#bababa"
        fill="#eee"
        strokeWidth={backgroundStroke}
        style={{ backgroundStrokeDashoffset }}
        r={backgroundRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        className="progress"
        id="progress"
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference + ' ' + circumference}
        strokeDashoffset={startingProgress}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      <animate
        xlinkHref="#progress"
        attributeName="stroke-dashoffset"
        to={strokeDashoffset}
        // begin="click"
        fill="freeze"
        dur="0.4s"
        // keySplines="0.1 0.8 0.2 1;0.1 0.8 0.2 1"
        // keyTimes="0;0.5;1"
        // calcMode="spline"
        // values="0;2.2;3.3;5.5;6.6;8.8;10"
        // repeatCount="1"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Rubik"
        fontSize="34"
        fill="#444"
      >
        {progress}
        <tspan fontSize="18"> %</tspan>
      </text>
    </svg>
  );
};

export default CircularProgress;
