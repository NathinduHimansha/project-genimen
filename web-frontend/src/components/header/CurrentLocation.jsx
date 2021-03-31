import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const CurrentLocation = () => {
  // const paths = useLocation().pathname.substr(1).split('/');
  const paths = ['analytics', 'uras'];
  console.log(paths);
  return (
    <>
      <div className="header-current-location">
        {paths.map((path, i) => {
          return (
            <NavLink
              to={`/${paths.slice(0, i + 1).join('/')}`}
              className="header-current-location-link"
            >
              {i == 0 ? <span className="">{path}</span> : <span className="">{path}</span>}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};
export default CurrentLocation;
