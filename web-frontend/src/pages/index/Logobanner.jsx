import React, { Component } from 'react'
import genimen from '../../assests/Geniman.png';
import './logobanner.css';

export class Logobanner extends Component {
    render() {
        return (
            <div>
                <div class="logobanner-container">
                   
                    <img class="logobanner-logoimg" src={genimen} alt="genimenlogo" />
                    
                    <span class="logobanner-textbox">

                        <div class="logobanner-maintext">
                            <span >Genimen</span>
                        </div>

                        <div class="logobanner-subtext">
                            <span>Predict | Annalyse | Design</span>
                        </div>
                        
                    </span>
                </div>
            </div>     
        )
    }
}

export default Logobanner
