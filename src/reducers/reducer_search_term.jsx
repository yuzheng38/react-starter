const initialState = null;

export default (state=initialState, action) => {
  switch(action.type) {
    case "TRACK_SEARCH_TERM":
      console.log(state);
      return action.payload;    // never mutate state. NOT state = action.payload
    default:
      return state;
  }
}
