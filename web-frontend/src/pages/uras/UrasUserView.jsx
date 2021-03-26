import React, { useState,useEffect } from 'react';
import FancyHeading from '../../components/text/FancyHeading';
import search from '../../assests/Search.png';
import Button from '../../components/buttons/Button';
import UrasFeaturesInput from './UrasFeaturesInput';
import {analyseFeatures} from '../../services/uras-service';
import { NavLink, useHistory } from 'react-router-dom';
import { ToastProvider, useToasts } from 'react-toast-notifications';



function UrasUserView() {

//     let analyseButton=false;
//     const [urasData, setUrasData] = [];
//     const [selectedFeatures, setSelectedFeatures] = [];
//     const { addToast } = useToasts();
//     const history = useHistory();
//     const [passwordError, setPasswordError] = useState(false);


//     const getRequestedData = () =>{
        
        

//             const httpRequest = analyseFeatures();
//             analyseButton=false;
          
//           httpRequest.then((response) =>  setUrasData=response.data,
         
//             console.log("btn",analyseButton),
//             console.log("22",urasData)

//           );
          
       

          

//         // then((response) => {
//         //     setUrasData(response.data),
//         //     setAnalyseButton(true),
//         //     console.log("btn",analyseButton),
//         //     addToast('Invalid username/password, please try again ', {
//         //         appearance: 'error',
//         //         id: 'login-error',
//         //       });
            
//         // })
//         // .catch(error =>{
//         //     if(error){
                    
//         //     }
//         // })

//     };


//     return (
//         <div style={{ margin: '10% 10%' }}>

                
//                 <div className="-mb-40">
//                     <FancyHeading heading="SELECT FEATURES TO ANALYSE" />
//                 </div>

//                 <div>
//                     <UrasFeaturesInput  />
//                 </div>
             
//                 <div className="-flex -flex-center -flex-middle -mt-40">
//                     <Button onClick={() =>getRequestedData()} iconSrc={search}  loading={analtrueyseButton}>
//                         Start Analysing
//                     </Button>    
//                 </div>   
//             </div>
//     )
// }

// function test() {
//     return 

}

export default UrasUserView;
