import React, { Component } from 'react'
import genimen from '../../assests/Geniman.png';
import './logobanner.css';

export class Logobanner extends Component {
    render() {
        return (
            <div>
                <div className="logobanner-container">
                   
                    <img className="logobanner-logoimg" src={genimen} alt="genimenlogo" />
                    
                    <span className="logobanner-textbox">

                        <div className="logobanner-maintext">
                            <span >Genimen</span>
                        </div>

                        <div className="logobanner-subtext">
                            <span>Predict | Annalyse | Design</span>
                        </div>
                        
                    </span>
                </div>
            </div>     
        )
    }
}

export default Logobanner
