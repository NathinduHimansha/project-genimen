import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import search from '../../assests/Search.png';
import croselight from '../../assests/CroseLight.png';

import { analyseFeatures } from '../../services/uras-service';
import { getFeatures } from '../../services/uras-service';
import { useToasts } from 'react-toast-notifications';

import FancyHeading from '../../components/text/FancyHeading';
import Button from '../../components/buttons/Button';
import IconHeading from '../../components/text/IconHeading';

function UrasUserInputView() {
  const [featues, setFeatues] = useState([]); //available fetures in backend
  const [selectedFeatures, setSelectedFeatures] = useState({}); //selected features by the user

  const [btnLoadingState, setBtnLoadingState] = useState(false);
  const [btnDisabledSate, setBtnDisabledSate] = useState(true);

  const history = useHistory();
  const { addToast } = useToasts();

  //fetching features (select options)
  useEffect(() => {
    getFeatures()
      .then((response) => {
        setFeatues(response);
      })
      .catch((error) => {
        addToast('Data Fetching Error..! Please Try again', {
          appearance: 'error',
          id: 'uras-api-error',
        });
        console.log('Data Fething Error caught: getFeatures()');
      });
  }, []);

  //assigning the icon url to featue headings
  const getIconUrl = (feature) => {
    return 'var(--' + feature.toLowerCase() + '-icon)';
  };

  //append user selected features
  const appendSelectedFeatures = (feature, type) => {
    setSelectedFeatures((prevSelectedFeatures) => ({ ...prevSelectedFeatures, [feature]: type }));
  };

  //clear user selected features
  const cleardata = () => {
    setSelectedFeatures({});
  };

  //enable/diable buttons
  useEffect(() => {
    Object.keys(selectedFeatures).length ? setBtnDisabledSate(false) : setBtnDisabledSate(true);
  }, [selectedFeatures]);

  //uras results(sentiment scores) fetching
  const fetchData = () => {
    setBtnLoadingState(true);

    // analyseFeatures(selectedFeatures)
    analyseFeatures()
      .then((response) => {
        setBtnLoadingState(false),
          history.push({
            pathname: '/analytics/uras/results',
            state: response, //passing fetched data to results
          });
      })

      .catch((error) => {
        setBtnLoadingState(false),
          addToast('Data Fetching Error..! Please Try again', {
            appearance: 'error',
            id: 'uras-api-error',
          });
          console.log('Data Fething Error caught: analyseFeatures()');
      });
  };

  return (
    <div style={{ margin: '10% 10%' }}>
      <div className="-mb-40">
        <FancyHeading heading="SELECT FEATURES TO ANALYSE" />
      </div>

      <div className=" -ml-70 feature-types feature-types-selection-menu -flex -flex-col -flex-center">
        <form>
          {featues.map((featureSet, index) => (
            <div key={index} className="-flex -mb-20">
              <IconHeading size="small" iconUrl={getIconUrl(featureSet.feature)}>
                <label htmlFor="select-feature-type-display" className="select-label">
                  <h2 className="heading3 -medium -no-margin feature-type-heading">
                    {featureSet.feature}
                  </h2>
                </label>
              </IconHeading>

              {/* feature selection section */}
              <select
                defaultValue="select-feature"
                classNamePrefix="select"
                className="select large heading4 -regular -flex-right"
                id="select-feautre-type-display"
                onChange={(event) => appendSelectedFeatures(featureSet.feature, event.target.value)}
              >
                <option value="select-feature" disabled>
                  Select Type
                </option>

                {featureSet.types.map((type, index) => (
                  <option key={index} value={type} feature={featureSet.feature}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* buttons */}
          <div className="-flex -flex-center -flex-middle -mt-40">
            <div className="-mr-10">
              <Button
                type="reset"
                value="reset"
                onClick={() => cleardata()}
                loading={btnLoadingState}
                iconSrc={croselight}
              >
                Clear
              </Button>
            </div>
            <div>
              <Button
                onClick={fetchData}
                iconSrc={search}
                loading={btnLoadingState}
                disabled={btnDisabledSate}
              >
                Start Analysing
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UrasUserInputView;
