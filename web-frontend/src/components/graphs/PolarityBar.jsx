import React from 'react';
import './graphs.css';

const PolarityBar = (props) => {
  const { stroke, colors, progress, labels } = props;
  let { minusLabel, plusLabel, fontWeight } = labels;
  minusLabel = minusLabel ? minusLabel : '---';
  plusLabel = plusLabel ? plusLabel : '+++';
  fontWeight = fontWeight ? fontWeight : 900;
  const { minus, plus } = colors;
  const progressPerc = Math.abs(progress) + '%';
  const dividerTop = -1 * stroke * 0.6;
  const dividerHeight = 2.25 * stroke;
  const borderRadius = 0.4 * stroke;

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
    <div>
      <div className="label-wrapper -flex">
        <div
          className="label minus-label"
          style={{ color: 'var(--neg-red)', fontWeight: fontWeight }}
        >
          {minusLabel}
        </div>
        <div
          className="label plus-label -flex-right"
          style={{ color: 'var(--pos-green)', fontWeight: fontWeight }}
        >
          {plusLabel}
        </div>
      </div>
      <div className="progress-bar-container">
        <div
          className="label minus-label -hidden"
          style={{ color: 'var(--neg-red)', fontWeight: fontWeight }}
        >
          {minusLabel}
        </div>
        {bar}
        <div
          className="label plus-label -hidden"
          style={{ color: 'var(--pos-green)', fontWeight: fontWeight }}
        >
          {plusLabel}
        </div>
      </div>
    </div>
  );
};

export default PolarityBar;
