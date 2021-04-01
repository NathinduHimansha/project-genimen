import React, {useState,useEffect} from 'react'
import {analyseFeatures} from '../../services/uras-service';
import FancyHeading from '../../components/text/FancyHeading';
import search from '../../assests/Search.png';
import Button from '../../components/buttons/Button';
import UrasFeaturesInput from './UrasFeaturesInput';
import { NavLink, useHistory } from 'react-router-dom';
import {getFeatures} from '../../services/uras-service';

import IconHeading from '../../components/text/IconHeading';

import { ToastProvider, useToasts } from 'react-toast-notifications';

function UrasUserInputView() {


    const [featues,setFeatues] = useState([])

    const [btnLoadingState, setBtnLoadingState] = useState(false);
    const [urasData, setUrasData] = useState([]);
    const [selectedFeatures, setSelectedFeatures] = useState({});
    const [btnViewSate, setBtnViewSate] = useState(true)

    const history = useHistory();
    const { addToast } = useToasts();

    useEffect(()=>{
        getFeatures().then(response => {
            setFeatues(response)
          
          })
          .catch(error => {
            console.log("ERROR LOGGED IN UrasFeaturesInput componentDidMount: ", error)  
          })

    },[])
    


    useEffect(()=>{ 
        console.log("bu: ",urasData)
    },[urasData])

    useEffect(()=>{ 
       selectedFeatures.length?
       setBtnViewSate(false):null

    },[selectedFeatures])

 
    

    const fetchData = () =>{
        setBtnLoadingState(true);
        console.log("btn ", selectedFeatures)

        // analyseFeatures(selectedFeatures)
        analyseFeatures()
        .then(response => {
            setUrasData(response),
            setBtnLoadingState(flase),
            history.push({ 
                pathname: '//urasresult',
                state:response
            })})
    

        .catch(error =>{
            setBtnLoadingState(false),
            addToast('Data Fetching Error..! Please Try again', {
                appearance: 'error',
                id: 'uras-api-error',
            });
                
        })
    }
//     setExampleState({...exampleState,  masterField2: {
//         fieldOne: "c",
//         fieldTwo: {
//            fieldTwoOne: "d",
//            fieldTwoTwo: "e"
//            }
//         },
//    }})


//    setInfoData((prevState) => ({
//     ...prevState,
//     major: {
//       ...prevState.major,
//       name: "Tan Long",
//     },
//     minor: {
//       ...prevState.minor,
//       collegeRegion: "northEast"



//   }));


    

    



    return (
        <div>
            <div className="-mb-40">
                    <FancyHeading heading="SELECT FEATURES TO ANALYSE" />
                </div>

                <div>

                <div className=" -ml-70 feature-types feature-types-selection-menu -flex -flex-col -flex-center">
<form>


        {featues.map((featureSet, index) => (
          <div key={index} className="-flex -mb-20">

            <IconHeading size="small"  >
              <label htmlFor="select-feature-type-display" className="select-label">
                <h2 className="heading3 -medium -no-margin feature-type-heading">
                  {featureSet.feature}
                </h2>
              </label>
            </IconHeading>


            <select
              
              defaultValue="select-feature"
              classNamePrefix="select"
              className="select large heading4 -regular -flex-right"
              id="select-feautre-type-display"
              onChange={(event) => test1(featureSet.feature, event.target.value)}>

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

       
         </form>

    </div>
                    

                    

                    <div className="-flex -flex-center -flex-middle -mt-40">
                        
            
                    <Button onClick={fetchData} iconSrc={search} loading={btnLoadingState} disabled={btnViewSate}>
                        Start Analysing
                    </Button>   

                    
          
                    

                    
                
                </div>
                </div>
            
        </div>
    )
}

export default UrasUserInputView
