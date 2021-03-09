import React from 'react';
import CircularProgress from '../../components/graphs/CircularProgress';
import ProgressBar from '../../components/graphs/ProgressBar';
import FancyHeading from '../../components/text/FancyHeading';
import NetPolarity from '../../components/analytics/NetPolarity';
import './card.css';
import phoneIcon from '../../assests/PhoneIcon.png';

const Card = () => {
  return (
    <div style={{ margin: '4%' }}>
      <div className="analytics-container cards-grid">
        <div className="card ">
          <div className="analytics-heading pre-icon">
            <img src={phoneIcon} />
            <h4 className="heading4 -no-margin">Total Results</h4>
          </div>
          <div className="analytics-content">
            <div className="analytics-meta-info">
              <h5 className="heading5 -light -no-margin color-grey">Total Reviews Analysed: 300</h5>
            </div>
            <div className="analytics-wrapper">
              <div className="net-polarity">
                <h5 className="heading5 -no-margin -medium">Net Polarity: </h5>
                <NetPolarity polarity={-54}></NetPolarity>
                <ProgressBar
                  stroke={10}
                  progress={54}
                  colors={{ minus: 'var(--neg-red)', plus: 'var(--pos-green)' }}
                  labels={{ minusLabel: '---', plusLabel: '+++', fontWeight: 800 }}
                />
              </div>
              <div className="neg-pos">
                <div>
                  <h5 className="heading5 -no-margin -medium">Neg/Pos % </h5>
                </div>
                <div class="neg-pos-graph -flex">
                  <CircularProgress
                    id="pos1"
                    stroke={14}
                    progress={70}
                    color="var(--pos-green)"
                  ></CircularProgress>
                  <CircularProgress
                    id="neg1"
                    stroke={14}
                    progress={16}
                    color="var(--neg-red)"
                  ></CircularProgress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
