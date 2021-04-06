const Reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGIN':
      return {
        ...state,
        login: !state.login,
      };
    case 'LOGIN':
      return {
        ...state,
        login: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        login: false,
      };
    case 'TOGGLE_DARK':
      return {
        ...state,
        dark: true,
      };
    case 'TOGGLE_LIGHT':
      return {
        ...state,
        dark: false,
      };
    default:
      return state;
  }
};

export default Reducer;
