import React from 'react';
import CircularProgress from '../../components/graphs/CircularProgress';
import ProgressBar from '../../components/graphs/ProgressBar';
import FancyHeading from '../../components/text/FancyHeading';
import './uras.css';

const URAS = () => {
  return (
    <div>
      <div className="heading-testing">
        <FancyHeading heading="FEATURE SENTIMENTS"></FancyHeading>
      </div>
      <div className="testing">
        <div className="content">
          <ProgressBar
            stroke={10}
            progress={31}
            colors={{ minus: 'var(--neg-red)', plus: 'var(--pos-green)' }}
            labels={{ minusLabel: '---', plusLabel: '+++', fontWeight: 800 }}
          ></ProgressBar>
          <div className="testing2">
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
      </div>
    </div>
  );
};

export default URAS;
