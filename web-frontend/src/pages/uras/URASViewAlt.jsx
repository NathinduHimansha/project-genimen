import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../../components/sate_management/GlobalStore';
import FancyHeading from '../../components/text/FancyHeading';
import phoneIcon from '../../assests/PhoneIcon.png';
import search from '../../assests/Search.png';
import banner from '../../assests/MagnifierAnalysingBanner.png';
import croselight from '../../assests/CroseLight.png';
import circlebanner from '../../assests/GeometricCircleBanner.png';
import { getFeatures, analyseFeatures } from '../../services/uras-service';
import Button from '../../components/buttons/Button';
import SampleFeatureSelection from '../experiment/SampleFeatureSelection';
import propic from '../../assests/ProfilePic.png';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import IconHeading from '../../components/text/IconHeading';
import CurrentLocation from '../../components/header/CurrentLocation';
import displayIcon from '../../assests/Display.png';
import sizeIcon from '../../assests/Size.png';
import fingerprintIcon from '../../assests/FingerPrint.png';
import headphoneJackIcon from '../../assests/HeadphoneJack.png';
import { useToasts } from 'react-toast-notifications';

const URASViewAlt = () => {
  /*Nathundu */
  const analyseSelectedFeature = () => {
    setBtnLoadingState(true);
    setTimeout(() => {
      analyseFeatures()
        .then((response) => {
          setBtnLoadingState(false),
            history.push({
              pathname: '/analytics/uras/urasresults',
              state: response, //passing fetched data to results
            });
        })

        .catch((error) => {
          setBtnLoadingState(false),
            addToast('Data Fetching Error..! Please Try again', {
              appearance: 'error',
              id: 'uras-api-error',
            });
        });
    }, 3000);
  };

  const [features, setFeatures] = useState([
    {
      feature: 'Display',
      types: [],
    },
    {
      feature: 'Size',
      types: [],
    },
    {
      feature: 'Fingerprint',
      types: [],
    },
    {
      feature: 'Headphone-Jack',
      types: [],
    },
  ]); //available fetures in backend
  const [selectedFeatures, setSelectedFeatures] = useState({}); //selected features by the user
  const appendSelectedFeatures = (feature, type) => {
    console.log(feature, type);
    setSelectedFeatures((prevSelectedFeatures) => ({ ...prevSelectedFeatures, [feature]: type }));
  };
  const [btnLoadingState, setBtnLoadingState] = useState(false);
  const [btnDisabledSate, setBtnDisabledSate] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);

  const history = useHistory();
  const { addToast } = useToasts();
  /* End */

  const getIconUrl = (feature) => {
    return 'var(--' + feature.toLowerCase() + '-icon)';
  };

  useEffect(() => {
    setPageLoading(true);
    setTimeout(() => {
      getFeatures()
        .then((response) => {
          setFeatures(response);
          setPageLoading(false);
        })
        .catch((error) => {
          setPageLoading(false);
          addToast('Data Fetching Error..! Please Try again', {
            appearance: 'error',
            id: 'uras-api-error',
          });
        });
    }, 1000);
  }, []);

  const cleardata = () => {
    setSelectedFeatures({});
  };
  useEffect(() => {
    Object.keys(selectedFeatures).length ? setBtnDisabledSate(false) : setBtnDisabledSate(true);
  }, [selectedFeatures]);

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
              <div className="feature-types feature-types-selection-menu -flex -flex-col -flex-center">
                {pageLoading ? (
                  <div className="-flex -full-width -mb-70 -mt-40">
                    <div
                      style={{ marginLeft: '130px' }}
                      className=" spinner spinner-medium spinner-accent"
                    ></div>
                  </div>
                ) : (
                  features.map((feature, i) => (
                    <div key={i} className="-flex -mb-20 feature-selection-box-wrapper">
                      <IconHeading size="small" iconUrl={getIconUrl(feature.feature)}>
                        <label htmlFor="select-feature-type-display" className="select-label">
                          <h2 className="heading3 -regular -no-margin feature-type-heading">
                            {feature.feature}
                          </h2>
                        </label>
                      </IconHeading>
                      <select
                        defaultValue="select-feature"
                        className="select-feature select large heading4 -regular -flex-right"
                        id="select-feautre-type-display"
                        onChange={(event) =>
                          appendSelectedFeatures(feature.feature, event.target.value)
                        }
                        value={
                          selectedFeatures[feature.feature]
                            ? selectedFeatures[feature.feature]
                            : 'select-feature'
                        }
                      >
                        <option value="select-feature" disabled>
                          Select Type
                        </option>
                        {feature.types.map((type, i) => (
                          <option key={type + i} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))
                )}
              </div>
              <div className="-flex -mt-40">
                <div className="-flex">
                  <Button
                    iconSrc={search}
                    loading={false}
                    loading={btnLoadingState}
                    disabled={btnDisabledSate}
                    onClick={analyseSelectedFeature}
                    utilClasses={['-mr-10']}
                  >
                    Start Analysing
                  </Button>
                  <Button
                    outline={true}
                    type="reset"
                    value="reset"
                    onClick={() => cleardata()}
                    disabled={
                      btnLoadingState ||
                      btnDisabledSate ||
                      (selectedFeatures &&
                        Object.keys(selectedFeatures).length === 0 &&
                        selectedFeatures.constructor === Object)
                    }
                    // loading={btnLoadingState}
                    // iconSrc={croselight}
                  >
                    Clear
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
