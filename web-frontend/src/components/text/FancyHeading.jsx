import React from 'react';
import './text.css';

const FancyHeading = (props) => {
  let { decoratorClassName } = props;
  decoratorClassName = decoratorClassName ? decoratorClassName : 'fancy-heading-decorator';
  return (
    <div>
      <div className={`${decoratorClassName}`}>{props.children}</div>
    </div>
  );
};

export default FancyHeading;
