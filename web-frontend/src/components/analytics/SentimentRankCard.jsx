import React from 'react';
import smily from '../../assests/smily-emoji.png';
import angry from '../../assests/angry-emoji.png';

const SentimentRankCard = (props) => {
  let { polarityPerc, label, description, polarity } = props;
  const color = polarity == 'pos' ? 'var(--pos-green)' : 'var(--neg-red)';
  const polarityPercLabel = polarity == 'pos' ? '+' + polarityPerc + '%' : polarityPerc + '%';

  return (
    <div>
      <div
        className={`sentiment-rank-card ${
          polarity == 'pos' ? 'sentiment-rank-card--pos' : 'sentiment-rank-card--neg'
        }`}
      >
        <div className="sentiment-det -flex -flex-col">
          <div>
            <div className="sentiment-rank-card-label">
              <h1 className="sentiment-det-label heading1 -medium -no-margin ">{label}</h1>
            </div>
            <span className="sentiment-det-description">{description}</span>
          </div>
          <div className="-flex-bottom">
            <h1 className="heading1 sentiment-det-polarity-perc -light -no-margin">
              {polarityPercLabel}
            </h1>
          </div>
        </div>
        <div className="sentiment-emoji">
          <div className="sentiment-emoji-wrapper">
            {polarity == 'pos' ? <img src={smily} /> : <img src={angry} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentRankCard;
