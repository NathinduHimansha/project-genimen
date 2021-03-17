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

      <span className="frequency_percentage">{percentage + '%'}</span>
    </div>
  );
};

export default BarGraph;
