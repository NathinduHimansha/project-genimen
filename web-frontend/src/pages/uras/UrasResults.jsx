import React, { Component } from 'react'
import SentimentResultCard from '../../components/analytics/SentimentResultCard';

export class UrasResults extends Component {
    render() {
        return (
            <div>
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

export default UrasResults
