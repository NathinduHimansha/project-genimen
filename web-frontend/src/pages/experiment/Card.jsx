import React from 'react';
import CircularProgress from '../../components/graphs/CircularProgress';
import ProgressBar from '../../components/graphs/ProgressBar';
import FancyHeading from '../../components/text/FancyHeading';
import NetPolarity from '../../components/analytics/NetPolarity';
import SentimentResultCard from '../../components/analytics/SentimentResultCard';
import './card.css';
import phoneIcon from '../../assests/PhoneIcon.png';

const Card = () => {
  return (
    <div style={{ margin: '4%' }}>
      <div className="analytics-container cards-grid">
        <SentimentResultCard
          id="sentiment1"
          heading="Total Results"
          headingIcon={phoneIcon}
          reviewCount={300}
          reviewCountLable="Total Reviews"
          polarity={84}
          negPerc={44}
          posPerc={40}
        />
        <SentimentResultCard
          id="sentiment2"
          heading="Total Results"
          // headingIcon={phoneIcon}
          reviewCount={300}
          reviewCountLable="Total Reviews"
          polarity={84}
          negPerc={44}
          posPerc={40}
        />
      </div>
    </div>
  );
};

export default Card;
