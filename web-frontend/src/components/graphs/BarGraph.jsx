import React from 'react';
import './graphs.css';

const BarGraph = (props) => {
  const { percentage, label } = props;
  return (
    <div className="barHighlight">
      <span className="barchartKeyword">{label}</span>
      <div
        className="progress-percentage"
        style={{ height: percentage + '%', backgroundColor: '#96DDE7' }}
      ></div>
      <h2 class="heading3 -medium -no-margin feature-type-heading">
        <span className="frequency_percentage">{percentage + '%'}</span>
      </h2>
    </div>
  );
};

export default BarGraph;
