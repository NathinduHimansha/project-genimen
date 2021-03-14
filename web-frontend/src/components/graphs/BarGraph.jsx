import React from 'react';
import './graphs.css';

const BarGraph = (props) => {
  const { percentage, label } = props;
  return (
    <div className="frequency-bars" id="bars">
      <div className="barHighlight">
        <span className="barchartKeyword">{label}</span>
        <div
          className="progress-percentage"
          style={{ height: percentage + '%', backgroundColor: '#96DDE7' }}
        >
          <span className="frequency_percentage">{percentage + '%'}</span>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
