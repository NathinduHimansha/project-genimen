import React, { createContext, useReducer } from 'react';
import Reducer from './GlobalStateReducer';
import propic from '../../assests/ProfilePic.png';

const initialState = {
  login: false,
  dark: false,
  username: 'bmora1948pixels3',
  defaultUserPic: propic,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export const Context = createContext(initialState);
export default Store;
