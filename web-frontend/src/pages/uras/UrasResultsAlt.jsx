import React, { useEffect, useContext } from 'react';
import { Context } from '../../components/sate_management/GlobalStore';
import FancyHeading from '../../components/text/FancyHeading';
import phoneIcon from '../../assests/PhoneIcon.png';
import search from '../../assests/Search.png';
import banner from '../../assests/MagnifierAnalysingBanner.png';
import circlebanner from '../../assests/GeometricCircleBanner.png';
import { getFeatures } from '../../services/uras-service';
import Button from '../../components/buttons/Button';
import SampleFeatureSelection from '../experiment/SampleFeatureSelection';
import propic from '../../assests/ProfilePic.png';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import IconHeading from '../../components/text/IconHeading';
import CurrentLocation from '../../components/header/CurrentLocation';
import SentimentResultCard from '../../components/analytics/SentimentResultCard';
import SentimentRankCard from '../../components/analytics/SentimentRankCard';

const UrasResultsAlt = () => {
  const [state, dispatch] = useContext(Context);
  const paths = useLocation().pathname.substr(1).split('/');

  useEffect(() => {}, []);

  return (
    <div className="navbar-page-container -mb-40">
      {/* <div */}
      {/* src={circlebanner} */}
      {/* style={{ */}
      {/* // overflow: 'hidden', */}
      {/* position: 'absolute', */}
      {/* background: `url(${circlebanner})`, */}
      {/* width: '270px', */}
      {/* height: '100%', */}
      {/* right: '0', */}
      {/* top: '300px', */}
      {/* // backgroundPositionY: '250px', */}
      {/* backgroundPositionX: '120px', */}
      {/* backgroundRepeat: 'no-repeat', */}
      {/* backgroundSize: 'contain', */}
      {/* }} */}
      {/* ></div> */}
      <div className="app-heading-header content-padding -flex -flex-col">
        <div className="-mb-30">
          <NavLink to="/analytics/uras" className="-text-decoration-none">
            <IconHeading size="extra-small" iconUrl="var(--arrow-back-icon)">
              <h4 className="heading4 -no-margin">
                <span className="header-go-back">Back</span>
              </h4>
            </IconHeading>
          </NavLink>
        </div>
        <h2 className="fancy-heading -no-margin">RESULTS</h2>
      </div>
      <div className=" -mt-60 -mb-90 content-padding">
        <FancyHeading decoratorClassName="fancy-heading2-decorator">
          <h2 className="heading2 -medium -no-margin heading2-sep-margin">
            Smartphone Feature Sentiments
          </h2>
        </FancyHeading>
        <hr className="heading-sep" />
        <div>
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
          <div className="-mt-60 feature-overall-sentiment-container">
            <div className="overall-sentiment-results-card-container">
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
            <div className="-flex-grow sentiment-rank-card-container">
              <SentimentRankCard
                polarity="pos"
                polarityPerc={84}
                label="OnePlus 6T"
                description="Best phone for the feature"
              ></SentimentRankCard>
              <SentimentRankCard
                polarity="neg"
                polarityPerc={44}
                label="Samsung S10+"
                description="Worst phone for the feature"
              ></SentimentRankCard>
            </div>
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
                heading="Samsung Galaxy S10+"
                headingIcon="var(--phone-icon)"
                reviewCount={300}
                reviewCountLable="Reviews Analysed"
                polarity={84}
                negPerc={44}
                posPerc={40}
              />
              <SentimentResultCard
                heading="Samsung Galaxy S10+"
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
      </div>
    </div>
  );
};
export default UrasResultsAlt;
