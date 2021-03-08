import React from 'react';
import CircularProgress from '../../components/graphs/CircularProgress';

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
        stroke={9}
        progress={40}
        color="var(--pos-green)"
      ></CircularProgress>
    </div>
  );
};

export default URAS;
