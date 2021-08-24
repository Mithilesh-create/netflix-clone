const initialState = false;
const OpenAndCloseProfile = (state = initialState, action) => {
  switch (action.type) {
    case "Open_prof_tab":
      return (state = true);
    case "Close_prof_tab":
      return (state = false);
    default:
      return state;
  }
};
export default OpenAndCloseProfile;
