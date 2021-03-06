const initialState = {
  show: false
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "showUser":
      return { show: !state.show };
    default:
      return state;
  }
}
