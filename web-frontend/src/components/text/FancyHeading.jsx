import React from 'react';
import './text.css';

const FancyHeading = (props) => {
  let { heading, className } = props;
  className = className ? className + ' fancy-heading' : 'fancy-heading';

  return (
    <div>
      <div className="fancy-heading-decorator">
        <h1 className={className}>{heading}</h1>
      </div>
    </div>
  );
};

export default FancyHeading;
