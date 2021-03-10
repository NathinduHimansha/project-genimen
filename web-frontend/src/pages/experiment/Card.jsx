import React from 'react';
import CircularProgress from '../../components/graphs/CircularProgress';
import ProgressBar from '../../components/graphs/ProgressBar';
import FancyHeading from '../../components/text/FancyHeading';
import NetPolarity from '../../components/analytics/NetPolarity';
import SentimentResultCard from '../../components/analytics/SentimentResultCard';
import Select from './Select';
import './card.css';
import phoneIcon from '../../assests/PhoneIcon.png';
import search from '../../assests/Search.png';

const Card = () => {
  return (
    <div style={{ margin: '4%' }}>
      <div style={{ marginBottom: '40px' }}>
        <FancyHeading heading="SELECT FEATURES TO ANALYSE"></FancyHeading>
      </div>
      <div className="-flex -flex-col -fit-content" style={{ width: '' }}>
        <Select></Select>
        <div style={{ marginTop: '40px' }}>
          <button className="btn primary-btn icon-btn -flex-right">
            <span className="-bold">Start Analysing</span>
            <img className="left" src={search} style={{ width: '20px' }} />
          </button>
        </div>
      </div>

      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <label for="select-feature" className="select-label">
          <span className="t1">Show: </span>
        </label>
        <select className="select" id="select-feautre">
          <option value="display">Display</option>
        </select>
      </div>

      <h2 className="heading2 -regular -no-margin">Display</h2>
      <hr className="heading-sep" style={{ marginTop: '10px' }} />
      <div style={{ marginTop: '20px' }}>
        <h3 className="heading3 -regular -no-margin">
          Type: <span className="-medium">Curved</span>
        </h3>
      </div>
      <div className="analytics-container cards-grid" style={{ marginTop: '60px' }}>
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
