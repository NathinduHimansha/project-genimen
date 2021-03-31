import React, { useEffect, useContext } from 'react';
import { Context } from '../../components/sate_management/GlobalStore';
import FancyHeading from '../../components/text/FancyHeading';
import phoneIcon from '../../assests/PhoneIcon.png';
import search from '../../assests/Search.png';
import banner from '../../assests/MagnifierAnalysingBanner.png';
import { getFeatures } from '../../services/uras-service';
import Button from '../../components/buttons/Button';
import SampleFeatureSelection from '../experiment/SampleFeatureSelection';
import propic from '../../assests/ProfilePic.png';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import IconHeading from '../../components/text/IconHeading';
import CurrentLocation from '../../components/header/CurrentLocation';

const URASViewAlt = () => {
  const [state, dispatch] = useContext(Context);
  const paths = useLocation().pathname.substr(1).split('/');

  useEffect(() => {}, []);

  return (
    <div className="navbar-page-container -mb-40">
      <div className="app-heading-header content-padding -flex -flex-col">
        {/* <div className="-mb-20"> */}
        {/* <IconHeading size="extra-small" iconUrl="var(--arrow-back-icon)"> */}
        {/* <h4 className="heading4 -no-margin"> */}
        {/* <span className="header-go-back">Back</span> */}
        {/* </h4> */}
        {/* </IconHeading> */}
        {/* </div> */}
        <div className="-mb-30">
          <CurrentLocation></CurrentLocation>
        </div>
        <h2 className="fancy-heading -no-margin">ANALYSE SMARTPHONE FEATURES</h2>
      </div>
      <div className=" -mt-60 -mb-40 content-padding">
        <FancyHeading decoratorClassName="fancy-heading2-decorator">
          <h2 className="heading2 -medium -no-margin heading2-sep-margin">
            Select Features To Analyse
          </h2>
        </FancyHeading>
        <hr className="heading-sep" />
      </div>
      <div className="feature-selection-block">
        <div className="content-padding -flex">
          <div style={{ width: '50%' }} className="feature-selection-box">
            <div className="focus-card focus-info-card -mb-40">
              <span className="-bold -normal">INFO: </span>Select the features you want to analyse
              and get a insight from. This will give you the sentiment of the selected features from
              variety of phones and an overall score for the feature
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
