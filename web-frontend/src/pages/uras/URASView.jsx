import React, { Component } from 'react';
import FancyHeading from '../../components/text/FancyHeading';
import search from '../../assests/Search.png';
import Button from '../../components/buttons/Button';
import UrasFeaturesInput from './UrasFeaturesInput';

import { analyseFeatures } from '../../services/uras-service';
import 'react-toastify/dist/ReactToastify.css';

import './uras.css';
import ReactToast from './ReactToast';

class UrasView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, //button loading state
      data: [], //stores received data from backend
      selectedFeatures: {}, //stores selected features
      toastVisibility: false,
    };
  }

    constructor(props) {
        super(props)
        this.state = {
             loading:false,//button loading state
             data :[], //stores received data from backend
             selectedFeatures:{}, //stores selected features
             toastVisibility:false
        }
    }

    //handles the http request and routes the user
    getRequestedData = (event)=>{
        this.setButtonState(true),
        
        //http request handling
        // analyseFeatures(this.state.selectedFeatures).then((response) => {
        analyseFeatures().then((response) => {
            this.setState({data:response.data}),
            this.setButtonState(false)
            this.routePage()
        })
        .catch(error =>{
            if(error){
                
            }
        })
    }
  
    //change the loading button state
    setButtonState = (state)=>{
        this.setState({
            loading:state 
        })
        .catch((error) => {
          if (error) {
          }
        });
  };

  //change the loading button state
  setButtonState = (state) => {
    this.setState({
      loading: state,
    });
  };

  //route to results page
  routePage = () => {
    this.props.history.push({
      pathname: '/urasresult',
      state: this.state.data,
    });
  };

  //set the selected values from <select>
  setSelectedFeatures = (feature, type) => {
    this.setState((prev) => ({
      selectedFeatures: { ...prev.selectedFeatures, [feature]: type },
    }));
  };

  render() {
    return (
      <div style={{ margin: '10% 10%' }}>
        {this.state.toastVisibility == true ? (
          <ReactToast
            dataFromParent="a"
            type="error"
            message="YAAAAAAAAAAY wadaaaaaaa"
            close={true}
            timeout={5000}
          />
        ) : null}

        <div className="-mb-40">
          <FancyHeading heading="SELECT FEATURES TO ANALYSE" />
        </div>

        <div>
          <UrasFeaturesInput parentCallback={this.setSelectedFeatures} />
        </div>

        <div className="-flex -flex-center -flex-middle -mt-40">
          <Button
            onClick={() => this.getRequestedData(event)}
            iconSrc={search}
            loading={this.state.loading}
          >
            Start Analysing
          </Button>
        </div>
      </div>
    );
  }
}

export default UrasView;
