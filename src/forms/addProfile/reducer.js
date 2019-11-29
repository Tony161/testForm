const initialState = {
  show: false
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "showProfile":
      return { show: !state.show };
    case "postDataProfile":
      return { dataProfile: state }  
    default:
      return state;
  }
}
