import React, { useEffect, useContext, useState } from 'react';
import FancyHeading from '../../components/text/FancyHeading';
import modelB from '../../assests/modeBrand.png';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import IconHeading from '../../components/text/IconHeading';
import SentimentResultCard from '../../components/analytics/SentimentResultCard';
import SentimentRankCard from '../../components/analytics/SentimentRankCard';
import fromParentOnly from '../../pages/wrappers/FromParentOnly';
import './pssa.css'
const Pssa3Results = () => {
  //constants features and history created
  const [features, setFeatures] = useState([]);

  const history = useHistory();

  //used to fetch data and pass data 
  useEffect(() => {
    const pssaData = history.location.state.data;

    setFeatures(pssaData);
    console.log(pssaData);
  });
  // to find best and worst phones
  const bestPhone = Math.max.apply(
    Math,
    features.map((feature, i) => feature.feature_pol),
  );
  const worstPhone = Math.min.apply(
    Math,
    features.map((feature, i) => feature.feature_pol),
  );
  console.log(bestPhone + 'abi' + worstPhone);
  //to capitalize first word
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const capitalizePhoneModels = (model) => {
    if (model) {
      let modelNameStrList = model.split('-');
      modelNameStrList = modelNameStrList.map((model) => {
        return capitalize(model);
      });
      return modelNameStrList.join(' ');
    }
  };

  return (
    <div className="navbar-page-container -mb-40">
      <div className="app-heading-header content-padding -flex -flex-col">
        <div className="-mb-30">
          <NavLink to="/analytics/pssa" className="-text-decoration-none">
            <IconHeading size="extra-small" iconUrl="var(--arrow-back-icon)">
              <h4 className="heading4 -no-margin">
                <span className="header-go-back">Back</span>
              </h4>
            </IconHeading>
          </NavLink>
        </div>
        <h2 className="fancy-heading -no-margin">RESULTS OF SELECTED SMARTPHONE</h2>
      </div>
      <div className=" -mt-60 -mb-40 content-padding">
        <FancyHeading decoratorClassName="fancy-heading2-decorator">
          <h2 className="heading2 -medium -no-margin heading2-sep-margin">
            {features
              .filter((feature) => feature.feature == 'display')
              .map((filteredmodel) => filteredmodel.model)}
          </h2>
        </FancyHeading>
        <hr className="heading-sep" />
      </div>
      <div className="feature-selection-block">
        <div className="content-padding -flex -flex-reverse -flex-middle -flex-end pssa-results-banner" style={{}}>
          <div style={{ maxWidth: '650px', minWidth: '350px' }} className="feature-selection-box">
            <div className="focus-card focus-info-card -mb-40" style={{}}>
              <div className="-bold -normal focus-card-info-label">Info: </div>
              <div className="focus-card-description">
                This will give you the sentiment of the features of the selected smart phone and an
                overall score for the features. Sentiment Reuslt cards will give an insight about
                the best features and the worst features of the selected smart phone.
              </div>
            </div>
          </div>
          <img
            src={modelB}
            style={{ height: '250px', opacity: '0.6', marginRight: 'calc(5% + 10px)' }}
          />
        </div>
        <div className=" -mt-60 -mb-40 content-padding">
          <div className="analytics-container cards-grid -mt-40">
            {//filtered results for best feature sntiment card 
            features
              .filter((feature) => feature.feature_pol == bestPhone && bestPhone != 0)
              .map((filteredmodel,i) => (
                <SentimentRankCard
                key={`sentiment-results-card${i}`}
                  polarity="pos"
                  polarityPerc={filteredmodel.feature_pol}
                  description={'Best feature of the selected smart phone' +' '+filteredmodel.model}
                  label={capitalizePhoneModels(filteredmodel.feature)}
                ></SentimentRankCard>
              ))}
            
            {//filtered results for worst feature sntiment card 
            features
              .filter(
                (feature) => feature.feature_pol == worstPhone && feature.feature_pol != bestPhone,
              )
              .map((filteredmodel,i) => (
                <SentimentRankCard
                key={`sentiment-results-card${i}`}
                  polarity="neg"
                  polarityPerc={filteredmodel.feature_pol}
                  label={capitalizePhoneModels(filteredmodel.feature)}
                  description={
                    'Worst feature of the selected smart phone' + ' ' + filteredmodel.model
                  }
                ></SentimentRankCard>
              ))}
          </div>
          <div className="analytics-container cards-grid -mt-40">
            {//sentiment result cards
            features.map((feature, i) => (
              <SentimentResultCard
                key={`sentiment-results-card${i}`}
                heading={capitalizePhoneModels(feature.feature)}
                headingIcon="var(--phone-icon)"
                reviewCount={feature.feature_count}
                reviewCountLable="Reviews Analysed"
                polarity={feature.feature_pol}
                negPerc={feature.feature_neg}
                posPerc={feature.feature_pos}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default fromParentOnly(Pssa3Results);
