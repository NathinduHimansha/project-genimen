import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router';
import { isLoggedIn } from '../../common/utils';
import { Context } from '../../components/sate_management/GlobalStore';
import Login from '../login/Login';

function protect(Component) {
  return function ProtectedRouteWrapper(props) {
    const [state, dispatch] = useContext(Context);
    // return <>{state.login ? <Component /> : <Redirect to="/login" />}</>;
    return <>{state.login ? <Component /> : <Login />}</>;
  };
}

export default protect;
