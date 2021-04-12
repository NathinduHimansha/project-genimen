import React from 'react';
import './graphs.css';

const BarGraph = (props) => {
  const { value, keyword } = props;
  return (
    <div className="barHighlight">
      <span className="barchartKeyword">{keyword}</span>
      <div
        className="progress-percentage"
        style={{ height: value + '%', backgroundColor: '#96DDE7' }}
      ></div>
      <h2 className="heading3 -medium -no-margin feature-type-heading">
        <span className="frequency_percentage">{value + '%'}</span>
      </h2>
    </div>
  );
};

export default BarGraph;
