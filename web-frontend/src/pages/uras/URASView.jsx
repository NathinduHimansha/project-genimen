import React, { Component } from 'react';
import FancyHeading from '../../components/text/FancyHeading';
import SampleFeatureSelection from '../experiment/SampleFeatureSelection';
import search from '../../assests/Search.png';
import Button from '../../components/buttons/Button';
import {analyseFeatures} from '../../services/uras-service';

import './uras.css';


class URASView extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             loading:false,
             data :[]
        }
    }

    loadResults = ()=>{
        this.setState({
            loading:true 
        }),

        //http request handling
        analyseFeatures().then((response) => 
            {this.setState({data:response.data}),
                this.setState({loading:false }),
                this.routePage()})
            .catch()
    }


    routePage =()=>{
        this.props.history.push({
            pathname:"/urasresult",
            state:this.state.data 
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
                
                    <Button onClick={()=>this.loadResults()} iconSrc={search} loading={this.state.loading}>
                        Start Analysing
                    </Button>    
                </div>   
            </div>
        )
    }              
}

export default URASView
