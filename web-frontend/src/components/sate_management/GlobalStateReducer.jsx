const Reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGIN':
      return {
        login: !state.login,
      };
    default:
      return state;
  }
};

export default Reducer;
