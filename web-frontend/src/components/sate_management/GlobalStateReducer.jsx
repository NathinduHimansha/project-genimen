const Reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'TOGGLE_LOGIN':
      return {
        ...state,
        login: !state.login,
      };
    default:
      return state;
  }
};

export default Reducer;
