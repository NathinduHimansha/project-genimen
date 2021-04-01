import React, {useState,useEffect} from 'react'
import {analyseFeatures} from '../../services/uras-service';
import FancyHeading from '../../components/text/FancyHeading';
import search from '../../assests/Search.png';
import Button from '../../components/buttons/Button';
import UrasFeaturesInput from './UrasFeaturesInput';
import { NavLink, useHistory } from 'react-router-dom';

import { ToastProvider, useToasts } from 'react-toast-notifications';

function UrasUserView() {

    const [btnLoadingState, setBtnLoadingState] = useState(false);
    const [urasData, setUrasData] = useState([]);
    const [selectedFeatures, setSelectedFeatures] = useState({});
    const [btnViewSate, setBtnViewSate] = useState(true)

    const history = useHistory();
    const { addToast } = useToasts();
    


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

    const test1 = (feature,type) => {

        setSelectedFeatures((prevSelectedFeatures)=>({...prevSelectedFeatures,[feature]: type}))
        console.log(selectedFeatures)

    }
    

    



    return (
        <div>
            <div className="-mb-40">
                    <FancyHeading heading="SELECT FEATURES TO ANALYSE" />
                </div>

                <div>
                    <UrasFeaturesInput parentCallback={test1}  />

                    <div className="-flex -flex-center -flex-middle -mt-40">
            
                    <Button onClick={fetchData} iconSrc={search} loading={btnLoadingState} disabled={btnViewSate}>
                        Start Analysing
                    </Button>   

                    
          
                    

                    
                
                </div>
                </div>
            
        </div>
    )
}

export default UrasUserView
