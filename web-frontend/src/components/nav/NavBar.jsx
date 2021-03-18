import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './nav.css';
import about from '../../assests/AboutLight.png';
import search from '../../assests/Search.png';
import home from '../../assests/HomeWhite.png';
import hamIcon from '../../assests/HamburgerLight.png';
import cross from '../../assests/CroseLight.png';
import logo from '../../assests/Geniman.png';
import downArrow from '../../assests/DropDownArrow.png';
import rightArraw from '../../assests/DropDownRightArrow.png';

const NavBar = (props) => {
  let path = useLocation().pathname;
  const routes = [
    {
      title: 'Home',
      icon: home,
      subMenu: [],
      path: '/examples',
    },
    {
      title: 'Analytics',
      icon: search,
      subMenu: [
        { title: 'Feature Sentiments', path: '/analytics/uras' },
        { title: 'Product Feature Sentiments', path: '/analytics/pssa' },
        { title: 'TRENDZ', path: '/analytics/pfs' },
      ],
      path: '/analytics',
    },
    {
      title: 'About',
      icon: about,
      subMenu: [],
      path: '/about',
    },
  ];
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} />
        <span className="logo-name">genimen</span>
      </div>
      <div className="hamburger">
        <div className="hamburger-icon">
          <img src={hamIcon} className="menu-icon" />
          <img src={cross} className="close-icon" />
        </div>
        <span className="link-text hamburger-lbl">Menu</span>
      </div>
      <ul className="navbar-nav">
        {routes.map((route, i) => (
          <li key={'route' + i} className="nav-item parent-link">
            {/* <a href="#" className={`nav-link ${route.active ? 'nav-link-active' : ''}`}> */}
            {/* <NavLink to = '/' activeClassName="active-link"> */}
            {console.log(route.subMenu.length)}
            <NavLink
              exact
              // to={route.subMenu.length ? route.path : '#'}
              to={route.subMenu.length ? path : route.path}
              activeClassName="nav-link-active"
              className="nav-link"
              isActive={(match, location) => {
                console.log(route.path);
                if (location.pathname.includes(route.path)) {
                  return true;
                }
                return false;
              }}
            >
              <div className="nav-icon">
                <img src={route.icon} />
              </div>
              <span className="link-text">{route.title}</span>
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
                    <span className="sub-link-text">{menu.title}</span>
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
    </nav>
  );
};

export default NavBar;
