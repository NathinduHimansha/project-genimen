import React from 'react';
import './text.css';

const FancyHeading = (props) => {
  return (
    <div>
      <div className={`${'fancy-heading-decorator'}`}>{props.children}</div>
    </div>
  );
};

export default FancyHeading;
