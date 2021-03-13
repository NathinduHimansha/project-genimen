import React from 'react'
import logo from '../../assests/geniman_logo_new.png'
import search from '../../assests/Search.png'
import './exkey.css'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Exkey extends React.Component {
    anaylyzeAgain(){
        alert("You clicked me");

    }
      render() {
        return (
            <div className="main-container">

                <div className="header">
                    <div className="header-left-split">
                        <img src={logo} className="logo" alt="logo" />
                    </div>
                    <div className="header-right-split">

                        <Navbar variant="light">
                            <Nav className="navElements">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about" style={{ marginLeft: '170px' }}>About</Nav.Link>
                                <Nav.Link href="#developers" style={{ marginLeft: '40%' }}>Developers</Nav.Link>
                                <Nav.Link href="#help" style={{ marginLeft: '38%' }}>Help</Nav.Link>
                            </Nav>

                        </Navbar>


                    </div>
                </div>

                <div className="body">
                <p className="keyword_topic"><b>LOOK WHAT PEOPLE ARE TALKING OF PHONES...</b></p>

                    <div className="body-left-split">
                        <div className="card-left">
                            <p className="topic-frequency-distribution-bargraph">FREQUENCY OF KEYWORDS</p>
                            
                            {/* <img src={iphone} className="iphone" alt="phone category" /> */}
                            <div className="bar">
                                <div className="barHighlight_1">
                                <h4 className="barchartKeyword">Gorilla Screen</h4>
                                <div className="progress-percentage_1" style={{ height: "55%", backgroundColor: "#96DDE7" }}>
                                    <h6>55%</h6>
                                </div>
                                </div>
                                <div className="barHighlight_2">
                                <h4 className="barchartKeyword">108 Mp Camera</h4>
                                <div className="progress-percentage_2" style={{ height: "45%", backgroundColor: "#96DDE7" }}>
                                     <h6>45%</h6>
                                    </div>
                                </div>
                                <div className="barHighlight_3">
                                <h4 className="barchartKeyword">Snap Dragon Chip</h4>
                                <div className="progress-percentage_3" style={{ height: "25%", backgroundColor: "#96DDE7" }}>
                                    <h6>25%</h6>
                                    </div>
                                </div>
                                <div className="barHighlight_4">
                                <h4 className="barchartKeyword">Glastic Black</h4>         
                                <div className="progress-percentage_4" style={{ height: "30%", backgroundColor: "#96DDE7" }}>
                                    <h6>30%</h6>
                                    </div>
                                </div>
                                <div className="barHighlight_5">
                                <h4 className="barchartKeyword">8GB Ram</h4>     
                                <div className="progress-percentage_5" style={{ height: "90%", backgroundColor: "#96DDE7" }}>
                                    <h6>90%</h6>
                                    </div>
                                </div>
                                <div className="barHighlight_6">
                                <h4 className="barchartKeyword">Wonderful</h4>    
                                <div className="progress-percentage_6" style={{ height: "73%", backgroundColor: "#96DDE7" }}>
                                    <h6>73%</h6>
                                    </div>
                                </div>
                                <div className="barHighlight_7">
                                <h4 className="barchartKeyword">LCD Display</h4>       
                                <div className="progress-percentage_7" style={{ height: "100%", backgroundColor: "#96DDE7" }}>
                                    <h6>100%</h6>
                                    </div>
                                </div>
                                <div className="barHighlight_8">
                                <h4 className="barchartKeyword">Budget</h4>       
                                <div className="progress-percentage_8" style={{ height: "20%", backgroundColor: "#96DDE7" }}>
                                    <h6>20%</h6>
                                    </div>
                                </div>
                                <div className="barHighlight_9">
                                <h4 className="barchartKeyword">Facial Recognition</h4>        
                                <div className="progress-percentage_9" style={{ height: "19%", backgroundColor: "#96DDE7" }}>
                                    <h6>19%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="body-right-split">

                      <div className="card-right">
                          <p className="vectorizer-plot-topic">VECTORIZE PLOT</p>
                          {/* <div className="bubble-chart">
                            <Bubble_chart data={this.state.rawData} ></Bubble_chart>
                        </div> */}


                        {/* <div className="buttons">
                            <table>
                                <th>
                                    <td><button className="features features_1">Gorilla Screen</button></td>
                                    <td><button className="features features_2">108 Mp Camera</button></td>
                                    <td><button className="features features_3">Snap Dragon Chip</button></td>
                                </th>
                            </table>
                            <table>
                                <th>
                                    <td><button className="features features_4">Glastic Black</button></td>
                                    <td><button className="features features_5">8GB Ram</button></td>
                                    <td><button className="features features_6">Wonderful</button></td>
                                </th>
                            </table>
                            <table>
                                <th>
                                    <td><button className="features features_7">LCD Display</button></td>
                                    <td><button className="features features_8">Budget</button></td>
                                    <td><button className="features features_9">Facial Recognition</button></td>
                                </th>
                            </table>
                        </div> */}
                        <button className="analyze_again" onClick={this.anaylyzeAgain} >Analyze Again<span>.</span><span>.</span><span>.</span> &nbsp;&nbsp;<img src={search} className="search_icon" alt="search_icon" /></button> 

                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Exkey;