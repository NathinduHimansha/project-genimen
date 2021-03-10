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
import banner from '../../assests/MagnifierAnalysingBanner.png';

const Card = () => {
  return (
    <div style={{ margin: '4%' }}>
      <div style={{ marginBottom: '40px' }}>
        <FancyHeading heading="SELECT FEATURES TO ANALYSE"></FancyHeading>
      </div>
      <div className="-flex" style={{ marginBottom: '40px' }}>
        <select className="phone-selector select heading4 -regular -full-width">
          <option value="Select Feature" disabled selected>
            Select Phone
          </option>
          <option value="display">Normal</option>
        </select>
        <button class="btn primary-btn" disabled>
          <span className="-bold -hidden">Start Analysing</span>
          <img className="left -hidden" src={search} style={{ width: '20px' }} />
          <div class="spinner spinner-small"></div>
        </button>
      </div>
      <div style={{ marginTop: '40px', marginBottom: '80px' }}>
        <div className="keyword-tag-container">
          <span className="keyword-tag">fingerprint</span>
          <span className="keyword-tag">screen</span>
          <span className="keyword-tag">ease of use</span>
          <span className="keyword-tag">fingerprint</span>
        </div>
      </div>
      <div style={{ position: 'absolute', left: '900px' }}>
        <img src={banner} style={{ width: '400px' }} />
      </div>
      <div className="-flex -flex-col -fit-content" style={{ width: '' }}>
        <Select></Select>
        <div className="-flex" style={{ marginTop: '40px' }}>
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
      <div style={{ marginTop: '60px' }}>
        <div className="analytics-container cards-grid">
          <SentimentResultCard
            heading="Total Results"
            // headingIcon={phoneIcon}
            reviewCount={300}
            reviewCountLable="Total Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
        </div>
      </div>
      <div style={{ marginTop: '60px' }}>
        <h3 className="heading3 -medium -no-margin" style={{ fontSize: '2.2rem' }}>
          Analysis per Phone
        </h3>
        <hr className="heading-sep" style={{ marginBottom: '40px', marginTop: '10px' }} />

        <div className="analytics-container cards-grid">
          <SentimentResultCard
            heading="Samsung Galaxy S10+"
            headingIcon={phoneIcon}
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
          <SentimentResultCard
            heading="OnePlus 6T"
            headingIcon={phoneIcon}
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
