import React from 'react';
import NetPolarity from './NetPolarity';
import CircularProgress from '../../components/graphs/CircularProgress';
import ProgressBar from '../../components/graphs/ProgressBar';
import './analytics.css';

const SentimentResultCard = (props) => {
  let {
    id,
    heading,
    headingIcon,
    reviewCountLable,
    reviewCount,
    polarity,
    negPerc,
    posPerc,
  } = props;
  const getHeading = () => {
    if (headingIcon) {
      return (
        <div className="analytics-heading pre-icon">
          <div className="pre-icon-wrapper -mr-5">
            <img src={headingIcon} />
          </div>
          <h4 className="heading4 -no-margin">{heading}</h4>
        </div>
      );
    }
    return (
      <div className="analytics-heading">
        <h4 className="heading4 -no-margin">{heading}</h4>
      </div>
    );
  };

  return (
    <div>
      <div className="card ">
        {getHeading()}
        <div className="analytics-content">
          <div className="analytics-meta-info">
            <h5 className="heading5 -light -no-margin color-grey">
              {reviewCountLable}: {reviewCount}
            </h5>
          </div>
          <div className="analytics-wrapper">
            <div className="net-polarity">
              <h5 className="heading5 -no-margin -medium">Net Polarity: </h5>
              <NetPolarity polarity={polarity}></NetPolarity>
              <ProgressBar
                stroke={10}
                progress={polarity}
                colors={{ minus: 'var(--neg-red)', plus: 'var(--pos-green)' }}
                labels={{ minusLabel: '---', plusLabel: '+++', fontWeight: 800 }}
              />
            </div>
            <div className="neg-pos">
              <div>
                <h5 className="heading5 -no-margin -medium">Neg/Pos % </h5>
              </div>
              <div className="neg-pos-graph -flex">
                <CircularProgress
                  id={id + 'pos'}
                  stroke={14}
                  progress={posPerc}
                  color="var(--pos-green)"
                ></CircularProgress>
                <CircularProgress
                  id={id + 'neg'}
                  stroke={14}
                  progress={negPerc}
                  color="var(--neg-red)"
                ></CircularProgress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentResultCard;
