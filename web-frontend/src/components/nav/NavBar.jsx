import React from 'react';
import './nav.css';
import about from '../../assests/AboutLight.png';
import search from '../../assests/Search.png';
import home from '../../assests/HomeWhite.png';
import hamIcon from '../../assests/HamburgerLight.png';
import logo from '../../assests/Geniman.png';
import downArrow from '../../assests/DropDownArrow.png';
import rightArraw from '../../assests/DropDownRightArrow.png';

const NavBar = (props) => {
  const menu = [
    {
      title: 'Home',
      icon: home,
      subMenu: [],
    },
    {
      title: 'Analytics',
      icon: search,
      subMenu: ['Feature Sentiments', 'Product Feature Sentiments', 'TRENDZ'],
    },
    {
      title: 'About',
      icon: about,
      subMenu: [],
    },
  ];
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} />
          <span className="logo-name">genimen</span>
        </div>
        <div className="hamburger">
          <div className="hamburger-icon">
            <img src={hamIcon} />
          </div>
          <span className="link-text hamburger-lbl">Menu</span>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link ">
              <div className="nav-icon">
                <img src={home} />
              </div>
              <span className="link-text">Home</span>
            </a>
          </li>
          <li className="nav-item parent-link">
            <a href="#" className="nav-link nav-link-active">
              <div className="nav-icon">
                <img src={search} />
              </div>
              <span className="link-text">Analytics</span>
              <div className="nav-link-icon">
                <img src={downArrow} className="dropdown-arrow" />
              </div>
            </a>
            <ul className="navbar-sub-nav">
              <li className="nav-sub-item sub-nav-link-active">
                <a href="#" className="sub-nav-link">
                  Feature Sentiments
                </a>
                <div className="sub-nav-link-icon">
                  <img src={rightArraw} className="dropright-arrow" />
                </div>
              </li>
              <li className="nav-sub-item">
                <a href="#" className="sub-nav-link">
                  Product Feature Sentiments
                </a>
                <div className="sub-nav-link-icon">
                  <img src={rightArraw} className="dropright-arrow" />
                </div>
              </li>
              <li className="nav-sub-item">
                <a href="#" className="sub-nav-link">
                  TRENDZ
                </a>
                <div className="sub-nav-link-icon">
                  <img src={rightArraw} className="dropright-arrow" />
                </div>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <div className="nav-icon">
                <img src={about} />
              </div>
              <span className="link-text">About</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
