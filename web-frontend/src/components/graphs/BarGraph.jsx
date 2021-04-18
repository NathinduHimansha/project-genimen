import React, { useEffect } from 'react';
import './graphs.css';

const BarGraph = (props) => {
  const { value, keyword } = props;
  const percentageValue = value * 10;
  var tempPercentageValue = 0;

  if (percentageValue < 10) {
    tempPercentageValue = (percentageValue * 10) / 2 - 5;
  }
  if (percentageValue > 10) {
    tempPercentageValue = percentageValue;
  }

  // if (value > 1) {
  //   lessPercentage = value * 10;
  // }
  // if (value < 1) {
  //   lessPercentage = value * 100 - 51;
  // }

  const roundedValue = Math.round(tempPercentageValue);

  return (
    <div className="barHighlight">
      <span className="barchartKeyword">{keyword}</span>
      <div
        className="progress-percentage"
        //#83d7ee
        style={{ height: tempPercentageValue + '%', backgroundColor: '#96DDE7' }}
      ></div>
      <h2 className="heading3 -medium -no-margin feature-type-heading">
        <span className="frequency_percentage">{roundedValue + '%'}</span>
      </h2>
    </div>
  );
};

export default BarGraph;
