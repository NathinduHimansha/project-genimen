import React, { useEffect } from 'react';
import './graphs.css';

const BarGraph = (props) => {
  const { value, keyword } = props;
  const percentageValue = value * 10;
  var tempPercentageValue = 0;

  if (percentageValue < 10) {
    tempPercentageValue = (percentageValue * 10) / 2;
  }
  if (percentageValue > 10 && percentageValue < 50) {
    tempPercentageValue = percentageValue * 2;
  }

  if (percentageValue > 50) {
    tempPercentageValue = 100;
  }

  const roundedValue = Math.round(tempPercentageValue);

  return (
    <div className="barHighlight">
      <span className="barchartKeyword">{keyword}</span>
      <div className="progress-percentage" style={{ height: tempPercentageValue + '%' }}></div>
      <h2 className="heading3 -medium -no-margin feature-type-heading">
        <span className="frequency_percentage">{roundedValue + '%'}</span>
      </h2>
    </div>
  );
};

export default BarGraph;
