const initialState = false;
const OpenPlayer = (state = initialState, action) => {
  switch (action.type) {
    case "Open_player":
      return (state = true);
    case "Close_player":
      return (state = false);
    default:
      return state;
  }
};
export default OpenPlayer;
