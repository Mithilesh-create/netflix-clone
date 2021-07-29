const initialState = false;
const OpenAndCloseModal = (state = initialState, action) => {
  switch (action.type) {
    case "Open_modal":
      return (state = true);
    case "Close_modal":
      return (state = false);
    default:
      return state;
  }
};
export default OpenAndCloseModal;
