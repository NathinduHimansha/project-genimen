import React, { Component } from 'react'
import SentimentResultCard from '../../components/analytics/SentimentResultCard';
import FancyHeading from '../../components/text/FancyHeading';
import './uras.css';


export class UrasResults extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedFeature:null,
            headingState:"-hidden",
        }
    }

    //set the user selected feature and heading state
    setSelectedFeature =event =>{
        this.setState({
            selectedFeature:event.target.value,
            headingState:""
        })
    }

    

    render() {
        //catches the data received from uras comp
        const data = this.props.location.state
    
        return (

            <div style={{ margin: '10% 10%' }}>
                <div className="-mb-30">
                    <FancyHeading heading="SELECT OPTION TO VIEW" />
                </div>

                {/* feature select view */}
                <div className="-mb-35 -mt-80">
                    <label htmlFor="select-feature" className="select-label">
                        <span className="t1 color-grey">Show: </span>
                    </label>

                    <select defaultValue="select-feature"value={this.state.value} onChange={this.setSelectedFeature}  
                    className="dark phone-selector select heading4 -regular -full-width  select" id="select-feautre">
                        <option>Select-Feature</option> 
                        {data['feature-sentiment-polarity'].map((response, index) => 
                        (<option value={response.feature}>{response.feature}</option> ))} 
                    </select>  
                </div>


                {/* main results card */}
                <div className="analytics-container -mt-60 -flex -flex-center -flex-middle  ">
                    {data['feature-sentiment-polarity'].map((response, index) => 
                        (response.feature==this.state.selectedFeature ?
                            (<div className="analytics-container cards-grid -mt-60">
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
                <div className="analytics-container cards-grid -mt-40   ">
                    <h3 className= {`${this.state.headingState} heading3 -medium -no-margin `} style={{ fontSize: '2.2rem' }}>
                        Analysis per Phone
                    </h3>

                    <hr className="heading-sep" />

                    {data['phone-feature-polarity'].map((response, index) => 
                        (response.feature===this.state.selectedFeature ?
                            (<div className="analytics-container cards-grid -mt-60">
                                <SentimentResultCard
                                    heading={response.phone}
                                    headingIcon="var(--phone-icon)"
                                    polarity={Math.round(response.polarity)}
                                    negPerc={Math.round(response.neg)}
                                    posPerc={Math.round(response.pos)}
                                 />
                            </div>)
                        :null))}
                </div>
            </div>
        )
    }
}

export default UrasResults
