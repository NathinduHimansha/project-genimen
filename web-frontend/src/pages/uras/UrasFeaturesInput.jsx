import React, { Component} from 'react';
import {getFeatures} from '../../services/uras-service';
import IconHeading from '../../components/text/IconHeading';

class UrasFeaturesInput extends Component {

  constructor(props) {
      super(props)
      this.state = {
          featureTypes:[],
          selectedFeatures:{}
      }
  }

  //passing selected data to parent component(Uras Result)
  addSelectedFeatures = (feature,event) => {
    this.props.parentCallback(feature,event.target.value);
    event.preventDefault();
  }

  //assigning the icon url
  getIconUrl = (feature) => {
    return 'var(--'+feature.toLowerCase()+'-icon)';;
  }

  //http request handling
  componentDidMount(){
      getFeatures().then(response => {
        this.setState({featureTypes:response})
      })
      .catch(error => {
        console.log("ERROR LOGGED IN UrasFeaturesInput componentDidMount: ", error)  
      })
  }


  render() {
    const {featureTypes} = this.state

    return (
      <div className=" -ml-70 feature-types feature-types-selection-menu -flex -flex-col -flex-center">

        {featureTypes.map((featureSet, index) => (
          <div key={index} className="-flex -mb-20">

            <IconHeading size="small"  iconUrl={this.getIconUrl(featureSet.feature)}>
              <label htmlFor="select-feature-type-display" className="select-label">
                <h2 className="heading3 -medium -no-margin feature-type-heading">
                  {featureSet.feature}
                </h2>
              </label>
            </IconHeading>

            <select
              defaultValue="select-feature"
              className="select large heading4 -regular -flex-right"
              id="select-feautre-type-display"
              onChange={(event) => this.addSelectedFeatures(featureSet.feature, event)}>

                <option value="select-feature" disabled>
                  Select Type
                </option>

                {featureSet.types.map((type, index) => (
                  <option key={index} value={type} feature={featureSet.feature} >
                    {type}
                  </option>
              ))}
            </select>
          </div>
        ))}
    </div>
    )
  }
}

export default UrasFeaturesInput
