import React, { Component } from 'react'
import SentimentResultCard from '../../components/analytics/SentimentResultCard';
import FancyHeading from '../../components/text/FancyHeading';

import './uras.css';


class UrasResults extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedFeature:null, //selected feature to display
        }
    }

    //set the user selected feature and heading state
    getSelectedFeature =event =>{
        this.setState({
            selectedFeature:event.target.value,
        })
    }

    //sets the first view
    componentDidMount(){
        const data = this.props.location.state;

        {data['feature-sentiment-polarity'].length?
            this.setState({
                selectedFeature:data['feature-sentiment-polarity'][0].feature
            })
        :null} 
    }

    
    render() {
        //catches the data received from UrasView comp
        const data = this.props.location.state
    
        return (

            <div style={{ margin: '10% 10%' }}>
                <div className="-mb-30">
                    <FancyHeading heading="SELECT OPTION TO VIEW" />
                </div>

                {/* feature select view */}
                <div className="-mb-35 -mt-80">
                    <label htmlFor="select-feature" className="select-label">
                        <span className="t1 color-grey">Currently Showing: </span>
                    </label>


                    <select defaultValue="select-feature" value={this.state.value} onChange={this.getSelectedFeature}  
                        className="select large heading4 -regular -flex-right" id="select-feautre">
                    
                        {data['feature-sentiment-polarity'].map((response, index) => 
                            (<option key={index} value={response.feature}>{response.feature}</option> ))} 
                    </select>  
                </div>


                {/* main results card */}
                <div className="analytics-container -mt-60 -flex -flex-center -flex-middle  ">
                    {data['feature-sentiment-polarity'].map((response, index) => 
                        (response.feature==this.state.selectedFeature ?
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
                    {data['phone-feature-polarity'].map((response, index) => 
                        (response.feature===this.state.selectedFeature ?
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
        )
    }
}

export default UrasResults
