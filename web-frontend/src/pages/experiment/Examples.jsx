import React, { useEffect } from 'react';
import CircularProgress from '../../components/graphs/CircularProgress';
import ProgressBar from '../../components/graphs/ProgressBar';
import FancyHeading from '../../components/text/FancyHeading';
import NetPolarity from '../../components/analytics/NetPolarity';
import SentimentResultCard from '../../components/analytics/SentimentResultCard';
import SampleSelect from './SampleSelect';
import SampleFeatureSelection from './SampleFeatureSelection';
import './card.css';
import phoneIcon from '../../assests/PhoneIcon.png';
import search from '../../assests/Search.png';
import banner from '../../assests/MagnifierAnalysingBanner.png';
import { getFeatures } from '../../services/uras-service';

const Examples = () => {
  const test = getFeatures();
  useEffect(() => {
    test.then((res) => console.log(res));
  }, []);

  return (
    <div style={{ margin: '10% 10%' }}>
      <div className="-mb-40">
        <FancyHeading heading="SELECT FEATURES TO ANALYSE"></FancyHeading>
      </div>
      <div className="-flex -mb-40">
        <select
          defaultValue="select-phone"
          className="dark phone-selector select heading4 -regular -full-width"
        >
          <option value="select-phone" disabled>
            Select Phone
          </option>
          <option value="display">Normal</option>
        </select>
        <button className="btn primary-btn">
          <span className="-bold -hidden">Start Analysing</span>
          <img className="left -hidden" src={search} style={{ width: '20px' }} />
          <div className="spinner spinner-small"></div>
        </button>
      </div>
      <div className="-mb-40 -mt-40">
        <div className="keyword-tag-container">
          <span className="keyword-tag">fingerprint</span>
          <span className="keyword-tag">screen</span>
          <span className="keyword-tag">ease of use</span>
          <span className="keyword-tag">fingerprint</span>
        </div>
      </div>
      <div style={{ position: 'absolute', left: '1000px', top: '380px', opacity: '0.8' }}>
        <img src={banner} style={{ width: '400px' }} />
      </div>
      <div style={{ marginTop: '20px', marginBottom: '20px', width: '80%', maxWidth: '700px' }}>
        <SampleFeatureSelection></SampleFeatureSelection>
        <div className="-flex -mt-40">
          <button className="btn primary-btn icon-btn -flex-right">
            <span className="-bold">Start Analysing</span>
            <img className="left" src={search} style={{ width: '20px' }} />
          </button>
        </div>
      </div>

      <div className="-mb-40 -mt-90">
        <FancyHeading heading="FEATURES SENTIMENTS"></FancyHeading>
      </div>

      <div className="-mb-35 -mt-80">
        <label htmlFor="select-feature" className="select-label">
          <span className="t1 color-grey">Show: </span>
        </label>
        <select className="select" id="select-feautre">
          <option value="display">Display</option>
        </select>
      </div>

      <h2 className="heading2 -regular -no-margin">Display</h2>
      <hr className="heading-sep" />
      <div className="-mt-20">
        <h3 className="heading3 -regular -no-margin">
          Type: <span className="-medium">Curved</span>
        </h3>
      </div>
      <div className="analytics-container cards-grid -mt-60">
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
      <div className="-mt-60">
        <h3 className="heading3 -medium -no-margin" style={{ fontSize: '2.2rem' }}>
          Analysis per Phone
        </h3>
        <hr className="heading-sep" />

        <div className="analytics-container cards-grid -mt-40">
          <SentimentResultCard
            heading="Samsung Galaxy S10+"
            headingIcon="var(--phone-icon)"
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
          <SentimentResultCard
            heading="OnePlus 6T"
            headingIcon="var(--phone-icon)"
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

export default Examples;
