import React from 'react';
import './text.css';

const FancyHeading = (props) => {
  const { heading } = props;

  return (
    <div>
      <div className="fancy-heading-decorator">
        <h1 className="fancy-heading">{heading}</h1>
      </div>
    </div>
  );
};

export default FancyHeading;
