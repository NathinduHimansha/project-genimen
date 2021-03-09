import React from 'react';
import search from '../../assests/Search.png';

const NetPolarity = (props) => {
  return (
    <div>
      <span>Start</span>
      <button className="btn primary-btn icon-btn">
        Start Analysing
        <img className="left" src={search} style={{ width: '20px' }} />
      </button>
    </div>
  );
};

export default NetPolarity;
