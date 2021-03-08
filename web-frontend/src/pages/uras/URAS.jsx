import React from 'react';
import CircularProgress from '../../components/graphs/CircularProgress';
import ProgressBar from '../../components/graphs/ProgressBar';

const URAS = () => {
  var radius = 48;
  const circumference = 48 * 2 * Math.PI;
  const percent = 50;

  const offset = circumference - (percent / 100) * circumference;
  let strokeDasharray = `${offset}`;

  return (
    <div>
      <CircularProgress
        radius={100}
        stroke={14}
        progress={39}
        color="var(--neg-red)"
      ></CircularProgress>

      <ProgressBar
        stroke={14}
        progress={-39}
        colors={{ minus: 'var(--neg-red)', plus: 'var(--pos-green)' }}
      ></ProgressBar>
    </div>
  );
};

export default URAS;
