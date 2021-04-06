import React, { useEffect } from 'react';
import FancyHeading from '../../components/text/FancyHeading';
import SentimentResultCard from '../../components/analytics/SentimentResultCard';
import {analyseFeatures} from '../../services/uras-service';

{/*const Examples2 = () => {

  return (
    <div  style={{ margin: '10% 10%' }}>
      <div className="-mb-40">
        <FancyHeading heading="SELECT MOBILE PHONE TO ANALYSE"></FancyHeading>
      </div>
     
     
      <div style={{ position: 'absolute', left: '1000px', top: '380px', opacity: '0.8' }}>
        <img src={brandsm} style={{ width: '400px' }} />
      </div>
      <div style={{ marginTop: '20px', marginBottom: '20px', width: '80%', maxWidth: '700px' }}>
       { <SampleFeatureSelection2></SampleFeatureSelection2>}
        <div style={{overflow:'auto'}}>
        <Sidebar/>
        </div>
        <div className="-flex -mt-40">
          <div className="-flex-right">
            <Button iconSrc={search} loading={false}>
              Start Analysing
            </Button>
          </div>
        </div>
      </div>

      <div className="-mb-40 -mt-90">
        <FancyHeading heading="FEATURE ANALYSIS OF MOBILE"></FancyHeading>
      </div>

      <div className="-mt-60">
        <h3 className="heading3 -medium -no-margin" style={{ fontSize: '2.2rem' }}>
          MOBILE PHONE NAME
        </h3>
        <hr className="heading-sep" />

        <div className="analytics-container cards-grid -mt-40">
          <SentimentResultCard
            heading="DISPLAY"
            headingIcon="var(--phone-icon)"
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
          <SentimentResultCard
            heading="CAMERA"
            headingIcon="var(--phone-icon)"
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
           <SentimentResultCard
            heading="BATTERY"
            headingIcon="var(--phone-icon)"
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
           <SentimentResultCard
            heading="FACE RECOGNIZATION"
            headingIcon="var(--phone-icon)"
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
           <SentimentResultCard
            heading="FINGERPRINT"
            headingIcon="var(--phone-icon)"
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
           <SentimentResultCard
            heading="SPEAKERS"
            headingIcon="var(--phone-icon)"
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Examples2;
*/}

import { Component } from 'react'

export default class PssaResults extends Component {
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
        pathname:"/PssaResults",
        state:this.state.data 
    })
}
componentDidMount() {
    console.log("passed object: ", this.props.location.state)
}
  render() {
    return (
     <>
     <div  style={{ margin: '3% 10%' }}>
      <div className="-mb-40 -mt-90">
        <FancyHeading heading="FEATURE ANALYSIS OF MOBILE"></FancyHeading>
      </div>

      <div className="-mt-60">
        <h3 className="heading3 -medium -no-margin" style={{ fontSize: '2.2rem' }}>
          MOBILE PHONE NAME
        </h3>
        <hr className="heading-sep" />

        <div className="analytics-container cards-grid -mt-40">
          <SentimentResultCard
            heading="DISPLAY"
            headingIcon="var(--phone-icon)"
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
          <SentimentResultCard
            heading="CAMERA"
            headingIcon="var(--phone-icon)"
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
           <SentimentResultCard
            heading="BATTERY"
            headingIcon="var(--phone-icon)"
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
           <SentimentResultCard
            heading="FACE RECOGNIZATION"
            headingIcon="var(--phone-icon)"
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
           <SentimentResultCard
            heading="FINGERPRINT"
            headingIcon="var(--phone-icon)"
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
           <SentimentResultCard
            heading="SPEAKERS"
            headingIcon="var(--phone-icon)"
            reviewCount={300}
            reviewCountLable="Reviews Analysed"
            polarity={84}
            negPerc={44}
            posPerc={40}
          />
        </div>
      </div>
      </div>
 </> 
    )
  }
}