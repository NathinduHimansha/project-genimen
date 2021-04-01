import React, { useEffect, useContext, useState } from 'react';
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
import { isObjEmtpy } from '../../common/utils';

const UrasResultsAlt = () => {
  const featureSentimentPolarity = 'feature-sentiment-polarity';
  const phoneFeaturePolarity = 'phone-feature-polarity';
  const [bestPhone, setBestPhone] = useState([]);
  const [worstPhone, setWorstPhone] = useState([]);

  const [urasData, setUrasData] = useState({
    [featureSentimentPolarity]: [],
    [phoneFeaturePolarity]: [],
  });
  const [selectedFeatureType, setSelectedFeatureType] = useState();
  const history = useHistory();

  const findBest = () => {
    return urasData[phoneFeaturePolarity]
      .filter((featureDet) => {
        return featureDet.feature == selectedFeatureType;
      })
      .reduce((curr, pre) => {
        return curr.pos > pre.pos ? curr : pre;
      }, 0);
  };
  const findWorst = () => {
    return urasData[phoneFeaturePolarity]
      .filter((featureDet) => {
        return featureDet.feature == selectedFeatureType;
      })
      .reduce((curr, pre) => {
        return curr.pos < pre.pos ? curr : pre;
      }, 110);
  };
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // construct phone model names
  const capitalizePhoneModels = (model) => {
    if (model) {
      let modelNameStrList = model.split('-');
      modelNameStrList = modelNameStrList.map((model) => {
        return capitalize(model);
      });
      return modelNameStrList.join(' ');
    }
  };
  useEffect(() => {
    const urasData = history.location.state.data;
    const featureType = urasData[featureSentimentPolarity][0].feature;
    setUrasData(urasData);
    setSelectedFeatureType(featureType);
  }, []);
  useEffect(() => {
    let bestPhone = findBest();
    let worstPhone = findWorst();
    if (worstPhone.phone == bestPhone.phone) {
      if (worstPhone.pos > 50) {
        worstPhone = {};
      } else {
        bestPhone = {};
      }
    }
    setBestPhone(bestPhone);
    setWorstPhone(worstPhone);
  }, [urasData, setUrasData, selectedFeatureType, setSelectedFeatureType]);
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
          <div className="-mb-65 -mt-20">
            <label htmlFor="select-feature" className="select-label">
              <span className="t1 color-grey">Show: </span>
            </label>
            <select
              className="select"
              id="select-feautre"
              value={selectedFeatureType}
              onChange={(e) => {
                setSelectedFeatureType(e.target.value);
              }}
            >
              {urasData[featureSentimentPolarity].map((featureDet, i) => {
                return (
                  <option key={`feature-type-${i}`} value={featureDet.feature}>
                    {capitalize(featureDet.feature)}
                  </option>
                );
              })}
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
              {urasData[featureSentimentPolarity]
                .filter((featureDet) => {
                  return featureDet.feature == selectedFeatureType;
                })
                .map((featureDet, i) => {
                  return (
                    <SentimentResultCard
                      key={`total-sentiment-card${i}`}
                      heading="Total Results"
                      // headingIcon={phoneIcon}
                      reviewCount={featureDet['total-review-count']}
                      reviewCountLable="Total Reviews Analysed"
                      polarity={featureDet.polarity}
                      negPerc={featureDet.neg}
                      posPerc={featureDet.pos}
                    />
                  );
                })}
            </div>
            <div className="-flex-grow sentiment-rank-card-container">
              {!isObjEmtpy(bestPhone) ? (
                <SentimentRankCard
                  polarity="pos"
                  polarityPerc={bestPhone.pos}
                  label={capitalizePhoneModels(bestPhone.phone)}
                  description="Best phone for the feature"
                ></SentimentRankCard>
              ) : (
                ''
              )}
              {!isObjEmtpy(worstPhone) ? (
                <SentimentRankCard
                  polarity="neg"
                  polarityPerc={worstPhone.pos}
                  label={capitalizePhoneModels(worstPhone.phone)}
                  description="Worst phone for the feature"
                ></SentimentRankCard>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="-mt-60">
            <h3 className="heading3 -medium -no-margin" style={{ fontSize: '2.2rem' }}>
              Analysis per Phone
            </h3>
            <hr className="heading-sep" style={{ marginTop: '20px' }} />
            <div className="-mt-5 -flex -full-width -flex-middle">
              <div className="-flex -flex-middle">
                <span className="uras-sort-label">Sort by: </span>
                <select className="uras-sort select">
                  <option value="a-z">A-Z</option>
                </select>
              </div>
            </div>

            <div className="analytics-container cards-grid -mt-40">
              {urasData[phoneFeaturePolarity]
                .filter((featureDet) => {
                  return featureDet.feature == selectedFeatureType;
                })
                .map((featureDet, i) => {
                  return (
                    <SentimentResultCard
                      key={`sentiment-results-card${i}`}
                      heading={capitalizePhoneModels(featureDet.phone)}
                      headingIcon="var(--phone-icon)"
                      reviewCount={featureDet['review-count']}
                      reviewCountLable="Reviews Analysed"
                      polarity={featureDet.polarity}
                      negPerc={featureDet.neg}
                      posPerc={featureDet.pos}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UrasResultsAlt;
