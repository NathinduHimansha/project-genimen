import React, {useState, useEffect} from 'react';
import { useLocation, useHistory } from "react-router-dom";

import SentimentResultCard from '../../components/analytics/SentimentResultCard';
import FancyHeading from '../../components/text/FancyHeading';

import './uras.css';


function UrasResults() {
    


    
        const { state } = useLocation();
    console.log("state: ", state) 
    const [selectedFeature,setSelectedFeature] = useState(null)//selected feature to display
   

    const history = useHistory()
  

  const [fetchedData, setFetchedData] = useState([])
  const [viewState, setViewState] = useState(false)

  useEffect(() => {
    const urasData = history.location.state.data
    console.log("data: ", urasData['feature-sentiment-polarity']) 
    setFetchedData(urasData)
    setViewState(true)
      
     
  }, [])

  useEffect(() => {
    viewState ?
    
    
    setSelectedFeature(fetchedData['feature-sentiment-polarity'][0].feature)
   
:null} 
, [viewState])
        
    

    return (
        <div style={{ margin: '10% 10%' }}>
            { viewState ? 
            <div>
                 <div className="-mb-30">
                    <FancyHeading heading="SELECT OPTION TO VIEW" />
                </div>

         
                 <div className="-mb-35 -mt-80">
                    <label htmlFor="select-feature" className="select-label">
                        <span className="t1 color-grey">Currently Showing: </span>
                    </label>

                    {/* feature select view */}
                    <select defaultValue="select-feature" value={selectedFeature} onChange={(event) => setSelectedFeature(event.target.value) }  
                        className="select large heading4 -regular -flex-right" id="select-feautre">
                    
                        {fetchedData['feature-sentiment-polarity'].map((response, index) => 
                            (<option key={index} value={response.feature}>{response.feature}</option> ))} 
                    </select>  
                </div>
                


                {/* main results card */}
                 <div className="analytics-container -mt-60 -flex -flex-center -flex-middle  ">
                    {fetchedData['feature-sentiment-polarity'].map((response, index) => 
                        (response.feature==selectedFeature ?
                            (<div key={index} className="analytics-container cards-grid -mt-60">
                                <SentimentResultCard
                                    heading="Total Results"
                                    reviewCount={100}
                                    reviewCountLable="Total Reviews Analysed"
                                    polarity={Math.round(response.polarity)}
                                    negPerc={Math.round(response.neg)}
                                    posPerc={Math.round(response.pos)} 
                                />
                            </div>)
                        :null))}
                </div> 
                


                {/* results per phone */}
                 <h3 className= {'heading3 -medium -mt-70'}>
                        Analysis per Phone
                </h3>

                <div className="analytics-container cards-grid -mt-10   ">
                    {fetchedData['phone-feature-polarity'].map((response, index) => 
                        (response.feature===selectedFeature ?
                            (<div key={index} className="analytics-container cards-grid -mt-60">
                                <SentimentResultCard
                                    heading={response.phone}
                                    headingIcon="var(--phone-icon)"
                                    polarity={Math.round(response.polarity)}
                                    negPerc={Math.round(response.neg)}
                                    posPerc={Math.round(response.pos)}
                                 />
                            </div>)
                        :null)
                    )}
                </div>  
                </div>
            :null}
                
        </div>
    )
}

export default UrasResults