import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../../components/sate_management/GlobalStore';
import FancyHeading from '../../components/text/FancyHeading';
import phoneIcon from '../../assests/PhoneIcon.png';
import search from '../../assests/Search.png';
import brandsm from '../../assests/images/brandsm.jpg';
import croselight from '../../assests/CroseLight.png';
import circlebanner from '../../assests/GeometricCircleBanner.png';
// import { getPhones, analysePhones } from '../../services/pssa3-service';
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
import iphone from '../../assests/images/apple.png';
import samsung from '../../assests/images/samsung.png';
import huwawei from '../../assests/images/huw.png';
import asus from '../../assests/images/asus.png';
import pixel from '../../assests/images/google.png';
import htc from '../../assests/images/htc.png';
import oneplus from '../../assests/images/one.png';
import nokia from '../../assests/images/nokia.png';
import xiaomi from '../../assests/images/mi.png';
import motorola from '../../assests/images/moto.png';
import realme from '../../assests/images/real.png';
import lg from '../../assests/images/lg.png';
import sony from '../../assests/images/sony.png';
import zte from '../../assests/images/zte.png';
import {analysePhones} from "../../services/psssa3-service-post";
import {getPhones} from "../../services/pssa3-service";
import {getToken} from "../../common/utils";

const Pssa3View = () => {
  
  const analyseSelectedPhone = () => {
    setBtnLoadingState(true);
    const token = getToken();
    setTimeout(() => {
      analysePhones({model_name : q}, token)
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

  const [p,setP]=useState("");
  const [q,setQ]=useState("");
  
  const [features, setFeatures] = useState([]); //available fetures in backend

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
      const token = getToken();
      getPhones(token)
        .then((response) => {
          setFeatures(response.data.data);
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
    setP("");
    setQ("");
    setSelectedFeatures({});
  };
  useEffect(() => {
    Object.keys(selectedFeatures).length ? setBtnDisabledSate(false) : setBtnDisabledSate(true);
  }, [selectedFeatures]);

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
        <h2 className="fancy-heading -no-margin">ANALYSE FEATURES BY SELECTING RESPECTIVE SMART PHONE</h2>
      </div>
      <div className=" -mt-60 -mb-40 content-padding">
        <FancyHeading decoratorClassName="fancy-heading2-decorator">
          <h2 className="heading2 -medium -no-margin heading2-sep-margin">
            Select SMART PHONE To Analyse
          </h2>
        </FancyHeading>
        <hr className="heading-sep" />
      </div>
      <div className="feature-selection-block">
        <div className="content-padding -flex">
          <div style={{ width: '50%' }} className="feature-selection-box">
            <div className="focus-card focus-info-card -mb-40">
              <span className="-bold -normal">INFO: </span>Select the smart phone you want to analyse
              and get a insight from. This will give you the sentiment of the features of the selected smart phones
              and an overall score for the feature
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
                ) : 
                    <div className="-flex -mb-20 brand-selection-box-wrapper">
                      <IconHeading size="small" iconUrl={getIconUrl("display")}>
                        <label htmlFor="select-feature-type-display" className="select-label">
                          <h2 className="heading3 -regular -no-margin feature-type-heading">
                            Brand
                          </h2>
                        </label>
                      </IconHeading>
                      <select
                        defaultValue="select-feature"
                        className="select-brand select large heading4 -regular -flex-right"
                        id="select-brand-type"
                        onChange={(e)=>{
                          const selectedBrand=e.target.value;
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
                        {features.map((feature, i) => (
                           
                          <option key={feature.brand} value={feature.brand}>
                            
                           {capitalizePhoneModels(feature.brand)}
                          </option>
                        ))}
                      </select>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label htmlFor="select-model-type" className="select-label">
                          <h2 className="heading3 -regular -no-margin feature-type-heading">
                          <IconHeading size="small" iconUrl={getIconUrl("display")}>
                            Model
                           </IconHeading> 
                          </h2>
                        </label>
                      
                      <select
                        defaultValue="select-feature"
                        className="select-model select large heading4 -regular -flex-right"
                        id="select-model-type"
                        onChange={(e)=>{
                          const selectModel=e.target.value;
                          setQ(selectModel);
                          appendSelectedFeatures(p, e.target.value);
                        }}
                        //onChange={(event) =>
                          //appendSelectedFeatures(feature.feature, event.target.value)
                        //}
                        value={q || 'select-feature'}
                        //onChange={(event) =>
                          //appendSelectedFeatures(feature.feature, event.target.value)
                        //}
                        //value={selectedFeatures[feature.feature] || 'select-feature'}
                      >
                        <option value="select-feature" disabled>
                          Select Type
                        </option>
                        {/*features.map((feature) => (
                         feature.model.map((feature0) => (
                          <option key={feature0} value={feature.model}>
                            {feature0}
                            </option>
                          ))
                         ))*/}
                         {features.filter(feature => feature.brand == p).map(filteredmodel => (
                          
                            filteredmodel.model.map((feature2) => (
                          <option key={feature2} value={feature2}>
                            {feature2}
                            </option>
                          ))
                          
                          ))}
     
                      </select>
                    </div>
                }
              </div>
              <div className="-flex -mt-40">
                <div className="-flex">
                  <Button
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
            <img src={brandsm} style={{ width: '400px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pssa3View;

