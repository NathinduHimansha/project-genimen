import React, { useEffect, useState, useContext } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router';
import { isLoggedIn } from '../../common/utils';
import { Context } from '../../components/sate_management/GlobalStore';
import Login from '../login/Login';

function fromPraentOnly(Component) {
  return (props) => {
    const parents = useLocation().pathname.substr(1).split('/');
    const parentRoute = `/${parents.slice(0, -1).join('/')}`;
    console.log(parentRoute);
    const history = useHistory();
    if (history.location.state) {
      return <Component />;
    } else {
      return <Redirect to={`${parentRoute}`} />;
    }
  };
}

export default fromPraentOnly;
