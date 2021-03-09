import React from 'react';
import './graphs.css';

const ProgressBar = (props) => {
  const { stroke, colors, progress, labels } = props;
  let { minusLabel, plusLabel } = labels;
  minusLabel = minusLabel ? minusLabel : '---';
  plusLabel = plusLabel ? plusLabel : '+++';
  const { minus, plus } = colors;
  const progressPerc = Math.abs(progress) + '%';
  const dividerTop = -1 * stroke * 0.6;
  const dividerHeight = 2.25 * stroke;
  const borderRadius = 0.315 * stroke;

  const rightActiveClassNames = progress > 0 ? 'active right-active' : '-display-none';
  const leftActiveClassNames = progress < 0 ? 'active left-active' : '-display-none';

  let bar;

  bar = (
    <div className="bar" style={{ height: stroke / 10 + 'rem', borderRadius: borderRadius }}>
      <div className="bar-divider" style={{ top: dividerTop, height: dividerHeight }}></div>
      <div className="left">
        <div
          className={leftActiveClassNames}
          style={{ width: progressPerc, background: minus, borderRadius: borderRadius }}
        ></div>
      </div>
      <div className="right">
        <div
          className={rightActiveClassNames}
          style={{ width: progressPerc, background: plus, borderRadius: borderRadius }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="progress-bar-container">
      <div className="label minus-label" style={{ color: 'var(--neg-red)' }}>
        {minusLabel}
      </div>
      {bar}
      <div className="label plus-label" style={{ color: 'var(--pos-green)' }}>
        {plusLabel}
      </div>
    </div>
  );
};

export default ProgressBar;
