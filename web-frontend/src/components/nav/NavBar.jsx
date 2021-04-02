import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import './nav.css';
import about from '../../assests/AboutLight.png';
import search from '../../assests/Search.png';
import home from '../../assests/HomeWhite.png';
import hamIcon from '../../assests/HamburgerLight.png';
import cross from '../../assests/CroseLight.png';
import logo from '../../assests/Geniman.png';
import downArrow from '../../assests/DropDownArrow.png';
import rightArraw from '../../assests/DropDownRightArrow.png';
import Button from '../buttons/Button';

const NavBar = (props) => {
  const history = useHistory();
  const { routes } = props;
  let path = useLocation().pathname;
  const imageClick = () => {
    history.push({ pathname: '/index' });
  };
  const parentLinkClicks = routes.map((route) => {
    const [click, setClick] = useState(false);
    return { click, setClick };
  });

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="nav-logo-wrapper" onClick={() => imageClick()}>
          <img src={logo} />
        </div>
        <span className="logo-name">genimen</span>
      </div>
      <div className="hamburger">
        <div className="hamburger-icon">
          <img src={hamIcon} className="menu-icon" />
          <img src={cross} className="close-icon" />
        </div>
        <span className="hamburger-lbl">MENU</span>
      </div>
      <ul className="navbar-nav">
        {routes.map((route, i) => (
          <li
            key={'route' + i}
            className={`nav-item ${route.subMenu.length > 0 ? 'parent-link' : ''} ${
              parentLinkClicks[i].click ? 'parent-link-clicked' : ''
            }`}
            onClick={() => {
              parentLinkClicks[i].setClick(!parentLinkClicks[i].click);
            }}
          >
            {/* <a href="#" className={`nav-link ${route.active ? 'nav-link-active' : ''}`}> */}
            {/* <NavLink to = '/' activeClassName="active-link"> */}
            <NavLink
              exact
              // to={route.subMenu.length ? route.path : '#'}
              to={route.subMenu.length ? path : route.path}
              activeClassName="nav-link-active"
              className="nav-link"
              isActive={(match, location) => {
                if (location.pathname.includes(route.path)) {
                  return true;
                }
                return false;
              }}
            >
              <div className="nav-icon">
                <img src={route.icon} />
              </div>
              <span className="link-text menu-title">{route.title}</span>
            </NavLink>
            {/* </a> */}
            {route.subMenu.length ? (
              <div className="nav-link-icon">
                <img src={downArrow} className="dropdown-arrow" />
              </div>
            ) : (
              ''
            )}
            <ul className={route.subMenu.length ? 'navbar-sub-nav' : '-display-none'}>
              {route.subMenu.map((menu, i) => (
                <NavLink
                  exact
                  to={menu.path}
                  key={'submenu' + i}
                  className="sub-nav-link"
                  activeClassName="sub-nav-link-active"
                >
                  <li key={'submenu' + i} className="nav-sub-item">
                    <span className="sub-link-text menu-title">{menu.title}</span>
                    <div className="sub-nav-link-icon">
                      <img src={rightArraw} className="dropright-arrow" />
                    </div>
                  </li>
                </NavLink>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {props.children}
    </nav>
  );
};

export default NavBar;
