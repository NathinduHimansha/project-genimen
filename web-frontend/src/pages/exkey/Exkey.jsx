import React from 'react'
import logo from '../../assests/geniman_logo_new.png'
import search from '../../assests/Search.png'
import './exkey.css'
import Bargraph from '../../components/graphs/BarGraph'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import WordCloud from '../../components/graphs/WordCloud'


class Exkey extends React.Component {
    anaylyzeAgain(){
        ('bar').toggleClass('start-load');

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
                <Bargraph></Bargraph>
{/* 
                    <div className="body-left-split">
                        <div className="card-left">
                            <p className="topic-frequency-distribution-bargraph">FREQUENCY OF KEYWORDS</p>
                            
                            <div className="bar">
                                <div className="barHighlight_1">
                                <span className="barchartKeyword">Gorilla Screen</span>
                                <div className="progress-percentage_1" style={{ height: "55%", backgroundColor: "#96DDE7" }}>
                                    <span className="frequency_percentage">55%</span>
                                </div>
                                </div>
                                <div className="barHighlight_2">
                                <span className="barchartKeyword">108 Mp Camera</span>
                                <div className="progress-percentage_2" style={{ height: "45%", backgroundColor: "#96DDE7" }}>
                                     <span className="frequency_percentage">45%</span>
                                    </div>
                                </div>
                                <div className="barHighlight_3">
                                <span className="barchartKeyword">Snap Dragon Chip</span>
                                <div className="progress-percentage_3" style={{ height: "25%", backgroundColor: "#96DDE7" }}>
                                    <span className="frequency_percentage">25%</span>
                                    </div>
                                </div>
                                <div className="barHighlight_4">
                                <span className="barchartKeyword">Glastic Black</span>         
                                <div className="progress-percentage_4" style={{ height: "30%", backgroundColor: "#96DDE7" }}>
                                    <span className="frequency_percentage">30%</span>
                                    </div>
                                </div>
                                <div className="barHighlight_5">
                                <span className="barchartKeyword">8GB Ram</span>     
                                <div className="progress-percentage_5" style={{ height: "90%", backgroundColor: "#96DDE7" }}>
                                    <span className="frequency_percentage">90%</span>
                                    </div>
                                </div>
                                <div className="barHighlight_6">
                                <span className="barchartKeyword">Wonderful</span>    
                                <div className="progress-percentage_6" style={{ height: "73%", backgroundColor: "#96DDE7" }}>
                                    <span className="frequency_percentage">73%</span>
                                    </div>
                                </div>
                                <div className="barHighlight_7">
                                <span className="barchartKeyword">LCD Display</span>       
                                <div className="progress-percentage_7" style={{ height: "100%", backgroundColor: "#96DDE7" }}>
                                    <span className="frequency_percentage">100%</span>
                                    </div>
                                </div>
                                <div className="barHighlight_8">
                                <span className="barchartKeyword">Budget</span>       
                                <div className="progress-percentage_8" style={{ height: "20%", backgroundColor: "#96DDE7" }}>
                                    <span className="frequency_percentage">20%</span>
                                    </div>
                                </div>
                                <div className="barHighlight_9">
                                <span className="barchartKeyword">Facial Recognition</span>        
                                <div className="progress-percentage_9" style={{ height: "19%", backgroundColor: "#96DDE7" }}>
                                    <span className="frequency_percentage">19%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    
                    <div className="body-right-split">

                      <div className="card-right">
                          <p className="vectorizer-plot-topic">VECTORIZE PLOT</p>
                          {/* <WordCloud></WordCloud> */}
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