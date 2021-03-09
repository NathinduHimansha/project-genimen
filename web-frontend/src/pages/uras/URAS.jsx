import React from 'react';
import CircularProgress from '../../components/graphs/CircularProgress';
import ProgressBar from '../../components/graphs/ProgressBar';
import './uras.css';

const URAS = () => {
  var radius = 48;
  const circumference = 48 * 2 * Math.PI;
  const percent = 50;

  const offset = circumference - (percent / 100) * circumference;
  let strokeDasharray = `${offset}`;

  return (
    <div class="testing">
      <ProgressBar
        stroke={9}
        progress={31}
        colors={{ minus: 'var(--neg-red)', plus: 'var(--pos-green)' }}
      ></ProgressBar>
      <div class="testing2">
        <CircularProgress
          id="progress1"
          stroke={14}
          progress={39}
          color="var(--neg-red)"
        ></CircularProgress>
        <CircularProgress
          id="progress2"
          stroke={14}
          progress={70}
          color="var(--pos-green)"
        ></CircularProgress>
      </div>
    </div>
  );
};

export default URAS;
