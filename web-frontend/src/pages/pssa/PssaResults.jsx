import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../../components/sate_management/GlobalStore';
import FancyHeading from '../../components/text/FancyHeading';
import phoneIcon from '../../assests/PhoneIcon.png';
import search from '../../assests/Search.png';
import modelB from '../../assests/images/modeBrand.jpg';
import croselight from '../../assests/CroseLight.png';
import circlebanner from '../../assests/GeometricCircleBanner.png';
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
import iphone7 from '../../assests/images/apple.png';
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
import SentimentResultCard from '../../components/analytics/SentimentResultCard';
import SentimentRankCard from '../../components/analytics/SentimentRankCard';
const Pssa3Results = () => {
  
  const [features, setFeatures] = useState([]);
  

  const history = useHistory();




  useEffect(() => {
    
      const pssaData = history.location.state.data;

      setFeatures(pssaData)
      console.log(pssaData)
    
 });
 const bestPhone=Math.max.apply(Math, features.map((feature,i) => (
                      feature.feature_pol    
    )))
    const worstPhone=Math.min.apply(Math, features.map((feature,i) => (
      feature.feature_pol    
)))
console.log(bestPhone+"abi"+worstPhone)
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
          
          {features.filter(feature => feature.feature == "display").map(filteredmodel => (
                          
                          filteredmodel.model
                          
                        ))}
                        </h2>
          
        </FancyHeading>
        <hr className="heading-sep" />
      </div>
      <div className="feature-selection-block">
        <div className="content-padding -flex" style={{height:"200px"}}>
          <div style={{ width: '50%' }} className="feature-selection-box" >
            
            <div className="focus-card focus-info-card -mb-40"style={{height:"200px"}}>
              
              <span className="-bold -normal" >INFO: </span>This will give you the sentiment of the features of 
              the selected smart phone and an overall score for the features
                
            </div>
            
            </div>
            <img src={modelB} style={{height:"220px",width:"520px",opacity: '0.6'}}/>
            </div>        
            <div className=" -mt-60 -mb-40 content-padding">
                  
                <div className="analytics-container cards-grid -mt-40" >
                {features.filter(feature => feature.feature_pol == bestPhone && bestPhone > worstPhone && bestPhone !=0).map(filteredmodel => (
                          
                          <SentimentRankCard
                  polarity="pos"
                  polarityPerc={filteredmodel.feature_pol}
                  description={"Best feature of the selected smart phone"+filteredmodel.model}
                  label={capitalizePhoneModels(filteredmodel.feature)}
                 
                ></SentimentRankCard>
                          
                        ))}
                        {features.filter(feature => feature.feature_pol == worstPhone && feature.feature_pol != bestPhone).map(filteredmodel => (
                          
                          <SentimentRankCard
                          polarity="neg"
                          polarityPerc={filteredmodel.feature_pol}
                          label={capitalizePhoneModels(filteredmodel.feature)}
                          description={"Worst feature of the selected smart phone"+filteredmodel.model}
                        ></SentimentRankCard>
                          
                        ))}
                        </div>
                    <div className="analytics-container cards-grid -mt-40" >
                       {features.map((feature,i) => (
                           
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

export default Pssa3Results;
