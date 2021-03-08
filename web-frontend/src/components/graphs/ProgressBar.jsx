import React from 'react';
import './graphs.css';

const ProgressBar = (props) => {
  const { stroke, colors, progress } = props;
  const { minus, plus } = colors;
  const progressPerc = progress + '%';
  const dividerTop = -1 * stroke * 0.6;
  const dividerHeight = 2.25 * stroke;
  const borderRadius = 0.315 * stroke;
  console.log(borderRadius);

  let bar;
  if (progress < 0) {
    bar = (
      <div className="bar" style={{ height: stroke }}>
        <div className="bar-divider" style={{ top: dividerTop, height: dividerHeight }}></div>
        <div className="left">
          <div
            className="active left-active"
            style={{ width: progressPerc, background: minus, borderRadius: borderRadius }}
          ></div>
        </div>
        <div className="right"></div>
      </div>
    );
  } else {
    bar = (
      <div className="bar" style={{ height: stroke }}>
        <div className="bar-divider" style={{ top: dividerTop, height: dividerHeight }}></div>
        <div className="left"></div>
        <div className="right">
          <div
            className="active right-active"
            style={{ width: progressPerc, background: plus, borderRadius: borderRadius }}
          ></div>
        </div>
      </div>
    );
  }

  return <div className="progress-bar-container">{bar}</div>;
};

export default ProgressBar;
