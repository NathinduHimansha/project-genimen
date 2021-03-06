import React, { useEffect, useContext, useState } from 'react';
import FancyHeading from '../../components/text/FancyHeading';
import search from '../../assests/Search.png';
import brandsm from '../../assests/images/brandsm.png';
// import { getPhones, analysePhones } from '../../services/pssa3-service';
import Button from '../../components/buttons/Button';
import { useHistory, useLocation } from 'react-router';
import IconHeading from '../../components/text/IconHeading';
import CurrentLocation from '../../components/header/CurrentLocation';
import { useToasts } from 'react-toast-notifications';
import { analysePhones } from '../../services/psssa3-service-post';
import { getPhones } from '../../services/pssa3-service';
import { getToken } from '../../common/utils';

const Pssa3View = () => {
  //function used on click start analyse button
  //used to fetch data and pass data 
  const analyseSelectedPhone = () => {
    setBtnLoadingState(true);
    const token = getToken();
    setTimeout(() => {
      analysePhones({ model_name: q }, token)
        .then((response) => {
          const data = response.data;
          setBtnLoadingState(false),
            history.push({
              pathname: '/analytics/pssa/results',
              state: data, //passing fetched data to results
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

  //constants used to save brand name to p and model name to q
  const [p, setP] = useState('');
  const [q, setQ] = useState('');

  const [sphones, setSphones] = useState([]); //available fetures in backend

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

  //used to get phone brands and models from backend
  useEffect(() => {
    setPageLoading(true);
    setTimeout(() => {
      const token = getToken();
      getPhones(token)
        .then((response) => {
          setSphones(response.data.data);
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

  //used to clear selected values on click clear button
  const cleardata = () => {
    setP('');
    setQ('');
    setSelectedFeatures({});
  };
  useEffect(() => {
    Object.keys(selectedFeatures).length ? setBtnDisabledSate(false) : setBtnDisabledSate(true);
  }, [selectedFeatures]);

  //function used to capitalize first word 
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
          <CurrentLocation></CurrentLocation>
        </div>
        <h2 className="fancy-heading -no-margin">
          ANALYSE FEATURES BY SELECTING RESPECTIVE SMART PHONE
        </h2>
      </div>
      <div className=" -mt-60 -mb-40 content-padding">
        <FancyHeading decoratorClassName="fancy-heading2-decorator">
          <h2 className="heading2 -medium -no-margin heading2-sep-margin">
            Select Smart Phone To Analyse
          </h2>
        </FancyHeading>
        <hr className="heading-sep" />
      </div>
      <div className="feature-selection-block">
        <div className="content-padding -flex">
          <div style={{ width: '50%' }} className="feature-selection-box">
            <div className="focus-card focus-info-card -mb-40">
              <div className="-bold -normal focus-card-info-label">Info: </div>
              <div className="focus-card-description">
                Select the smart phone you want to analyse and get a insight from. This will give
                you the sentiment of the features of the selected smart phones and an overall score
                for the feature
              </div>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
              <div className="brand-types brand-types-selection-menu -flex -flex-col -flex-center">
                {pageLoading ? (
                  <div className="-flex -full-width -mb-70 -mt-40">
                    <div
                      style={{ marginLeft: '130px' }}
                      className=" spinner spinner-medium spinner-accent"
                    ></div>
                  </div>
                ) : (
                  
                  <div className="-flex -mb-20 brand-selection-box-wrapper">
                    <IconHeading
                      size="small"
                      iconUrl={getIconUrl('display')}
                      utilClasses={['-mr-2']}
                    >
                      <label className="select-label">
                        <h2 className="heading3 -regular -no-margin feature-type-heading">
                          Brand:{' '}
                        </h2>
                      </label>
                    </IconHeading>
                    
                    <select
                    //dropdown list of brands created and onchange function is here used toset value to p
                      style={{ marginLeft: '10px', background: 'var(--white)' }}
                      defaultValue="select-feature"
                      className="select-brand select large heading4 -regular -flex-right"
                      id="select-brand-type"
                      onChange={(e) => {
                        const selectedBrand = e.target.value;
                        setP(selectedBrand);
                      }}
                      //onChange={(event) =>
                      //appendSelectedFeatures(feature.feature, event.target.value)
                      //}
                      value={p || 'select-feature'}
                    >
                      <option value="select-feature" disabled>
                        Select Type
                      </option>
                      {sphones.map((brand, i) => (
                        <option key={brand.brand} value={brand.brand}>
                          {capitalizePhoneModels(brand.brand)}
                        </option>
                      ))}
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label htmlFor="select-model-type" className="select-label">
                      <h2 className="heading3 -regular -no-margin feature-type-heading">
                        <IconHeading
                          size="small"
                          iconUrl={getIconUrl('display')}
                          utilClasses={['-mr-2']}
                        >
                          Model:
                        </IconHeading>
                      </h2>
                    </label>
                    <select
                      //dropdown list of models created and onchange function is here used toset value to q
                      style={{ marginLeft: '10px', background: 'var(--white)' }}
                      defaultValue="select-feature"
                      className="select-model select large heading4 -regular -flex-right"
                      id="select-model-type"
                      onChange={(e) => {
                        const selectModel = e.target.value;
                        setQ(selectModel);
                        appendSelectedFeatures(p, e.target.value);
                      }}
                      
                      value={q || 'select-feature'}
                     
                    >
                      <option value="select-feature" disabled>
                        Select Type
                      </option>
                      {sphones
                        .filter((feature) => feature.brand == p)
                        .map((filteredmodel) =>
                          filteredmodel.model.map((modelz) => (
                            <option key={modelz} value={modelz}>
                              {modelz}
                            </option>
                          )),
                        )}
                    </select>
                  </div>
                )}
              </div>
              <div className="-flex -mt-40">
                <div className="-flex">
                  <Button
                  //start analsing button
                    iconSrc={search}
                    loading={false}
                    loading={btnLoadingState}
                    disabled={btnDisabledSate}
                    onClick={analyseSelectedPhone}
                    utilClasses={['-mr-10']}
                  >
                    Start Analysing
                  </Button>
                  <Button
                  //clear button
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
                  
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ opacity: '0.7' }} className="feature-selection-banner -flex -flex-middle">
            <img src={brandsm} style={{ width: '400px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pssa3View;
