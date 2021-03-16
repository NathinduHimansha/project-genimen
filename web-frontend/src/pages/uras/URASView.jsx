import React, { Component } from 'react';
import FancyHeading from '../../components/text/FancyHeading';
import SampleFeatureSelection from '../experiment/SampleFeatureSelection';
import search from '../../assests/Search.png';
import './uras.css';
import SentimentResultCard from '../../components/analytics/SentimentResultCard';
import {Link} from 'react-router-dom';

class URASView extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             loading:false
        }
    }

    loadResuluts(){
        this.setState({
            loading:true
        })
    }

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
                
                    <Link to={"urasresult/"}>
                        <button onAction={()=>this.loadResuluts()} className="btn primary-btn icon-btn ">
                            {this.state.loading==true ?
                                <React.Fragment>
                                    <img className="left -hidden" src={search} style={{ width: '20px' }} />
                                    <div className="spinner spinner-small"></div>
                                </React.Fragment>:
                                <span className="-bold ">Start Analysing</span> }
                        </button>
                    </Link>
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
