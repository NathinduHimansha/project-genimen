/*import React from 'react';
import logo2 from './images/logo2.png';
import apple from './images/apple.png';
import samsung from './images/samsung.png';
import huw from './images/huw.png';
import asus from './images/asus.png';
import google from './images/google.png';
import htc from './images/htc.png';
import one from './images/one.png';
import nokia from './images/nokia.png';
import mi from './images/mi.png';
import moto from './images/moto.png';
import real from './images/real.png';
import lg from './images/lg.png';
import sony from './images/sony.png';
import zte from './images/zte.png';
import './App.css';
import {Link} from 'react-router-dom'



function Home(){
   const imagess=['./images/asus.png','./images/apple.png'];
    return(
        <div className="App">

      <header className="App-header">
        <img src={logo2} className="App-logo2" alt="logo" />
        
      </header>

      <div className="App-content">
      <p className="App-p2">
          Select smartphone brand you wish
        </p>  
        <Link to="/Products/apple"> <img src={apple} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products/samsung"> <img src={samsung} className="mobile-logo" alt="mlogo" /></Link>
        
        <Link to="/Products"><img src={huw} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={asus} className="mobile-logo" alt="mlogo" /></Link>
        <br></br>
        <Link to="/Products">  <img src={google} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={htc} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={one} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={nokia} className="mobile-logo" alt="mlogo" /></Link>
        <br></br>
        <Link to="/Products">  <img src={mi} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={moto} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={real} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={lg} className="mobile-logo" alt="mlogo" /></Link>
        <br></br>
        <Link to="/Products">  <img src={sony} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={zte} className="mobile-logo" alt="mlogo" /></Link>
      </div>
      
        </div>
    )
}

export default Home;
*/

import React, { Component } from 'react'
import logo2 from './images/logo2.png';
import apple from './images/apple.png';
import samsung from './images/samsung.png';
import huw from './images/huw.png';
import asus from './images/asus.png';
import google from './images/google.png';
import htc from './images/htc.png';
import one from './images/one.png';
import nokia from './images/nokia.png';
import mi from './images/mi.png';
import moto from './images/moto.png';
import real from './images/real.png';
import lg from './images/lg.png';
import sony from './images/sony.png';
import zte from './images/zte.png';
import './App.css';
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="App">

      <header className="App-header">
        <img src={logo2} className="App-logo2" alt="logo" />
        
      </header>

      <div className="App-content">
      <p className="App-p2">
          Select smartphone brand you wish
        </p>  
        <Link to="/Products/apple"> <img src={apple} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products/samsung"> <img src={samsung} className="mobile-logo" alt="mlogo" /></Link>
        
        <Link to="/Products"><img src={huw} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={asus} className="mobile-logo" alt="mlogo" /></Link>
        <br></br>
        <Link to="/Products">  <img src={google} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={htc} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={one} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={nokia} className="mobile-logo" alt="mlogo" /></Link>
        <br></br>
        <Link to="/Products">  <img src={mi} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={moto} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={real} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={lg} className="mobile-logo" alt="mlogo" /></Link>
        <br></br>
        <Link to="/Products">  <img src={sony} className="mobile-logo" alt="mlogo" /></Link>
        <Link to="/Products">  <img src={zte} className="mobile-logo" alt="mlogo" /></Link>
      </div>
      
        </div>
    )
  }
}
