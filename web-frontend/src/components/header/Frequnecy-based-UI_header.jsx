import React from 'react';
import logo from '../../assests/geniman_logo_new.png';
import './header.css';

class Frequency_based_UI_header extends React.Component {
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
                <Nav.Link href="#about" style={{ marginLeft: '170px' }}>
                  About
                </Nav.Link>
                <Nav.Link href="#developers" style={{ marginLeft: '40%' }}>
                  Developers
                </Nav.Link>
                <Nav.Link href="#help" style={{ marginLeft: '38%' }}>
                  Help
                </Nav.Link>
              </Nav>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

export default Frequency_based_UI_header;

