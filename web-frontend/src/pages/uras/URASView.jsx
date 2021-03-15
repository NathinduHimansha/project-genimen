import React, { Component } from 'react';
import FancyHeading from '../../components/text/FancyHeading';
import SampleFeatureSelection from '../experiment/SampleFeatureSelection';
import search from '../../assests/Search.png';
import './uras.css';
import SentimentResultCard from '../../components/analytics/SentimentResultCard';

class URASView extends Component {
    render() {
        return (
            <div style={{ margin: '10% 10%' }}>
                <div className="-mb-40">
                    <FancyHeading heading="SELECT FEATURES TO ANALYSE" />
                </div>
                <div>
                    <SampleFeatureSelection />
                </div>
                <div className="-flex -flex-center -flex-middle -mt-40">
                    <button className="btn primary-btn icon-btn ">
                        <span className="-bold">Start Analysing</span>
                        <img className="left" src={search} style={{ width: '20px' }} />
                    </button>
                 </div>
                 <div className="analytics-container -mt-60 -flex -flex-center -flex-middle  ">
                     
                     <SentimentResultCard
                        heading="Total Results"
                        reviewCount={100}
                        reviewCountLable="Total Reviews Analysed"
                        polarity={-50}
                        negPerc={10}
                        posPerc={90}
                    />
                    
                    
                </div>

                
            </div>
        )
    }      
            
}

export default URASView
