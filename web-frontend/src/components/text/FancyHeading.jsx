import React from 'react';
import './text.css';

const FancyHeading = (props) => {
  let { heading, className, decorator } = props;
  decorator = decorator === undefined ? true : decorator;
  className = className ? className + ' fancy-heading' : 'fancy-heading';

  return (
    <div>
      <div className={`${decorator ? 'fancy-heading-decorator' : 'fancy-heading-decorator-none'}`}>
        <h1 className={className}>{heading}</h1>
      </div>
    </div>
  );
};

export default FancyHeading;
