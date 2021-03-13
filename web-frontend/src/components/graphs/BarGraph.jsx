import React from 'react'
import logo from '../assets/geniman_logo_new.png'
import './header.css'
import { Navbar, Nav } from 'react-bootstrap';

class Bargraph extends React.Component {
   
    render() {
        return (
            <div className="main-container">

                <div className="body">
                    <div className="body-left-split">
                        <div className="card">
                            <h6>FREQUENCY OF KEYWORDS</h6>
                            
                            {/* <img src={iphone} className="iphone" alt="phone category" /> */}
                            <div className="bar">
                                <div className="barHighlight_1">
                                <p1 className="barchartKeyword">Gorilla Screen</p1>
                                <div className="progress-percentage_1" style={{ height: "55%", backgroundColor: "#96DDE7" }}>
                                    <h8>55%</h8>
                                </div>
                                </div>
                                <div className="barHighlight_2">
                                <p1 className="barchartKeyword">108 Mp Camera</p1>
                                <div className="progress-percentage_2" style={{ height: "45%", backgroundColor: "#96DDE7" }}>
                                     <h8>45%</h8>
                                    </div>
                                </div>
                                <div className="barHighlight_3">
                                <p1 className="barchartKeyword">Snap Dragon Chip</p1>
                                <div className="progress-percentage_3" style={{ height: "25%", backgroundColor: "#96DDE7" }}>
                                    <h8>25%</h8>
                                    </div>
                                </div>
                                <div className="barHighlight_4">
                                <p1 className="barchartKeyword">Glastic Black</p1>         
                                <div className="progress-percentage_4" style={{ height: "30%", backgroundColor: "#96DDE7" }}>
                                    <h8>30%</h8>
                                    </div>
                                </div>
                                <div className="barHighlight_5">
                                <p1 className="barchartKeyword">8GB Ram</p1>     
                                <div className="progress-percentage_5" style={{ height: "90%", backgroundColor: "#96DDE7" }}>
                                    <h8>90%</h8>
                                    </div>
                                </div>
                                <div className="barHighlight_6">
                                <p1 className="barchartKeyword">Wonderful</p1>    
                                <div className="progress-percentage_6" style={{ height: "73%", backgroundColor: "#96DDE7" }}>
                                    <h8>73%</h8>
                                    </div>
                                </div>
                                <div className="barHighlight_7">
                                <p1 className="barchartKeyword">LCD Display</p1>       
                                <div className="progress-percentage_7" style={{ height: "100%", backgroundColor: "#96DDE7" }}>
                                    <h8>100%</h8>
                                    </div>
                                </div>
                                <div className="barHighlight_8">
                                <p1 className="barchartKeyword">Budget</p1>       
                                <div className="progress-percentage_8" style={{ height: "20%", backgroundColor: "#96DDE7" }}>
                                    <h8>20%</h8>
                                    </div>
                                </div>
                                <div className="barHighlight_9">
                                <p1 className="barchartKeyword">Facial Recognition</p1>        
                                <div className="progress-percentage_9" style={{ height: "19%", backgroundColor: "#96DDE7" }}>
                                    <h8>19%</h8>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>                

            </div>
            </div>
        );
    }
}

export default Bargraph;