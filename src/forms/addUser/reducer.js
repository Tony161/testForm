const initialState={
  show:false
}

export default function rootReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case 'showUser':
        //console.log(action)
      return { show : !state.show};
    default:
      return state;
  }
}
