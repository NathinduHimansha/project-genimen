import React, { useEffect, useContext } from 'react';
import { Context } from '../../components/sate_management/GlobalStore';
import CircularProgress from '../../components/graphs/CircularProgress';
import ProgressBar from '../../components/graphs/ProgressBar';
import FancyHeading from '../../components/text/FancyHeading';
import NetPolarity from '../../components/analytics/NetPolarity';
import SentimentResultCard from '../../components/analytics/SentimentResultCard';
import phoneIcon from '../../assests/PhoneIcon.png';
import search from '../../assests/Search.png';
import banner from '../../assests/MagnifierAnalysingBanner.png';
import { getFeatures } from '../../services/uras-service';
import Button from '../../components/buttons/Button';
import SampleFeatureSelection from '../experiment/SampleFeatureSelection';
import propic from '../../assests/ProfilePic.png';

const URASViewAlt = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {}, []);

  return (
    <div className="navbar-page-container">
      <div className="app-heading-header content-padding">
        <FancyHeading heading="ANALYSE SMARTPHONE FEATURES" className="-bold"></FancyHeading>
      </div>
      <div className=" -mt-60 -mb-40 content-padding">
        <h2 className="heading2 -medium -no-margin heading2-sep-margin">
          Select Features To Analyse
        </h2>
        <hr className="heading-sep" />
      </div>
      <div className="feature-selection-block">
        <div className="content-padding -flex">
          <div style={{ width: '50%' }} className="feature-selection-box">
            <div className="focus-card focus-info-card -mb-40">
              <span className="-bold">INFO: </span>Select the features you want to analyse and get a
              insight from. This will give you the sentiment of the selected features from variety
              of phones and an overall score for the feature
            </div>
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
              <SampleFeatureSelection></SampleFeatureSelection>
              <div className="-flex -mt-40">
                <div className="">
                  <Button iconSrc={search} loading={false}>
                    Start Analysing
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ opacity: '0.6' }} className="feature-selection-banner -flex -flex-middle">
            <img src={banner} style={{ width: '400px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default URASViewAlt;
